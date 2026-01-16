"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function CreateLessonForm({ courseId }: any) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  async function submit(e: any) {
    e.preventDefault();
    await fetch("/api/lessons", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content, courseId }),
    });
    location.reload();
  }

  return (
    <form onSubmit={submit} className="space-y-3">
      <Input placeholder="Lesson title" value={title} onChange={e => setTitle(e.target.value)} />
      <Textarea placeholder="Lesson content" value={content} onChange={e => setContent(e.target.value)} />
      <Button>Add Lesson</Button>
    </form>
  );
}
