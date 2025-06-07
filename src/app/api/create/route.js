import connectDB from "../../../../middleware/dbConnect";
import { NextResponse } from "next/server";
import Grievance from "../../../../models/Grievance";




export async function POST(req) {

    await connectDB();

    const body = await req.json();



    if (!body.title) {
        return NextResponse.json({ message: "Title is required", success: false }, { status: 400 });
    }

    if (!body.description) {
        return NextResponse.json({ message: "Description is required", success: false }, { status: 400 });
    }

    const grievance = await new Grievance({
        title: body.title,
        description: body.description,
        date: Date.now(),
        status: "❌ Unresolved",
    });

    const savedGrievance = await grievance.save();

    console.log(grievance);

    return NextResponse.json({ message: "Grievance created successfully", success: true, grievance: grievance }, { status: 200 });

}