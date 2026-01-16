import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function CourseCard({ course }: any) {
  return (
    <Link href={`/dashboard/courses/${course.id}`}>
      <Card className="hover:shadow-lg transition cursor-pointer">
        <CardHeader>
          <CardTitle>{course.title}</CardTitle>
          <CardDescription>{course.description}</CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
}
