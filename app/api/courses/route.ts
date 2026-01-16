import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireInstructor } from "@/lib/requireInstructor";

export async function POST(req: Request) {
  const instructor = await requireInstructor();

  const { title, description } = await req.json();

  if (!title || !description) {
    return NextResponse.json(
      { error: "Title and description required" },
      { status: 400 }
    );
  }

  const course = await prisma.course.create({
    data: {
      title,
      description,
      instructorId: instructor.id,
    },
  });

  return NextResponse.json(course);
}
