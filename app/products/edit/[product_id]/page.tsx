"use client"
import { storage } from '@/app/Firebase/firebase'
import Layout from '@/components/Layout'
import axios from 'axios'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { Toaster, toast } from 'react-hot-toast'
import { BsFillArrowLeftSquareFill, BsUpload } from 'react-icons/bs'
import styled from 'styled-components'

const EditProductPage = () => {
  const product_id = useParams().product_id;
  const [productName,setProductName] = useState("");
  const [description,setDescription] = useState("");
  const [price,setPrice] = useState("");
  let [productImages,setProductImages] = useState<any>([]);
  let [images,setImages] = useState<any>([]);
  let [selectedPhotos,setSelectedPhotos] = useState<any>([]);
  let [imageFiles,setImagefiles] = useState<any>([]);
  const [numOfParamters,setNumOfParameters] = useState<any>(0);
  const [existingProperties,setExistProperties] = useState<any>({});
  useEffect(()=>{

    if(!product_id) return;
    
    axios.get(`/api/products?id=${product_id}`).then((response:any)=>{
      const data = response.data;
      setProductName(data.title);
      setDescription(data.description);
      setPrice(data.price);
      setProductImages(data.images);
      setExistProperties(data.properties ?? {});
    }).catch((error:any)=>{
      
    })
  },[product_id]);


  Object.keys(existingProperties).map((key:any,index:any)=>(
    console.log(`${key}:${existingProperties[key]}`)
  ))

  const editData=async(e:any)=>{
    e.preventDefault();
    const properties = Object.keys(existingProperties).length > 0 ? 
    Object.assign(existingProperties,getParameters(e)) : getParameters(e);

    await uploadPhotos();
    let data = {};
    if(productImages.length > 0){
       data = {productName,description,price,productImages,properties};
    }else{
      data = {productName,description,price,images,properties}
    }
    await axios.put("/api/products",{...data,product_id}).then((res)=>{
      toast.success("Data Updated");
    }).catch((error)=>{
      toast.error("Something went wrong");
    });
    setImagefiles([]);
  }

  const selectPhotos=async(e:any)=>{
    imageFiles = imageFiles.concat([e.target.files[0]]);
    setImagefiles(imageFiles);
    const photoUrl = URL.createObjectURL(e.target.files[0]);
    selectedPhotos = selectedPhotos.concat([photoUrl]);
    setSelectedPhotos(selectedPhotos);
  }


  const uploadPhotos=async()=>{
    for(let i:any = 0 ;i<imageFiles.length ;i++){
      const newfilename = `${Date.now()}-${i}.${imageFiles[i].name.split(".").pop()}`;
      const storageref = ref(storage,newfilename);
      const uploadTask = uploadBytes(storageref,imageFiles[i]);
      await uploadTask.then(async (snapshot)=>{
        const downloadUrl = await getDownloadURL(snapshot.ref);
        if(productImages.length > 0){
          productImages = productImages.concat([downloadUrl]);
          setProductImages(images);
        }
        else{
          images = images.concat([downloadUrl]);
          setImages(images);
         
        }   
      });
    }
  }
  const getParameters=(e:any)=>{
    var newParams:any = {};
    const form = e.target;
    const formData = new FormData(form);
    for (let i = 0; i < numOfParamters; i++) {
        const parameterName = formData.get(`propertyname-${i}`);
        const parameterValue = formData.get(`property-${i}`);
        if (parameterName && parameterValue) {
          newParams[parameterName?.valueOf().toString()] = parameterValue;
        }
      }
    // setProperties(newParams);
    setNumOfParameters(0);
    return newParams;
}
  return (
    <Layout>
        <MainDiv onSubmit={editData}>
          <Heading>
             <h1>
              Edit Product
            </h1>
            <Link href={"/products"}>
              <BsFillArrowLeftSquareFill/>
              Back
            </Link>
          </Heading>
            <label>Product Name</label>
            <input type="text" value={productName} onChange={(e:any)=>setProductName(e.target.value)}/>
            <label>Photos</label>
            <UploadSection>
            {productImages.length > 0 && (
                productImages.map((image:any,index:any)=>{
                  return <img src={image} alt="product-photo" key={image} />
                })
            )}
              {selectedPhotos.length > 0 && (
              selectedPhotos.map((image:any,index:any)=>(
                <img src={image} alt="product-photo" key={image}/>
                ))
              )}
              <label className='uploadbox'>
                <BsUpload/> Upload
                <input type="file" name="photos" id="" style={{display:"none"}} onChange={(e:any)=>
                {
                  selectPhotos(e);
                  }}/>
              </label>
            </UploadSection>
            <PropertyBox>
                <button onClick={()=>setNumOfParameters(numOfParamters+1)} className='add-btn' type='button'>
                    Add/Edit new properties
                </button>
                <div>
                  {numOfParamters > 0 && (
                        [...Array(numOfParamters)].map((item:any,index:any)=>(
                            <div key={index} className='params-box'>
                                <input type="text" placeholder='Property Name' name={`propertyname-${index}`}/>
                                <input type="text" placeholder='Property' name={`property-${index}`} />
                                <button className='remove-btn' onClick={()=>setNumOfParameters(numOfParamters-1)} type='button'>
                                    Remove
                                </button>
                            </div>
                        ))
                        
                    )}
                </div>
                <div>
                  {Object.keys(existingProperties).length > 0 && (
                    Object.keys(existingProperties).map((key:any,index:any)=>(
                      <div className='props-box'>
                        <span className='props-head'>{key[0].toUpperCase() + key.substring(1)}</span >:
                        <span className='props-value'>{existingProperties[key]}</span>
                      </div>
                    ))
                  )}
                </div>
            </PropertyBox>
            <label >Description</label>
            <textarea name="desc" id="" value={description} onChange={(e:any)=>setDescription(e.target.value)}></textarea>
            <label>Price (in USD)</label>
            <input type="text" value={price} onChange={(e:any)=>setPrice(e.target.value)}/>
          <div>
            <Button type='submit'>
              Save
            </Button>
          </div>
      </MainDiv>
    </Layout>
  )
}
const PropertyBox = styled.div`
    margin: 1rem 0 0 0rem;
    button{
            padding: 0.5rem 1rem;
            font-size: 20px;
            border-radius:0.5rem;
            border: none;
            background-color:rgb(45,45,153);
            color: white;
            margin: 0.5rem 0 0.5rem 0rem;
        }
    .add-btn{
      margin: 0.5rem 0 1rem 0;
    }
    input{
        margin: 0 0.5rem 1rem 0;
        font-size: 20px;
        border-radius: 0.4rem;
        border: 2px solid #80808083;
        padding: 0.5rem 0.2rem 0.5rem 0.2rem;
        :focus{
            outline: none;
            border-color: rgb(45,45,153);
        }
    }
    .props-box{
      margin: 0.4rem 0 1rem 0 ;
    }
    .props-head{
      font-size : 1em;
      margin: 0 0.2rem 0 0;
      color: rgb(45,45,153);
      font-weight: 600;
    }
    .props-value{
      margin: 0 0 0 0.2rem;
      font-size: 1rem;
      color: black;
      font-weight: 600;
    }
    .params-box{
      input{
        margin: 0 0.5rem 0 0;
      }
    }
`
const UploadSection = styled.div`
  display: flex;
  gap: 0.8rem;
  flex-wrap: wrap;
  img{
    width: 100px;
    height: 100px;
  }
`
const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  a{
    display: flex;
    padding: 0.5rem 0.5rem;
    height: 40px;
    width: 90px;
    margin: 0.2rem 0 0 0;
    color: rgb(45,45,153);
    font-size: 17px;
    border: 3px solid rgb(45,45,153);
    gap: 0.3rem;
    border-radius: 0.5rem;
    vertical-align: middle;
  }
`
const Button = styled.button`
  padding: 0.5rem 1rem;
  font-size: 20px;
  border-radius:0.5rem;
  border: none;
  background-color:rgb(45,45,153);
  color: white;
  margin: 1rem 0 0 0;
`
const MainDiv = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-y: scroll;
  h1{
    margin:0 0 2rem 0 ;
    color: rgb(45,45,153);
    font-weight: 600;
  }
  textarea,input{
    margin: 0 0 1rem 0;
    font-size: 20px;
    border-radius: 0.2rem;
    border: 2px solid #80808039;
    padding: 0.2rem 0.2rem 0.2rem 0.2rem;
    :focus{
      outline: none;
      border-color: rgb(45,45,153);
    }
  }
  label{
    color: rgb(45,45,153);
    font-weight: 600;
  }
  .uploadbox{
    margin: 0 0 1rem 0;
    display: flex;
    background-color: #dbd9d9;
    gap: 0.3rem ;
    width: 100px;
    height: 100px;
    align-items: center;
    justify-content: center;
    border-radius: 0.5rem;
    cursor: pointer;
    input{
      width: 100%;
      height: 100%;
    }
  }
`

export default EditProductPage