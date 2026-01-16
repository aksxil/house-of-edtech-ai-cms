"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  async function logout() {
    await fetch("/api/auth/logout", {
      method: "POST",
      credentials: "include",
    });
    router.refresh();
    router.push("/login");
  }

  return (
    <Button variant="outline" onClick={logout}>
      Logout
    </Button>
  );
}
