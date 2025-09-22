import NavBar from "@/components/Navbar";
import { AuthorsProvider } from "@/context/AuthorContext";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-primary-foreground">
        <NavBar />
        <AuthorsProvider>
          <main className="p-6">{children}</main>
        </AuthorsProvider>
      </body>
    </html>
  );
}
