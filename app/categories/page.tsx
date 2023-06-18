"use client"
import Layout from '@/components/Layout'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import styled from 'styled-components'
import Swal from 'sweetalert2'

const Catergories = () => {
    const [categoryName,setcategoryName] = useState("");
    const [categories,setCategories] = useState<any>([]);
    const [parentCategory,setParentCategory] = useState("");
    const [editedCategory,setEditedCategory] = useState<any>(null);
    
    useEffect(()=>{
        getCategories();
    },[]);

    const getCategories=async()=>{
        await axios.get("/api/categories").then((response)=>{
            setCategories(response.data);
            
        });
    }
    const saveCategory=async(e:any)=>{
        e.preventDefault();

        if(editedCategory){
            const data = {categoryName,parentCategory};
            await axios.put("/api/categories",{...data,_id:editedCategory._id}).then((response)=>{
                toast.success("Category Updated");
            });
        }else{
            await axios.post("/api/categories",{categoryName,parentCategory}).then((response)=>{
                toast.success("Category Inserted");
            });
        }
        setcategoryName("");
        getCategories(); 

        
    }

    const editCategory=(category:any)=>{
        console.log(category);
        setEditedCategory(category);
        setcategoryName(category.name);
        setParentCategory(category?.parent?._id);
    }  

    const deleteCategory=async(category:any)=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't able to revert this!",
            icon: 'warning',
            showCancelButton : true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText : "Yes delete it!",

        }).then(async (result)=>{
            if (result.isConfirmed) {
                await axios.delete(`/api/categories?id=${category._id}`).then((response)=>{
                    Swal.fire(
                    'Deleted!',
                    'Your category has been deleted.',
                    'success'
                    );
                    getCategories();
                }).catch((err)=>{
                    Swal.fire(
                        "Error",
                        "Something went wrong",
                        'error',
                    )
                })
              } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
              ) {
                /* Nothing */
              }
        })
    }

    

  return (
    <Layout>
        <MainDiv>
            <h2>
                Categories
            </h2>
            <label>New catergory name</label>
            <form className='container' onSubmit={(e:any)=>saveCategory(e)}>
              <input value={categoryName} type="text" placeholder='Category Name' onChange={(e:any)=>setcategoryName(e.target.value)}/>
              <select name="parentCat" id="" value={parentCategory} onChange={(e:any)=>setParentCategory(e.target.value)}>
                {categories.length > 0 && (
                    categories.map((item:any,index:any)=>(
                        <option value={item._id} key={item._id}>{item.name}</option>
                    ))
                )}
              </select>
                <button>
                    Save
                </button>  
            </form>
            <table>
                <thead>
                    <tr>
                        <td>Category Name</td>
                        <td>Parent</td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    {categories.length > 0 && (
                        categories.map((item:any,index:any)=>(
                            <tr>
                                <td>{item.name}</td>
                                <td>{item?.parent?.name}</td>
                                <td>
                                    <button className='btn' onClick={()=>editCategory(item)}>
                                        Edit
                                    </button>
                                    <button className='btn' onClick={()=>deleteCategory(item)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </MainDiv>
    </Layout>
  )
}



const MainDiv = styled.div`
    color: rgb(45,45,153);
    width: 100%;
    h2{
        font-weight: 600;
        margin:0 0 2rem 0;
    }
    label{
        font-size: 1.2rem;
        font-weight: 500;
    }
    .container{
        margin: 0rem 0 0 0;
        button{
            padding: 0.5rem 1rem;
            font-size: 20px;
            border-radius:0.3rem;
            border: none;
            background-color:rgb(97, 97, 230);
            color: white;
            margin: 0.5rem 0 0 0.5rem;
        }
        input{
            margin: 0 0 1rem 0;
            font-size: 20px;
            border-radius: 0.3rem;
            border: 2px solid #80808083;
            padding: 0.5rem 0.2rem 0.5rem 0.2rem;
            :focus{
                outline: none;
                border-color: rgb(45,45,153);
            }
        }
        
    }
    thead{
        background-color: rgba(45, 45, 153, 0.425);
        color: white;
    }
    td{
        padding: 1rem 1rem;
    }
    table, th, td {
        margin: 2rem 0 0 0;
        border: 1px solid grey;
        border-collapse: collapse;
    }
    table{
        width: 100%;
    }
    tr{
        font-size: 18px;
    }
    select{
        padding: 0.5rem 0.5rem;
        font-size: 1.3rem;
        color: rgb(45,45,153);
        border: 2px solid grey;
        border-radius: 0.3rem;
        margin: 0 0 0 0.5rem;
    }
    .btn{
            padding: 0.5rem 1rem;
            font-size: 20px;
            border-radius:0.3rem;
            border: none;
            background-color:rgb(97, 97, 230);
            color: white;
            margin: 0.5rem 0 0 0.5rem;
    }
    
`

export default Catergories