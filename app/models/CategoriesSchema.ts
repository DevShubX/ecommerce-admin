import mongoose, { Schema, model, models } from "mongoose";


const CategoriesSchema = new Schema({
    name : {type:String,required:true},
    parent : {type: mongoose.Types.ObjectId,ref:'Categories'},
});


export const Categories = models.Categories || model("Categories",CategoriesSchema);
