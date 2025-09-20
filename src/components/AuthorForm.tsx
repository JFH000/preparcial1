"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function AuthorForm({ initialData = null, onSubmit }: any) {
  const today = new Date().toISOString().split("T")[0];

  const [form, setForm] = useState({
    name: initialData?.name || "",
    birthDate: initialData?.birthDate || today,
    description: initialData?.description || "",
    image: initialData?.image || "",
  });

  function handleChange(e: any) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    onSubmit(form);
  }

  return (
    <Card className="max-w-md mx-auto shadow-lg">
      <CardContent className="space-y-4 p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Name"
          />
          <Input
            type="date"
            name="birthDate"
            value={form.birthDate}
            onChange={handleChange}
          />
          <Input
            name="image"
            value={form.image}
            onChange={handleChange}
            placeholder="URL de la imagen"
          />
          <Textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Descripción"
          />
          <Button type="submit" className="w-full">
            {initialData ? "Actualizar" : "Crear"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
