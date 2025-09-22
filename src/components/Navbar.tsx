import Link from "next/link";
import { Button } from "./ui/button";

export default function NavBar() {
  return (
    <nav className="w-full flex justify-between items-center p-4 border-b bg-background">
      <h1 className="text-xl font-bold">Bookstore</h1>
      <div className="space-x-2">
        <Link href="/authors">
          <Button variant="outline">Authors</Button>
        </Link>
        <Link href="/create">
          <Button>Create Author</Button>
        </Link>
        <Link href="/favoritos">
          <Button>Favorite Authors</Button>
        </Link>
      </div>
    </nav>
  );
}
