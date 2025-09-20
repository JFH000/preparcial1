"use client";
import {
  createAuthor,
  deleteAuthor,
  getAuthors,
  updateAuthor,
} from "@/lib/api";
import { useEffect, useState } from "react";

export function useAuthors() {
  const [authors, setAuthors] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadAuthors();
  }, []);

  async function loadAuthors() {
    setLoading(true);
    const data = await getAuthors();
    setAuthors(data);
    setLoading(false);
  }

  async function addAuthor(author: any) {
    const newAuthor = await createAuthor(author);
    setAuthors([...authors, newAuthor]);
  }

  async function editAuthor(id: number, author: any) {
    const updated = await updateAuthor(id, author);
    setAuthors(authors.map((a) => (a.id === id ? updated : a)));
  }

  async function removeAuthor(id: number) {
    await deleteAuthor(id);
    setAuthors(authors.filter((a) => a.id !== id));
  }

  return { authors, loading, addAuthor, editAuthor, removeAuthor };
}
