"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function AISummaryButton({ lessonId }: any) {
  const [loading, setLoading] = useState(false);

  async function generate() {
    setLoading(true);
    await fetch("/api/lessons/ai/summary", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ lessonId }),
    });
    location.reload();
  }

  return (
    <Button variant="secondary" onClick={generate} disabled={loading}>
      {loading ? "Generating..." : "Generate AI Summary"}
    </Button>
  );
}
