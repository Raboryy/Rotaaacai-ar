import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { FileText, Map, BookOpen, Download, Filter, Search, Compass } from "lucide-react";

export const Route = createFileRoute("/publicacoes")({
  head: () => ({
    meta: [
      { title: "Publicações | Rota Caiçara de Cicloturismo" },
      {
        name: "description",
        content:
          "Artigos, diagnósticos técnicos e materiais de apoio produzidos pelo projeto de extensão da Rota Caiçara de Cicloturismo.",
      },
      { property: "og:title", content: "Publicações | Rota Caiçara de Cicloturismo" },
      {
        property: "og:description",
        content: "Artigos científicos, diagnósticos de percurso e guias da Rota Caiçara.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PublicacoesPage,
});

const publicacoes = [
  {
    icon: FileText,
    tipo: "Artigo científico",
    titulo: "Cicloturismo, conservação e desenvolvimento no litoral do Paraná",
    resumo:
      "Estudo sobre a relação entre rotas cicloturísticas de longo curso, turismo de base comunitária e conservação da Mata Atlântica.",
    ano: "2024",
  },
  {
    icon: Map,
    tipo: "Diagnóstico técnico",
    titulo: "Diagnóstico de validação de percursos",
    resumo:
      "Levantamento de campo com avaliação de condições de rodagem, segurança viária, sinalização e pontos de apoio ao longo do traçado.",
    ano: "2024",
  },
  {
    icon: Compass,
    tipo: "Cartografia",
    titulo: "Mapeamento e trilha GPX do traçado completo",
    resumo:
      "Base cartográfica detalhada com altimetria, pontos de interesse e infraestrutura de apoio atualizada para o planejamento de rotas.",
    ano: "2025",
  },
  {
    icon: BookOpen,
    tipo: "Material de apoio",
    titulo: "Guia da Rota — edição de agosto",
    resumo:
      "Guia com etapas sugeridas, quilometragem, altimetria, serviços disponíveis e orientações de multimodalidade (trem e barco).",
    ano: "2026",
  },
  {
    icon: FileText,
    tipo: "Artigo científico",
    titulo: "Turismo de base comunitária nas ilhas de Guaraqueçaba",
    resumo:
      "Análise do impacto socioeconômico e territorial de roteiros sustentáveis nas comunidades insulares do litoral paranaense.",
    ano: "2025",
  },
];

const recursos = [
  { label: "Trilha GPX do traçado completo", detalhe: "316 km · 4.805 m de elevação" },
  { label: "Mapa das cicloparagens", detalhe: "Pontos de apoio e informação" },
  { label: "Manual de sinalização", detalhe: "Padrão Rede Brasileira de Trilhas" },
];

function PublicacoesPage() {
  const [filtroAtivo, setFiltroAtivo] = useState("Todos");
  const [busca, setBusca] = useState("");

  const categoriasUnicas = ["Todos", ...Array.from(new Set(publicacoes.map((p) => p.tipo)))];

  const publicacoesFiltradas = publicacoes.filter((p) => {
    const passaFiltroCategoria = filtroAtivo === "Todos" || p.tipo === filtroAtivo;
    const passaFiltroBusca =
      p.titulo.toLowerCase().includes(busca.toLowerCase()) ||
      p.resumo.toLowerCase().includes(busca.toLowerCase());
    
    return passaFiltroCategoria && passaFiltroBusca;
  });

  return (
    <>
      <section className="bg-forest-deep pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <span className="text-xs font-bold tracking-[0.2em] text-accent uppercase">
            Publicações
          </span>
          <h1 className="mt-4 max-w-3xl text-4xl leading-[1.08] font-black tracking-tight text-forest-foreground sm:text-5xl lg:text-6xl">
            Conhecimento aberto sobre a Rota.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-forest-foreground/80 sm:text-lg">
            Artigos, diagnósticos e materiais técnicos produzidos ao longo do projeto de extensão,
            disponíveis para pesquisadores, gestores públicos e ciclistas.
          </p>
        </div>
      </section>

      <section className="bg-background py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          
          {/* Área de Filtros e Busca */}
          <div className="mb-12 flex flex-col gap-6 border-b border-border pb-8 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap items-center gap-2">
              <Filter className="mr-2 h-5 w-5 text-muted-foreground" />
              {categoriasUnicas.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFiltroAtivo(cat)}
                  className={`rounded-full px-5 py-2 text-sm font-bold transition-all ${
                    filtroAtivo === cat
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "bg-background border border-border text-muted-foreground hover:border-primary/50 hover:text-primary"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="relative w-full max-w-sm shrink-0">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Buscar em título ou resumo..."
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
                className="w-full rounded-full border border-border bg-background py-2.5 pl-11 pr-4 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
              />
            </div>
          </div>

          {/* Grid de Publicações */}
          <div className="grid gap-5">
            {publicacoesFiltradas.length > 0 ? (
              publicacoesFiltradas.map((p) => (
                <article
                  key={p.titulo}
                  className="grid gap-5 rounded-3xl border border-border bg-card p-7 shadow-soft transition-shadow hover:shadow-lifted sm:grid-cols-[auto_minmax(0,1fr)]"
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-secondary text-primary">
                    <p.icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                      <span className="text-xs font-bold tracking-[0.16em] text-accent uppercase">
                        {p.tipo}
                      </span>
                      <span className="text-xs font-medium text-muted-foreground">{p.ano}</span>
                    </div>
                    <h2 className="mt-2 text-xl font-extrabold tracking-tight">{p.titulo}</h2>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.resumo}</p>
                  </div>
                </article>
              ))
            ) : (
              <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-border py-16 text-center">
                <FileText className="h-10 w-10 text-muted-foreground/50" />
                <p className="mt-4 text-lg font-bold text-foreground">Nenhuma publicação encontrada.</p>
                <p className="mt-1 text-sm text-muted-foreground">Tente ajustar seus filtros ou termos de busca.</p>
                <button 
                  onClick={() => { setFiltroAtivo("Todos"); setBusca(""); }}
                  className="mt-6 font-bold text-primary hover:underline"
                >
                  Limpar filtros
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="bg-offwhite py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <h2 className="text-3xl font-black tracking-tight sm:text-4xl">Recursos para download</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {recursos.map((r) => (
              <div
                key={r.label}
                className="flex flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-soft"
              >
                <div>
                  <p className="font-bold">{r.label}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{r.detalhe}</p>
                </div>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary">
                  <Download className="h-4 w-4" /> Em breve
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}