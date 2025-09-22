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

    // Iniciamos con todos sin favorito
    const withFavorites = data.map((a: any) => ({ ...a, favorite: false }));

    setAuthors(withFavorites);
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

  function setFavorite(id: number) {
    setAuthors((prev) =>
      prev.map((a) => (a.id === id ? { ...a, favorite: !a.favorite } : a))
    );
  }

  const favorites = authors.filter((a) => a.favorite);

  return {
    authors,
    loading,
    addAuthor,
    editAuthor,
    removeAuthor,
    setFavorite,
    favorites,
  };
}
