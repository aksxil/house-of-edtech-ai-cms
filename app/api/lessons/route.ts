import { prisma } from "@/lib/prisma";
import { requireInstructor } from "@/lib/requireInstructor";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const instructor = await requireInstructor();
    const body = await req.json();

    // Check course ownership
    const course = await prisma.course.findUnique({
      where: { id: body.courseId },
    });

    if (!course || course.instructorId !== instructor.id) {
      return NextResponse.json(
        { error: "Not authorized to add lesson to this course" },
        { status: 403 }
      );
    }

    const lesson = await prisma.lesson.create({
      data: {
        title: body.title,
        content: body.content,
        courseId: body.courseId,
      },
    });

    return NextResponse.json(lesson);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 401 });
  }
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const courseId = searchParams.get("courseId");

  if (!courseId) {
    return NextResponse.json(
      { error: "courseId required" },
      { status: 400 }
    );
  }

  const lessons = await prisma.lesson.findMany({
    where: { courseId },
    orderBy: { createdAt: "asc" },
  });

  return NextResponse.json(lessons);
}
