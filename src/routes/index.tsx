import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Bike,
  MapPin,
  Anchor,
  Leaf,
  Compass,
  TrainFront,
  Mountain,
  Users,
  Globe2,
  Signpost,
  Container,
  FileText,
  Map,
  BookOpen,
  ArrowRight,
  Download,
} from "lucide-react";

import heroImg from "@/assets/hero-rota.jpg";
import cicloparagemImg from "@/assets/cicloparagem.jpg";
import comunidadeImg from "@/assets/comunidade.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Rota Caiçara de Cicloturismo | Pesquisa e Extensão UFPR",
      },
      {
        name: "description",
        content:
          "Projeto de extensão universitária (UFPR) que mapeia e documenta 316 km de percursos cicloviários no litoral do Paraná, unindo pesquisa, ciência cidadã e desenvolvimento territorial.",
      },
      {
        property: "og:title",
        content: "Rota Caiçara de Cicloturismo | Pesquisa e Extensão UFPR",
      },
      {
        property: "og:description",
        content:
          "Pesquisa, extensão e território: mapeamento técnico de 316 km no litoral do Paraná.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

// Indicadores consolidados a partir dos relatórios técnicos do projeto.
const stats = [
  { icon: Bike, value: "316 km", label: "de percursos mapeados" },
  { icon: MapPin, value: "7", label: "Municípios integrados" },
  { icon: Mountain, value: "4.805 m", label: "de elevação acumulada" },
  { icon: Globe2, value: "11 ODS", label: "da ONU alinhados" },
];

// As quatro frentes de trabalho do projeto (eixos de ação).
const eixos = [
  {
    icon: Container,
    title: "Infraestrutura Cicloviária",
    text: "Instalação de cicloparagens em contêineres sustentáveis, com energia solar, paraciclos e pontos de apoio ao longo do traçado.",
  },
  {
    icon: Signpost,
    title: "Sinalização Padronizada",
    text: "Aplicação do padrão técnico da Rede Brasileira de Trilhas de Longo Curso, com sinalização rústica validada em campo.",
  },
  {
    icon: Users,
    title: "Capacitação Comunitária",
    text: "Formação continuada de ciclocondutores e articulação com lideranças caiçaras, indígenas e quilombolas do território.",
  },
  {
    icon: Anchor,
    title: "Turismo de Base Comunitária",
    text: "Fortalecimento de arranjos econômicos locais, valorização cultural e geração de renda a partir do território.",
  },
];

// Documentos de destaque exibidos na home; o acervo completo fica em /publicacoes.
const relatorios = [
  {
    icon: FileText,
    tipo: "Artigo científico",
    titulo: "Cicloturismo, conservação e desenvolvimento no litoral do Paraná",
    ano: "2024",
  },
  {
    icon: Map,
    tipo: "Diagnóstico técnico",
    titulo: "Diagnóstico de validação de percursos",
    ano: "2024",
  },
  {
    icon: Compass,
    tipo: "Cartografia e dados abertos",
    titulo: "Mapeamento e trilha GPX do traçado completo",
    ano: "2025",
  },
  {
    icon: BookOpen,
    tipo: "Material técnico",
    titulo: "Guia da Rota — edição de agosto",
    ano: "2026",
  },
];

const parceiros = [
  { nome: "UFPR", imagem: "/UFPR.png", tamanho: "max-h-20" },
  { nome: "FUNPAR", imagem: "/funpar.png", tamanho: "max-h-12" },
  { nome: "Fundação Grupo Boticário", imagem: "/FundBoti.png", tamanho: "max-h-40" }, // Bem maior
  { nome: "BRDE", imagem: "/BRDE.png", tamanho: "max-h-40" }, // Um pouco maior
  { nome: "Invest Paraná", imagem: "/invest-parana.png", tamanho: "max-h-12" },
  { nome: "Grande Reserva Mata Atlântica", imagem: "/GRMA.png", tamanho: "max-h-12" },
  { nome: "Rede Trilhas", imagem: "/RedeT.png", tamanho: "max-h-50" }, // Bem maior
];

function Index() {
  return (
    <>
      {/* 1. Hero Section — foco institucional/acadêmico */}
      <section className="relative flex min-h-[92vh] items-center overflow-hidden">
        <img
          src={heroImg}
          alt="Ciclistas pedalando em estrada de terra cercada pela Mata Atlântica"
          width={1920}
          height={1088}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-forest-deep/92 via-forest-deep/75 to-forest-deep/40" />
        <div className="relative mx-auto w-full max-w-7xl px-5 py-32 lg:px-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-forest-foreground/25 bg-forest-foreground/10 px-4 py-1.5 text-xs font-semibold tracking-[0.18em] text-forest-foreground uppercase backdrop-blur">
            <Leaf className="h-3.5 w-3.5 text-forest" /> Projeto de Extensão UFPR · Litoral do
            Paraná
          </span>
          <h1 className="mt-6 max-w-3xl text-4xl leading-[1.05] font-black tracking-tight text-forest-foreground sm:text-6xl lg:text-7xl">
            Pesquisa, Extensão e Território na Rota Caiçara de Cicloturismo.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-forest-foreground/85 sm:text-lg">
            Uma iniciativa de mapeamento técnico, diagnóstico de percursos e desenvolvimento regional que conecta cicloturismo, 
            conservação ambiental e comunidades tradicionais no litoral do Paraná, conduzida pela Universidade Federal do Paraná 
            via extensão, pesquisa e ensino.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projeto"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-bold text-accent-foreground shadow-lifted transition-transform hover:-translate-y-0.5"
            >
              Conheça a Base Científica <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              to="/publicacoes"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-forest-foreground/40 px-7 py-3.5 text-sm font-bold text-forest-foreground transition-colors hover:bg-forest-foreground/15"
            >
              <Download className="h-4 w-4" /> Acessar Relatórios
            </Link>
          </div>
        </div>
      </section>

      {/* 2. O Projeto / Base Científica */}
      <section id="projeto" className="scroll-mt-24 bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <span className="text-xs font-bold tracking-[0.2em] text-accent-foreground uppercase">
                Base Científica
              </span>
              <h2 className="mt-4 text-3xl leading-tight font-black tracking-tight sm:text-4xl lg:text-5xl">
                Uma rota validada com <span className="text-primary">metodologia científica</span>
                .
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
                A Rota Caiçara é um projeto de extensão da Universidade Federal do Paraná (UFPR),
                em parceria com o Ciclovida, estruturado a partir de diagnósticos técnicos de
                validação de percursos, cartografia social e ciência cidadã. Cada trecho é
                percorrido, medido e registrado em campo antes de ser incorporado ao traçado
                oficial.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                As ações do projeto estão alinhadas a 11 Objetivos de Desenvolvimento Sustentável
                (ODS) da ONU, com foco em conservação ambiental, desenvolvimento regional e
                valorização das comunidades tradicionais caiçaras.
              </p>
              <div className="mt-8 flex items-center gap-3 rounded-2xl border border-border bg-muted/60 p-4">
                <Signpost className="h-5 w-5 shrink-0 text-primary" />
                <p className="text-sm text-muted-foreground">
                  Sinalização técnica validada nos moldes da Rede Brasileira de Trilhas de Longo
                  Curso.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-border bg-card p-6 shadow-soft transition-shadow hover:shadow-lifted"
                >
                  <s.icon className="h-6 w-6 text-primary" />
                  <p className="mt-5 text-3xl font-black tracking-tight text-primary">{s.value}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Relatórios e Documentação — substitui a antiga vitrine comercial */}
      <section id="relatorios" className="scroll-mt-24 bg-offwhite py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-xs font-bold tracking-[0.2em] text-accent-foreground uppercase">
              Relatórios e Documentação
            </span>
            <h2 className="mt-4 text-3xl leading-tight font-black tracking-tight sm:text-4xl lg:text-5xl">
              Dados e documentos abertos à comunidade acadêmica.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Artigos, diagnósticos técnicos, cartografia e materiais de apoio produzidos ao longo
              do projeto, disponibilizados para pesquisadores, gestores públicos e comunidades.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {relatorios.map((r) => (
              <div
                key={r.titulo}
                className="flex flex-col rounded-3xl border border-border bg-card p-6 shadow-soft transition-transform hover:-translate-y-1"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-secondary text-primary">
                  <r.icon className="h-5 w-5" />
                </span>
                <span className="mt-5 text-xs font-bold tracking-[0.14em] text-accent-foreground/80 uppercase">
                  {r.tipo}
                </span>
                <h3 className="mt-2 text-base leading-snug font-extrabold tracking-tight">
                  {r.titulo}
                </h3>
                <p className="mt-3 text-xs font-medium text-muted-foreground">{r.ano}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Link
              to="/publicacoes"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-bold text-accent-foreground shadow-lifted transition-transform hover:-translate-y-0.5"
            >
              Ver todos os relatórios e publicações <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Ações e Eixos de Trabalho */}
      <section id="eixos" className="scroll-mt-24 bg-forest-deep py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-xs font-bold tracking-[0.2em] text-accent uppercase">
              Eixos de Trabalho
            </span>
            <h2 className="mt-4 text-3xl leading-tight font-black tracking-tight text-forest-foreground sm:text-4xl lg:text-5xl">
              Quatro frentes organizam as ações da Rota.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-forest-foreground/80">
              As atividades do projeto de extensão estão organizadas em eixos complementares, que
              vão da infraestrutura física à formação comunitária.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {eixos.map((e) => (
              <div
                key={e.title}
                className="rounded-3xl border border-forest-foreground/15 bg-forest-foreground/5 p-7"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-forest-foreground/10 text-accent">
                  <e.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-xl font-extrabold text-forest-foreground">{e.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-forest-foreground/80">{e.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <div className="overflow-hidden rounded-3xl border border-forest-foreground/15 bg-forest-foreground/5">
              <img
                src={cicloparagemImg}
                alt="Cicloparagem em contêiner sustentável com painéis solares e bicicletas"
                loading="lazy"
                width={1200}
                height={900}
                className="h-56 w-full object-cover"
              />
              <div className="p-6">
                <p className="text-sm leading-relaxed text-forest-foreground/80">
                  Registro de campo: cicloparagem implantada como parte do eixo de infraestrutura
                  cicloviária do projeto.
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-center rounded-3xl border border-forest-foreground/15 bg-forest-foreground/5 p-7">
              {/* Grid que divide a imagem à esquerda e o conteúdo à direita em telas maiores */}
              <div className="grid gap-6 md:grid-cols-[auto_minmax(0,1fr)] md:items-center">
                
                {/* Coluna da Esquerda: A Pegada */}
                <img
                  src="/pegada-rede-trilhas.png"
                  alt="Pegada amarela e preta da Rede Brasileira de Trilhas de Longo Curso"
                  loading="lazy"
                  className="h-20 w-auto self-start object-contain md:h-24"
                />

                {/* Coluna da Direita: Textos e Cards */}
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <TrainFront className="h-5 w-5 text-accent" />
                    <p className="text-sm font-bold text-forest-foreground">
                      Traçado multimodal: trem, barco e bicicleta
                    </p>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-forest-foreground/80">
                    O diagnóstico técnico identificou trechos integrados ao transporte marítimo e à
                    ferrovia Curitiba–Paranaguá, ampliando a conectividade territorial da rota.
                  </p>

                  {/* Cards de estatísticas internos */}
                  <div className="mt-6 grid grid-cols-2 gap-4">
                    <div className="rounded-2xl bg-forest-foreground/10 p-4">
                      <p className="text-2xl font-black text-accent">100%</p>
                      <p className="mt-1 text-xs text-forest-foreground/75">Traçado sinalizado</p>
                    </div>
                    <div className="rounded-2xl bg-forest-foreground/10 p-4">
                      <p className="text-2xl font-black text-accent">GPX</p>
                      <p className="mt-1 text-xs text-forest-foreground/75">Dados abertos</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Participação na pesquisa — substitui a antiga chamada comercial */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="overflow-hidden rounded-3xl border border-border bg-sand p-8 shadow-soft sm:p-14">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
              <div className="min-w-0">
                <span className="text-xs font-bold tracking-[0.2em] text-accent-foreground/80 uppercase">
                  Participe
                </span>
                <h2 className="mt-4 text-3xl leading-tight font-black tracking-tight sm:text-4xl">
                  Pesquisadores e comunidades podem colaborar com o projeto.
                </h2>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
                  A Rota Caiçara é construída com contribuições de ciência cidadã, comunidades
                  tradicionais e instituições parceiras. Fale com a coordenação para uma
                  colaboração.
                </p>
              </div>
              <div
                aria-hidden
                className="flex shrink-0 items-center justify-center rounded-full bg-forest-deep p-4"
              >
                <img
                  src={comunidadeImg}
                  alt="Comunidade caiçara com barcos de madeira em baía no litoral do Paraná"
                  loading="lazy"
                  width={64}
                  height={64}
                  className="h-16 w-16 rounded-full object-cover"
                />
              </div>
              <Link
                to="/contato"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-bold text-primary-foreground shadow-lifted transition-transform hover:-translate-y-0.5 lg:col-start-2 lg:row-start-1"
              >
                Fale com a coordenação <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Parceiros e Realização */}
      <section className="bg-offwhite py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <p className="text-center text-sm font-bold tracking-[0.2em] text-muted-foreground uppercase">
            Realização e parceiros institucionais
          </p>
          
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {parceiros.map((p) => (
              <div
                key={p.nome}
                className="group flex min-h-24 items-center justify-center rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lifted hover:border-primary/30"
              >
                <img
              src={p.imagem}
            alt={`Logo ${p.nome}`}
            loading="lazy"
            className={`${p.tamanho} w-auto object-contain transition-transform duration-300 group-hover:scale-105`}
            />
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/projetos-parceiros"
              className="inline-flex items-center gap-2 text-sm font-bold text-primary transition-colors hover:text-accent hover:underline"
            >
              Ver projetos parceiros <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}