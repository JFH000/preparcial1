"use client";
import AuthorForm from "@/components/authors/AuthorForm";
import { useAuthors } from "@/hooks/useAuthors";
import { useRouter } from "next/navigation";

export default function CrearPage() {
  const { addAuthor } = useAuthors();
  const router = useRouter();

  async function handleCreate(author: any) {
    await addAuthor(author);
    router.push("/authors");
  }

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Create Author</h1>
      <AuthorForm onSubmit={handleCreate} />
    </div>
  );
}
