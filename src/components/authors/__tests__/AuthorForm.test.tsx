// src/components/authors/__tests__/AuthorForm.test.tsx
import { fireEvent, render, screen } from "@testing-library/react";
import AuthorForm from "../AuthorForm";

describe("AuthorForm", () => {
  test("renderiza correctamente todos los campos del formulario", () => {
    render(<AuthorForm onSubmit={jest.fn()} />);

    // Usamos regex para que sea más flexible con los labels
    expect(screen.getByLabelText(/nombre/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/fecha de nacimiento/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/imagen/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/descripción/i)).toBeInTheDocument();
  });

  test("no permite enviar si los campos requeridos están vacíos", () => {
    render(<AuthorForm onSubmit={jest.fn()} />);

    const submitButton = screen.getByRole("button", { name: /crear/i });
    expect(submitButton).toBeDisabled();
  });

  test("envía datos correctamente cuando se llenan los campos", () => {
    const handleSubmit = jest.fn();
    render(<AuthorForm onSubmit={handleSubmit} />);

    fireEvent.change(screen.getByLabelText(/nombre/i), {
      target: { value: "Gabriel García Márquez" },
    });
    fireEvent.change(screen.getByLabelText(/fecha de nacimiento/i), {
      target: { value: "1927-03-06" },
    });
    fireEvent.change(screen.getByLabelText(/imagen/i), {
      target: { value: "https://ejemplo.com/gabo.jpg" },
    });
    fireEvent.change(screen.getByLabelText(/descripción/i), {
      target: { value: "Escritor colombiano, Nobel de literatura." },
    });

    fireEvent.click(screen.getByRole("button", { name: /crear/i }));

    expect(handleSubmit).toHaveBeenCalledWith({
      name: "Gabriel García Márquez",
      birthDate: "1927-03-06",
      image: "https://ejemplo.com/gabo.jpg",
      description: "Escritor colombiano, Nobel de literatura.",
    });
  });
});
