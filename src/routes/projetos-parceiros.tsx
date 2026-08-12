import { createFileRoute } from "@tanstack/react-router";
import { Handshake, Leaf, Landmark, TrainFront } from "lucide-react";

export const Route = createFileRoute("/projetos-parceiros")({
  head: () => ({
    meta: [
      { title: "Projetos parceiros | Rota Caiçara de Cicloturismo" },
      {
        name: "description",
        content:
          "Instituições e iniciativas parceiras da Rota Caiçara de Cicloturismo: UFPR, FUNPAR, Fundação Grupo Boticário, BRDE, Invest Paraná, Grande Reserva Mata Atlântica e Rede Trilhas.",
      },
      { property: "og:title", content: "Projetos parceiros | Rota Caiçara de Cicloturismo" },
      {
        property: "og:description",
        content: "Quem faz a Rota Caiçara acontecer no litoral do Paraná.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ParceirosPage,
});

const parceiros = [
  {
    nome: "UFPR",
    tipo: "Universidade",
    texto: "Universidade Federal do Paraná, instituição executora do projeto de extensão.",
  },
  {
    nome: "FUNPAR",
    tipo: "Fundação de apoio",
    texto: "Gestão administrativa e financeira das ações do projeto.",
  },
  {
    nome: "Fundação Grupo Boticário",
    tipo: "Conservação",
    texto: "Apoio à conservação da natureza e ao uso público sustentável da Mata Atlântica.",
  },
  {
    nome: "BRDE",
    tipo: "Fomento",
    texto: "Banco Regional de Desenvolvimento do Extremo Sul, apoiador do desenvolvimento regional.",
  },
  {
    nome: "Invest Paraná",
    tipo: "Desenvolvimento",
    texto: "Articulação de investimentos e promoção econômica do estado.",
  },
  {
    nome: "Grande Reserva Mata Atlântica",
    tipo: "Destino turístico",
    texto: "Iniciativa que conecta o maior remanescente contínuo de Mata Atlântica do planeta.",
  },
  {
    nome: "Rede Trilhas",
    tipo: "Rede nacional",
    texto: "Rede Brasileira de Trilhas de Longo Curso, referência de padrão e sinalização.",
  },
];

const iniciativas = [
  {
    icon: Leaf,
    title: "Grande Reserva Mata Atlântica",
    text: "A Rota integra o destino turístico que reúne mais de 100 mil km² de remanescentes florestais entre Paraná, São Paulo e Santa Catarina.",
  },
  {
    icon: TrainFront,
    title: "Rail to Trail — Curitiba/Paranaguá",
    text: "Aproveitamento turístico da ferrovia histórica, integrando trem, bicicleta e barco em um único roteiro.",
  },
  {
    icon: Landmark,
    title: "Unidades de Conservação",
    text: "Articulação com os parques nacionais de Superagui e Saint-Hilaire/Lange e demais áreas protegidas do litoral.",
  },
  {
    icon: Handshake,
    title: "Turismo de base comunitária",
    text: "Parcerias diretas com associações comunitárias, pousadas familiares e produtores locais ao longo do traçado.",
  },
];

function ParceirosPage() {
  return (
    <>
      <section className="bg-forest-deep pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <span className="text-xs font-bold tracking-[0.2em] text-accent uppercase">
            Projetos parceiros
          </span>
          <h1 className="mt-4 max-w-3xl text-4xl leading-[1.08] font-black tracking-tight text-forest-foreground sm:text-5xl lg:text-6xl">
            Uma rede que sustenta 316 km de rota.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-forest-foreground/80 sm:text-lg">
            Instituições de ensino, fomento, conservação e redes nacionais somam esforços com as
            comunidades do litoral para viabilizar a Rota Caiçara.
          </p>
        </div>
      </section>

      <section className="bg-background py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <h2 className="text-3xl font-black tracking-tight sm:text-4xl">Quem faz acontecer</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {parceiros.map((p) => (
              <div
                key={p.nome}
                className="rounded-2xl border border-border bg-card p-6 shadow-soft transition-shadow hover:shadow-lifted"
              >
                <span className="text-xs font-bold tracking-[0.16em] text-accent uppercase">
                  {p.tipo}
                </span>
                <h3 className="mt-3 text-lg font-extrabold tracking-tight text-primary">{p.nome}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-offwhite py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <h2 className="text-3xl font-black tracking-tight sm:text-4xl">Iniciativas conectadas</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {iniciativas.map((i) => (
              <div key={i.title} className="rounded-3xl border border-border bg-card p-7 shadow-soft">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-secondary text-primary">
                  <i.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-xl font-extrabold tracking-tight">{i.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{i.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
