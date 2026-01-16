import { getUserFromToken } from "./getUserFromToken";
import { NextResponse } from "next/server";

export async function requireInstructor() {
  const user = await getUserFromToken();

  if (!user || user.role !== "INSTRUCTOR") {
    throw NextResponse.json(
      { error: "Unauthorized: Instructor access required" },
      { status: 401 }
    );
  }

  return user;
}
