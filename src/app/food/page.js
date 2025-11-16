import connectToDB from "@/configs/db";
import FoodModel from "@/models/food";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectToDB(); 
    const body = await req.json();

    const food = await FoodModel.create(body);

    return NextResponse.json({ message: "Food added!" }, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}
