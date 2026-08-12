import { createFileRoute, Link } from "@tanstack/react-router";
import { Users, GraduationCap, Compass, Leaf } from "lucide-react";

export const Route = createFileRoute("/equipe")({
  head: () => ({
    meta: [
      { title: "Equipe | Rota Caiçara de Cicloturismo" },
      {
        name: "description",
        content:
          "Conheça a equipe de professores, pesquisadores, estudantes e ciclocondutores que constrói a Rota Caiçara de Cicloturismo.",
      },
      { property: "og:title", content: "Equipe | Rota Caiçara de Cicloturismo" },
      {
        property: "og:description",
        content: "Professores, pesquisadores, estudantes e comunidades por trás da Rota Caiçara.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: EquipePage,
});

const frentes = [
  {
    icon: GraduationCap,
    title: "Coordenação acadêmica",
    text: "Docentes da UFPR responsáveis pela concepção metodológica, pesquisa aplicada e articulação institucional do projeto de extensão.",
  },
  {
    icon: Compass,
    title: "Traçado e geoprocessamento",
    text: "Equipe de mapeamento, validação de percursos em campo, produção de trilhas GPX e diagnóstico de segurança viária.",
  },
  {
    icon: Users,
    title: "Turismo de base comunitária",
    text: "Mobilização social junto às comunidades caiçaras, indígenas e quilombolas, formação de ciclocondutores e apoio ao empreendedorismo local.",
  },
  {
    icon: Leaf,
    title: "Conservação e educação ambiental",
    text: "Interpretação ambiental, monitoramento de impacto e articulação com unidades de conservação da Mata Atlântica.",
  },
];

const pessoas = [
  { nome: "Coordenação Geral", papel: "Docente UFPR — Turismo" },
  { nome: "Coordenação Técnica", papel: "Docente UFPR — Geografia" },
  { nome: "Pesquisa e Extensão", papel: "Pós-graduação" },
  { nome: "Mapeamento de Percursos", papel: "Bolsista de extensão" },
  { nome: "Comunicação e Design", papel: "Bolsista de extensão" },
  { nome: "Articulação Comunitária", papel: "Lideranças locais" },
  { nome: "Ciclocondutores", papel: "Formação continuada" },
  { nome: "Voluntariado", papel: "Estudantes e ciclistas" },
];

function EquipePage() {
  return (
    <>
      <section className="bg-forest-deep pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <span className="text-xs font-bold tracking-[0.2em] text-accent uppercase">Equipe</span>
          <h1 className="mt-4 max-w-3xl text-4xl leading-[1.08] font-black tracking-tight text-forest-foreground sm:text-5xl lg:text-6xl">
            Quem pedala junto na construção da Rota.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-forest-foreground/80 sm:text-lg">
            A Rota Caiçara é resultado do trabalho conjunto entre a universidade, as comunidades do
            litoral do Paraná e parceiros institucionais, organizado em frentes complementares.
          </p>
        </div>
      </section>

      <section className="bg-background py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-5 md:grid-cols-2">
            {frentes.map((f) => (
              <div
                key={f.title}
                className="rounded-3xl border border-border bg-card p-7 shadow-soft transition-transform hover:-translate-y-1"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-secondary text-primary">
                  <f.icon className="h-5 w-5" />
                </span>
                <h2 className="mt-5 text-xl font-extrabold tracking-tight">{f.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-offwhite py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <h2 className="text-3xl font-black tracking-tight sm:text-4xl">Integrantes</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Estrutura da equipe do projeto de extensão. Os nomes serão publicados conforme a
            atualização institucional.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {pessoas.map((p) => (
              <div
                key={p.nome}
                className="rounded-2xl border border-border bg-card p-6 shadow-soft"
              >
                <div className="grid h-12 w-12 place-items-center rounded-full bg-secondary text-primary">
                  <Users className="h-5 w-5" />
                </div>
                <p className="mt-4 font-bold">{p.nome}</p>
                <p className="mt-1 text-sm text-muted-foreground">{p.papel}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-3xl border border-border bg-sand p-8 sm:p-10">
            <h3 className="text-2xl font-black tracking-tight">Quer integrar a equipe?</h3>
            <p className="mt-3 max-w-xl text-muted-foreground">
              Estudantes, ciclocondutores e comunidades podem participar das próximas etapas do
              projeto.
            </p>
            <Link
              to="/contato"
              className="mt-6 inline-flex rounded-full bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground shadow-lifted transition-transform hover:-translate-y-0.5"
            >
              Fale com a coordenação
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
