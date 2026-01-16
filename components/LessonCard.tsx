import AISummaryButton from "./AISummaryButton";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function LessonCard({ lesson }: any) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{lesson.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm mb-2">{lesson.content}</p>
        {lesson.summary && (
          <pre className="bg-muted p-2 rounded text-sm">{lesson.summary}</pre>
        )}
        <AISummaryButton lessonId={lesson.id} />
      </CardContent>
    </Card>
  );
}
