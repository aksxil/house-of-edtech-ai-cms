import { prisma } from "@/lib/prisma";
import { requireInstructor } from "@/lib/requireInstructor";
import { NextResponse } from "next/server";

type Params = Promise<{ id: string }>;

/* ================= UPDATE COURSE ================= */
export async function PUT(
  req: Request,
  context: { params: Params }
) {
  try {
    const { id } = await context.params;
    const instructor = await requireInstructor();
    const body = await req.json();

    const course = await prisma.course.findUnique({
      where: { id },
    });

    if (!course || course.instructorId !== instructor.id) {
      return NextResponse.json(
        { error: "Not authorized" },
        { status: 403 }
      );
    }

    const updated = await prisma.course.update({
      where: { id },
      data: {
        title: body.title,
        description: body.description,
      },
    });

    return NextResponse.json(updated);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 401 });
  }
}

/* ================= DELETE COURSE ================= */
export async function DELETE(
  req: Request,
  context: { params: Params }
) {
  try {
    const { id } = await context.params;
    const instructor = await requireInstructor();

    const course = await prisma.course.findUnique({
      where: { id },
    });

    if (!course || course.instructorId !== instructor.id) {
      return NextResponse.json(
        { error: "Not authorized" },
        { status: 403 }
      );
    }

    await prisma.course.delete({
      where: { id },
    });

    return NextResponse.json({ success: true });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 401 });
  }
}

/* ================= PUBLISH / UNPUBLISH ================= */
export async function PATCH(
  req: Request,
  context: { params: Params }
) {
  try {
    const { id } = await context.params;
    const instructor = await requireInstructor();

    const course = await prisma.course.findUnique({
      where: { id },
    });

    if (!course || course.instructorId !== instructor.id) {
      return NextResponse.json(
        { error: "Not authorized" },
        { status: 403 }
      );
    }

    const updated = await prisma.course.update({
      where: { id },
      data: {
        published: !course.published,
      },
    });

    return NextResponse.json(updated);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 401 });
  }
}
