import connectDB from "../../../../middleware/dbConnect";
import Grievance from "../../../../models/Grievance";
import { NextResponse } from "next/server";

export async function GET() {
    await connectDB();

    try {

        const grievances = await Grievance.find().sort({ date: -1 });
        return NextResponse.json({ grievances }, { status: 200 });

    } catch (e) {
        NextResponse.json({ message: "Something went wrong", success: false }, { status: 500 });
        console.log(e);
    }

}

export async function PATCH(req) {

    await connectDB();

    const body = await req.json();

    try {
        const grievance = await Grievance.findById(body.id);

        grievance.status = body.status;

        await grievance.save();

        return NextResponse.json({ message: "Grievance updated successfully", success: true }, { status: 200 });
    } catch (e) {
        NextResponse.json({ message: "Something went wrong", success: false }, { status: 500 });
        console.log(e);
    }

}

export async function DELETE(req) {
    await connectDB();
    const body = await req.json();
    const { id } = body;

    const deleted = await Grievance.findByIdAndDelete(id);

    if (!deleted) {
        return NextResponse.json({ error: "Grievance not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Grievance deleted" });
}