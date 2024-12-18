import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-bold">Página não encontrada</h1>
      <p className="text-xl text-accent-foreground">
        Voltar para o{" "}
        <Link to="/" className="text-sky-500 dark:text-sky-400">
          Início
        </Link>
      </p>
    </div>
  );
}
