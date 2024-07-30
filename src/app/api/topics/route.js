import { NextResponse } from "next/server";
import { connectMonogDB } from "../../../../libs/mongodb";
import Topic from "../../../../models/topic";

export async function POST(request) {
  const { title, description } = await request.json();
  await connectMonogDB()
  await Topic.create({title, description});
  return NextResponse.json({message:"Topic Created"},{status:201})
}
