import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Bike, Instagram } from "lucide-react";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato | Rota Caiçara de Cicloturismo" },
      {
        name: "description",
        content:
          "Fale com a Rota Caiçara de Cicloturismo: planeje sua viagem, encontre um ciclocondutor ou proponha uma parceria institucional.",
      },
      { property: "og:title", content: "Contato | Rota Caiçara de Cicloturismo" },
      {
        property: "og:description",
        content: "Planeje sua viagem pelos 316 km da Rota Caiçara ou proponha uma parceria.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContatoPage,
});

const canais = [
  {
    icon: Mail,
    title: "E-mail institucional",
    value: "contato@rotacaicara.ufpr.br",
    href: "mailto:contato@rotacaicara.ufpr.br",
  },
  { icon: Phone, title: "Telefone", value: "+55 (41) 0000-0000", href: "tel:+554100000000" },
  { icon: Instagram, title: "Redes sociais", value: "@rotacaicara", href: "#" },
  {
    icon: MapPin,
    title: "Endereço",
    value: "UFPR — Setor Litoral, Matinhos/PR",
    href: undefined,
  },
];

function ContatoPage() {
  return (
    <>
      <section className="bg-forest-deep pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <span className="text-xs font-bold tracking-[0.2em] text-accent uppercase">Contato</span>
          <h1 className="mt-4 max-w-3xl text-4xl leading-[1.08] font-black tracking-tight text-forest-foreground sm:text-5xl lg:text-6xl">
            Planeje sua viagem pela Rota Caiçara.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-forest-foreground/80 sm:text-lg">
            Tire dúvidas sobre o traçado, encontre um ciclocondutor capacitado ou proponha uma
            parceria institucional.
          </p>
        </div>
      </section>

      <section className="bg-background py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_360px]">
            <form
              className="rounded-3xl border border-border bg-card p-7 shadow-soft sm:p-9"
              onSubmit={(e) => e.preventDefault()}
            >
              <h2 className="text-2xl font-black tracking-tight">Envie uma mensagem</h2>
              <div className="mt-7 grid gap-5 sm:grid-cols-2">
                <label className="block text-sm font-semibold">
                  Nome
                  <input
                    type="text"
                    required
                    className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm font-normal outline-none focus:border-primary focus:ring-2 focus:ring-ring/30"
                    placeholder="Seu nome"
                  />
                </label>
                <label className="block text-sm font-semibold">
                  E-mail
                  <input
                    type="email"
                    required
                    className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm font-normal outline-none focus:border-primary focus:ring-2 focus:ring-ring/30"
                    placeholder="voce@email.com"
                  />
                </label>
                <label className="block text-sm font-semibold sm:col-span-2">
                  Assunto
                  <select className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm font-normal outline-none focus:border-primary focus:ring-2 focus:ring-ring/30">
                    <option>Planejar minha viagem</option>
                    <option>Encontrar um ciclocondutor</option>
                    <option>Parceria institucional</option>
                    <option>Imprensa</option>
                  </select>
                </label>
                <label className="block text-sm font-semibold sm:col-span-2">
                  Mensagem
                  <textarea
                    rows={5}
                    required
                    className="mt-2 w-full resize-y rounded-xl border border-input bg-background px-4 py-3 text-sm font-normal outline-none focus:border-primary focus:ring-2 focus:ring-ring/30"
                    placeholder="Conte como podemos ajudar"
                  />
                </label>
              </div>
              <button
                type="submit"
                className="mt-7 inline-flex rounded-full bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground shadow-lifted transition-transform hover:-translate-y-0.5"
              >
                Enviar mensagem
              </button>
            </form>

            <aside className="space-y-4">
              {canais.map((c) => {
                const content = (
                  <>
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-secondary text-primary">
                      <c.icon className="h-4 w-4" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm font-bold">{c.title}</span>
                      <span className="block text-sm break-words text-muted-foreground">
                        {c.value}
                      </span>
                    </span>
                  </>
                );
                return c.href ? (
                  <a
                    key={c.title}
                    href={c.href}
                    className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft transition-shadow hover:shadow-lifted"
                  >
                    {content}
                  </a>
                ) : (
                  <div
                    key={c.title}
                    className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft"
                  >
                    {content}
                  </div>
                );
              })}

              <div className="rounded-2xl bg-sand p-6">
                <Bike className="h-5 w-5 text-accent" />
                <p className="mt-3 font-bold">Ciclocondutores</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Solicite o contato de condutores capacitados nos municípios da rota.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
