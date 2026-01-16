import { prisma } from "@/lib/prisma";
import LessonCard from "@/components/LessonCard";
import CreateLessonForm from "@/components/CreateLessonForm";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function CoursePage({ params }: Props) {
  const { id } = await params; // ✅ IMPORTANT FIX

  const course = await prisma.course.findUnique({
    where: { id },
    include: { lessons: true },
  });

  if (!course) {
    return <div className="p-6">Course not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold">{course.title}</h1>
      <p className="text-muted-foreground mb-6">
        {course.description}
      </p>

      <CreateLessonForm courseId={course.id} />

      <div className="space-y-4 mt-6">
        {course.lessons.map((lesson) => (
          <LessonCard key={lesson.id} lesson={lesson} />
        ))}
      </div>
    </div>
  );
}
