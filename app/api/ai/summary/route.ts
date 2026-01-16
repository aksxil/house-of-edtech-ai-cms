import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const { content } = body;

  // ✅ If no API key, fallback summary
  if (!process.env.OPENAI_API_KEY) {
    return NextResponse.json({
      summary: content
        .split(" ")
        .slice(0, 40)
        .join(" "),
      aiMode: "fallback",
    });
  }

  // 🔥 Import OpenAI ONLY if key exists
  const OpenAI = (await import("openai")).default;

  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "user",
        content: `Summarize this lesson:\n\n${content}`,
      },
    ],
  });

  return NextResponse.json({
    summary: response.choices[0].message.content,
    aiMode: "openai",
  });
}
