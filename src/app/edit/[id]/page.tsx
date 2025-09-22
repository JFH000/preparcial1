"use client";
import AuthorForm from "@/components/authors/AuthorForm";
import { useAuthors } from "@/hooks/useAuthors";
import { useParams, useRouter } from "next/navigation";

export default function EditarPage() {
  const { authors, editAuthor } = useAuthors();
  const router = useRouter();
  const params = useParams();
  const author = authors.find((a) => a.id === Number(params.id));

  if (!author) return <p>Author not found</p>;

  async function handleUpdate(data: any) {
    await editAuthor(author.id, data);
    router.push("/authors");
  }

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Edit Author</h1>
      <AuthorForm initialData={author} onSubmit={handleUpdate} />
    </div>
  );
}
