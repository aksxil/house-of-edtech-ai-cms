import { getUserFromToken } from "./getUserFromToken";

export async function requireInstructor() {
  const user = await getUserFromToken();

  if (!user || user.role !== "INSTRUCTOR") {
    throw new Error("Unauthorized: Instructor access required");
  }

  return user;
}
