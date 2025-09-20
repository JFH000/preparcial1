"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useAuthors } from "@/hooks/useAuthors";
import Link from "next/link";

export default function AuthorList() {
  const { authors, loading, removeAuthor } = useAuthors();

  if (loading) return <p>Loading...</p>;

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Authors</h1>
        <Link href="/create">
          <Button>New Author</Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {authors.map((author) => (
          <Card key={author.id} className="shadow-sm">
            <CardContent className="p-4 flex justify-between items-center">
              <div>
                <h2 className="font-semibold">{author.name}</h2>
                <p className="text-sm text-gray-500">{author.description}</p>
              </div>
              <div className="flex gap-2">
                <Link href={`/edit/${author.id}`}>
                  <Button variant="secondary">Edit</Button>
                </Link>
                <Button
                  variant="destructive"
                  onClick={() => removeAuthor(author.id)}
                >
                  Delete
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
