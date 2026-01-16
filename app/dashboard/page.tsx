import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import LogoutButton from "@/components/LogoutButton";
import CourseCard from "@/components/CourseCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function DashboardPage() {
  const cookieStore = await cookies();
  if (!cookieStore.get("token")) redirect("/login");

  const courses = await prisma.course.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex justify-between mb-6">
        <h1 className="text-3xl font-bold">Instructor Dashboard</h1>
        {/* <LogoutButton /> */}
      </div>

      <Link href="/dashboard/courses/new">
        <Button className="mb-6">+ Create Course</Button>
      </Link>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {courses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}
