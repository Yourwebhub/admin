
import Developer from "@/backend/developer";
import dbConnect from "@/backend/dbConnect";
import { NextResponse } from "next/server";

export async function POST(req) {
  await dbConnect();
  try {
    const data = await req.json();
    const developer = await Developer.create(data);
    return NextResponse.json({
      success: true,
      message: developer,
    },{status: 201});
  } catch (error) {
    if (error.code === 11000) {
      return NextResponse.json({
        success: false,
        message: "fullName Already Exist",
      },{status: 400});
    }
    return NextResponse.json({
      status: "error",
      message: error.message,
    });
  }
}

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page")) || 1;
    const limit = parseInt(searchParams.get("limit")) || 9;
    const category = searchParams.get("category");
    const search = searchParams.get("search");

    await dbConnect();

    // Build the query
    const query = {};
    if (category) query.category = category;
    if (search) query.fullName = { $regex: search, $options: "i" };

    // Fetch developers with pagination
    const developers = await Developer.find(query)
      .skip((page - 1) * limit)
      .limit(limit);

    // Count total developers matching the query
    const totalDevelopers = await Developer.countDocuments(query);
    const totalPages = Math.ceil(totalDevelopers / limit);

    // Return data along with pagination details
    return NextResponse.json(
      {
        success: true,
        data: developers,
        pagination: {
          currentPage: page,
          totalPages,
          totalDevelopers,
          limit,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching developers:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch developers" },
      { status: 500 }
    );
  }
}
