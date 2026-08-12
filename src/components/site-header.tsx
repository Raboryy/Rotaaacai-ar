import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";

export const navLinks = [
  { label: "Página inicial", to: "/" },
  { label: "Equipe", to: "/equipe" },
  { label: "Projetos parceiros", to: "/projetos-parceiros" },
  { label: "Publicações", to: "/publicacoes" },
  { label: "Contato", to: "/contato" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <nav className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3.5 md:px-8">
        <Link to="/" className="flex min-w-0 items-center">
          <img
            src="/marca-completa.svg"
            alt="Rota Caiçara Cicloturismo"
            className="h-16 w-auto sm:h-20"
          />
        </Link>

        <div className="flex items-center gap-1">
          {/* MUDANÇA AQUI: trocamos lg:flex por md:flex para aparecer em mais telas */}
          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  activeOptions={{ exact: l.to === "/" }}
                  activeProps={{ className: "bg-secondary text-primary" }}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          
          {/* MUDANÇA AQUI: trocamos lg:hidden por md:hidden para esconder o ícone no desktop/tablet */}
          <button
            type="button"
            aria-label="Abrir menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-lg text-foreground md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* MUDANÇA AQUI: trocamos lg:hidden por md:hidden também no menu aberto */}
      {open && (
        <div className="border-t border-border bg-background px-5 pb-5 md:hidden">
          <ul className="flex flex-col py-2">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-2 py-3 text-sm font-medium text-foreground"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}