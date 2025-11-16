import connectToDB from "@/configs/db";
import FoodModel from '@/models/food'
import { NextResponse } from "next/server";
export async function POST(req) {

    try{

    connectToDB();
    const body = await req.json();
    const {
        name,
        price,
        shortDescription,
        score,
        tags,
    } = body;
  
    const food = await FoodModel.create({
        name,
        price,
        shortDescription,
        score,
        tags,
    });

    return NextResponse.json({message: "Food Cooked successfully"} ,{status:203} )
        } catch (err){
            return NextResponse.json({message: err} ,{status:500} )
    }

} 

export async function GET() {
    const foods = await FoodModel.find({},'-__v');
    return Response.json(foods)
}