import { Categories } from "@/app/models/CategoriesSchema";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";



mongoose.connect(`${process.env.NEXT_PUBLIC_MONGODB_URL}`);


export async function GET(){
    const data = await Categories.find().populate('parent').exec();
    return NextResponse.json(data);
}


export async function POST(request:NextRequest){
    const body = await request.json();
    await Categories.create({
        name : body.categoryName,
        parent : body.parentCategory,
    });
    return NextResponse.json({id:null});
}


export async function PUT(request:NextRequest){
    const body = await request.json();
    await Categories.updateOne({_id:body._id},{
        name : body.categoryName,
        parent : body.parentCategory,
    });
    return NextResponse.json({success:true});
}   

export async function DELETE(request:NextRequest){
    const category_id = request.nextUrl.searchParams.get("id");
    await Categories.deleteOne({_id:category_id});
    return NextResponse.json({sucess:true});
}