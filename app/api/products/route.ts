import { Product } from "@/app/models/ProductSchema";
import mongoose from "mongoose";
import { useParams, usePathname } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";


mongoose.connect(`${process.env.NEXT_PUBLIC_MONGODB_URL}`);

export async function GET(request:NextRequest){
    const product_id = request.nextUrl.searchParams.get("id");
    if(product_id){
        const data = await Product.findById(product_id).exec();
        return NextResponse.json(data);
    }else{
        const data = await Product.find().exec();
        return NextResponse.json(data);
    }
}

export async function POST(request:Request){
    const body = await request.json();
    await Product.create({
        title:body.productName,
        description:body.description,
        price: body.price,
    }).then(()=>{
        // console.log("Data Inserted:",body);
    }).catch((e:any)=>{
        // console.log("Something went wrong",e);
    });
    return NextResponse.json({id:"null"})
}

export async function PUT(request:NextRequest){
    const body = await request.json();
    console.log("body",body);
    await Product.updateOne({_id:body.product_id},
    {
        title : body.productName,
        description : body.description,
        price : body.price,
        $set:{images : body.images || body.productImages,
            properties : body.properties},
    });

    return NextResponse.json({success:true});
}


export async function DELETE(request:NextRequest) {
    const product_id = request.nextUrl.searchParams.get("id");
    await Product.deleteOne({_id:product_id});
    return NextResponse.json({success:true});
}