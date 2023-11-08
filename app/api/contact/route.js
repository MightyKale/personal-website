import connectDB from "@/app/lib/mongodb";
import { NextResponse } from "next/server";
import Contact from "@/app/models/contact";
import mongoose from "mongoose";

export async function POST(req) {
    const {name, email, message } = await req.json();
  
    try {
      await connectDB();
      await Contact.create({name, email, message });
  
      return NextResponse.json({
        msg: ["Thank you for your message. I will contact you via email within two business days."],
        success: true,
      });
    } catch (error) {
      if (error instanceof mongoose.Error.ValidationError) {
        let errorList = [];
        for (let e in error.errors) {
          errorList.push(error.errors[e].message);
        }
        console.log(errorList);
        return NextResponse.json({ msg: errorList });
      } else {
        return NextResponse.json({ msg: ["Unable to send message."] });
      }
    }
  }