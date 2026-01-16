import { prisma } from "@/lib/prisma";
import { requireInstructor } from "@/lib/requireInstructor";
import { NextResponse } from "next/server";

// Simple fallback summarizer
function fallbackSummary(text: string) {
  const sentences = text
    .replace(/\n/g, " ")
    .split(".")
    .filter(Boolean)
    .slice(0, 5);

  return sentences.map(s => `• ${s.trim()}`).join("\n");
}

export async function POST(req: Request) {
  try {
    const instructor = await requireInstructor();
    const { lessonId } = await req.json();

    const lesson = await prisma.lesson.findUnique({
      where: { id: lessonId },
      include: { course: true },
    });

    if (!lesson || lesson.course.instructorId !== instructor.id) {
      return NextResponse.json(
        { error: "Not authorized" },
        { status: 403 }
      );
    }

    let summary: string;

    try {
      // 🔁 AI BLOCK (pluggable – disabled for now)
      throw new Error("AI provider unavailable");
    } catch {
      // ✅ FALLBACK SUMMARY
      summary = fallbackSummary(lesson.content);
    }

    const updatedLesson = await prisma.lesson.update({
      where: { id: lessonId },
      data: { summary },
    });

    return NextResponse.json({
      ...updatedLesson,
      aiMode: "fallback",
    });
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message },
      { status: 500 }
    );
  }
}
