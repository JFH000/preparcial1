"use client";
import { useAuthors } from "@/hooks/useAuthors";
import { createContext, ReactNode, useContext } from "react";

type AuthorsContextType = ReturnType<typeof useAuthors>;

const AuthorsContext = createContext<AuthorsContextType | undefined>(undefined);

export function AuthorsProvider({ children }: { children: ReactNode }) {
  const authorsData = useAuthors();
  return (
    <AuthorsContext.Provider value={authorsData}>
      {children}
    </AuthorsContext.Provider>
  );
}

export function useAuthorsContext() {
  const context = useContext(AuthorsContext);
  if (!context) {
    throw new Error("useAuthorsContext debe usarse dentro de AuthorsProvider");
  }
  return context;
}
