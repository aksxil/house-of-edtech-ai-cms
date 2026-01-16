import { prisma } from "@/lib/prisma";
import { requireInstructor } from "@/lib/requireInstructor";
import { NextResponse } from "next/server";

type Params = Promise<{ id: string }>;

/* ===== UPDATE LESSON ===== */
export async function PUT(
  req: Request,
  context: { params: Params }
) {
  try {
    const { id } = await context.params;
    const instructor = await requireInstructor();
    const body = await req.json();

    const lesson = await prisma.lesson.findUnique({
      where: { id },
      include: { course: true },
    });

    if (!lesson || lesson.course.instructorId !== instructor.id) {
      return NextResponse.json(
        { error: "Not authorized" },
        { status: 403 }
      );
    }

    const updated = await prisma.lesson.update({
      where: { id },
      data: {
        title: body.title,
        content: body.content,
      },
    });

    return NextResponse.json(updated);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 401 });
  }
}

/* ===== DELETE LESSON ===== */
export async function DELETE(
  req: Request,
  context: { params: Params }
) {
  try {
    const { id } = await context.params;
    const instructor = await requireInstructor();

    const lesson = await prisma.lesson.findUnique({
      where: { id },
      include: { course: true },
    });

    if (!lesson || lesson.course.instructorId !== instructor.id) {
      return NextResponse.json(
        { error: "Not authorized" },
        { status: 403 }
      );
    }

    await prisma.lesson.delete({ where: { id } });

    return NextResponse.json({ success: true });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 401 });
  }
}
