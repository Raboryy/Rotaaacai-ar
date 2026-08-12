import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Youtube, Mail } from "lucide-react";
import { navLinks } from "./site-header";

// A importação do JSON quebrado foi removida daqui

export function SiteFooter() {
  return (
    <footer className="bg-forest-deep pt-16 pb-8 text-forest-foreground">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            {/* O src agora aponta diretamente para o SVG na pasta public */}
            <img
              src="/marcacompletabranca.png"
              alt="Rota Caiçara Cicloturismo"
              loading="lazy"
              className="h-30 w-auto" 
            />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-forest-foreground/70">
              316 km de cicloturismo pelo litoral do Paraná, unindo conservação da Mata Atlântica e
              comunidades tradicionais.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold tracking-wide uppercase">Links rápidos</h3>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm text-forest-foreground/70 transition-colors hover:text-accent"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold tracking-wide uppercase">Contato</h3>
            <a
              href="mailto:contato@rotacaicara.ufpr.br"
              className="mt-4 inline-flex items-center gap-2 text-sm text-forest-foreground/70 transition-colors hover:text-accent"
            >
              <Mail className="h-4 w-4" /> contato@rotacaicara.ufpr.br
            </a>
            <div className="mt-5 flex gap-3">
              {[Instagram, Facebook, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Rede social da Rota Caiçara"
                  className="grid h-10 w-10 place-items-center rounded-full bg-forest-foreground/10 transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-forest-foreground/15 pt-6">
          <p className="text-xs text-forest-foreground/60">
            © {new Date().getFullYear()} Rota Caiçara de Cicloturismo. Desenvolvido via projeto de
            extensão UFPR.
          </p>
        </div>
      </div>
    </footer>
  );
}
