import { NextResponse } from "next/server";
import connectMongoDB from "../../../../libs/mongodb";
import Topic from "../../../../models/topic";
export async function PUT(request, { params }) {
	try {
		const { id } = params;

		const { newTitle: title, newDescription: description } = request.json();
		await connectMongoDB();
		await Topic.findByIdAndUpdate(id, { title, description });
		return NextResponse.json({ message: "Topic updated" }, { status: 200 });
	} catch (e) {
		console.log(e);
	}
}

export async function Get(request,{params}){
	const {id}= params;
	await connectMongoDB();
	const topic = await Topic.findOne({_id:id});
	return NextResponse.json({topic},{status:200});

}