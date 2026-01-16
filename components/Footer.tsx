import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-background mt-12">
      <div className="max-w-7xl mx-auto px-6 py-4 text-sm flex flex-col md:flex-row items-center justify-between gap-2 text-muted-foreground">
        
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="font-medium text-foreground">
            Aakash Nishad
          </span>
        </p>

        <div className="flex gap-4">
          <Link
            href="https://github.com/aksxil"
            target="_blank"
            className="hover:text-foreground underline-offset-4 hover:underline"
          >
            GitHub
          </Link>

          <Link
            href="https://www.linkedin.com/in/aakash-nishad/"
            target="_blank"
            className="hover:text-foreground underline-offset-4 hover:underline"
          >
            LinkedIn
          </Link>
        </div>
      </div>
    </footer>
  );
}
