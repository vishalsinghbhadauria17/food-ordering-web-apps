import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://vishalbhadauria:Shoyohinata@cluster0.87cv9gk.mongodb.net/react-js-food-delivery-app').then(()=>{
       console.log('DB connected') ;
    })
}