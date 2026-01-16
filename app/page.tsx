import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-muted text-center">
      <h1 className="text-4xl font-bold mb-4">
        AI EdTech Platform
      </h1>

      <p className="text-muted-foreground mb-6 max-w-md">
        Instructor-focused course and lesson management platform
        with AI-powered summaries.
      </p>

      <div className="flex gap-4">
        <Link href="/login">
          <Button>Login</Button>
        </Link>
        <Link href="/signup">
          <Button variant="outline">Signup</Button>
        </Link>
      </div>
    </div>
  );
}
