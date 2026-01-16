import { prisma } from "@/lib/prisma";

export default async function CourseManagePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const course = await prisma.course.findUnique({
    where: { id },
    include: { lessons: true },
  });

  if (!course) return <p>Course not found</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-2">{course.title}</h1>
      <p className="mb-4 text-gray-600">{course.description}</p>

      <h2 className="text-xl font-semibold mb-2">Lessons</h2>

      <div className="space-y-3">
        {course.lessons.map(lesson => (
          <div key={lesson.id} className="border p-3 rounded">
            <h3 className="font-medium">{lesson.title}</h3>
            <p className="text-sm text-gray-600">
              {lesson.summary || "No summary yet"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
