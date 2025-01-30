import dbConnect from "@/backend/dbConnect";
import Developer from "@/backend/developer";
import { NextResponse } from "next/server";

export  async function GET(req,{params}) {
    await dbConnect();
    try {
        const { id } = await params;
        const developer = await Developer.findById(id);
        if (!developer) {
            return NextResponse.error(new Error("Developer Not Found"), 404);
        }
        return NextResponse.json({
            status: 200,
            data: developer,
        });
    } catch (error) {                        
        return NextResponse.json({
            status: 500,
            error: error.message,
        });
    }}

    export async function PUT(req,{params}) {
        await dbConnect();
      
        try {
          const  {id}  = await params; // Retrieve the ID from route parameters
          const body = await req.json(); // Parse the request body
      
          // Update the developer by ID and return the updated document
          const updatedDeveloper = await Developer.findByIdAndUpdate(id, body, {
            new: true, // Return the updated document
          });
      
          // Handle the case where no developer is found
          if (!updatedDeveloper) {
            return NextResponse.json(
              { status: 404, message: "Developer not found" },
              { status: 404 }
            );
          }
      
          return NextResponse.json(
            { status: 200, data: updatedDeveloper },
            { status: 200 }
          );
        } catch (error) {
          return NextResponse.json(
            { status: 500, error: error.message },
            { status: 500 }
          );
        }
      }
      

export  async function DELETE(req,{params}) {
    await dbConnect();
    try {
        const { id } = await params;
        const deletedDeveloper = await Developer.findByIdAndDelete(id);
        return NextResponse.json({
            status: 200,
            data: deletedDeveloper,
        });
    } catch (error) {
        return NextResponse.json({
            status: 500,
            error: error.message,
        });
    }
}