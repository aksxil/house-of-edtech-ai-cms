import Link from "next/link";
import LogoutButton from "./LogoutButton";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <header className="border-b bg-background">
      <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-6">
        
        {/* Left */}
        <Link href="/dashboard" className="text-lg font-bold">
          🎓 House of Edtech
        </Link>

        {/* Center */}
        <nav className="flex items-center gap-6 text-sm font-medium">
          <Link href="/dashboard" className="hover:text-primary">
            Dashboard
          </Link>
          <Link href="/dashboard/courses/new" className="hover:text-primary">
            Create Course
          </Link>
        </nav>

        {/* Right */}
        <div className="flex items-center gap-4">
          <span className="text-sm text-muted-foreground">
            Instructor
          </span>
          <LogoutButton />
        </div>
      </div>
    </header>
  );
}
