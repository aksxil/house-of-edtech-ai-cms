import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-muted/40">
      <Navbar />
      <main className="flex-1 pt-6">{children}</main>
      <Footer />
    </div>
  );
}
