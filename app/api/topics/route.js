import { NextResponse } from "next/server";
import connectMongoDB from "../../../libs/mongodb";
import Topic from "../../../models/topic";
import { connect } from "mongoose";

export async function POST(request) {
	try {
		const { title, description } = await request.json();
		await connectMongoDB();
		await Topic.create({ title, description });
	} catch (e) {
		console.log(e);
	}

	return NextResponse.json({ message: "Topic Created " }, { status: 201 });
}

export async function GET(){
	await connectMongoDB();
	const topics = await Topic.find();
	return NextResponse.json({topics});
}

export async function DELETE(request){
	const id = request.nextUrl.searchParams.get("id");
	await connectMongoDB();
	await Topic.findByIdAndDelete(id);
	return NextResponse.json({message:"Topic Deleted Successfully"},{status:200});
}
