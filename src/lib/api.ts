const API_URL = "http://127.0.0.1:8080/api/authors";

export async function getAuthors() {
  const res = await fetch(API_URL, { cache: "no-store" });
  return res.json();
}

export async function createAuthor(author: any) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(author),
  });
  return res.json();
}

export async function updateAuthor(id: number, author: any) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(author),
  });
  return res.json();
}

export async function deleteAuthor(id: number) {
  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
}
