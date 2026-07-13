import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { NeuralBackground } from "@/components/neural-background"
import {
  getNoticiaBySlug,
  getNoticiaIsoDate,
  getNoticiaPath,
  getNoticiaSlug,
  noticias,
} from "@/lib/noticias"
import { absoluteUrl, siteConfig } from "@/lib/site"
import { normalizeExternalUrl } from "@/lib/urls"

interface PageProps {
  params: Promise<{ slug: string }>
}

export const dynamicParams = false

export async function generateStaticParams() {
  return noticias.map((noticia) => ({
    slug: getNoticiaSlug(noticia),
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const noticia = getNoticiaBySlug(slug)

  if (!noticia) {
    return {
      title: "Notícia não encontrada",
      description: "A notícia solicitada não foi encontrada no Lias News.",
      alternates: {
        canonical: "/",
      },
    }
  }

  const path = getNoticiaPath(noticia)
  const canonicalUrl = absoluteUrl(path)
  const image = siteConfig.defaultOgImage

  return {
    title: noticia.titulo,
    description: noticia.resumo,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "article",
      title: noticia.titulo,
      description: noticia.resumo,
      url: canonicalUrl,
      siteName: siteConfig.name,
      locale: "pt_BR",
      publishedTime: getNoticiaIsoDate(noticia),
      images: [
        {
          url: image,
          width: 764,
          height: 636,
          alt: `Imagem de compartilhamento do Lias News para: ${noticia.titulo}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: noticia.titulo,
      description: noticia.resumo,
      images: [image],
    },
  }
}

export default async function NoticiaPage({ params }: PageProps) {
  const { slug } = await params
  const noticia = getNoticiaBySlug(slug)

  if (!noticia) {
    notFound()
  }

  const referenceLabel = noticia.fonte || noticia.referencia || "Fonte institucional"
  const originLink = noticia.categoria === "ai-news" ? "/ai-news" : "/ai-health"
  const originLabel =
    noticia.categoria === "ai-news"
      ? "Voltar para Atualizações em Inteligência Artificial"
      : "Voltar para Inteligência Artificial na Saúde"
  const paragraphs = noticia.conteudo?.filter(Boolean) || []
  const hasFullContent = paragraphs.length > 0
  const sourceUrl = normalizeExternalUrl(noticia.fonteUrl)
  const canonicalUrl = absoluteUrl(getNoticiaPath(noticia))
  const isoDate = getNoticiaIsoDate(noticia)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: noticia.titulo,
    description: noticia.resumo,
    mainEntityOfPage: canonicalUrl,
    articleSection: noticia.area,
    image: [absoluteUrl(siteConfig.defaultOgImage)],
    ...(isoDate ? { datePublished: isoDate, dateModified: isoDate } : {}),
    ...(referenceLabel ? { author: { "@type": "Organization", name: referenceLabel } } : {}),
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/logo-lias.png"),
      },
    },
  }

  return (
    <>
      <NeuralBackground />
      <div className="relative z-[1] mx-auto w-[min(1180px,calc(100%-32px))] py-6 pb-10">
        <Header compact />

        <main>
          <article className="overflow-hidden rounded-[28px] border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)] backdrop-blur-sm">
            <div className="grid gap-6 p-6 sm:p-8">
              <div className="grid gap-3.5">
                <span className="inline-flex w-fit items-center gap-2 rounded-full bg-gradient-to-br from-[rgba(85,216,232,0.12)] to-[rgba(24,185,127,0.12)] px-3 py-2 text-[0.76rem] font-extrabold uppercase tracking-wider text-[var(--primary-dark)]">
                  {noticia.rotulo}
                </span>
                <div className="flex flex-wrap gap-2.5 text-[0.92rem] text-[var(--muted)]">
                  <span>{noticia.data}</span>
                  <span>{noticia.area}</span>
                </div>
                <h1 className="m-0 max-w-[18ch] break-words font-heading text-[clamp(2rem,4vw,3.2rem)] font-bold leading-tight">
                  {noticia.titulo}
                </h1>
                <p className="m-0 max-w-3xl text-[1.05rem] leading-relaxed text-[var(--muted)]">
                  {noticia.resumo}
                </p>
              </div>

              <figure className="m-0 overflow-hidden rounded-[24px] border border-[rgba(15,92,192,0.12)] bg-white/70">
                <Image
                  src="/logo-lias.png"
                  alt="Logo do Lias News"
                  width={764}
                  height={636}
                  className="mx-auto h-auto max-h-[360px] w-full max-w-[520px] object-contain p-6"
                  priority
                />
              </figure>

              <div className="mx-auto grid w-full max-w-3xl gap-5 text-[1.04rem] leading-8 text-[var(--text)]">
                {hasFullContent ? (
                  paragraphs.map((paragraph, index) => (
                    <p key={index} className="m-0 break-words">
                      {paragraph}
                    </p>
                  ))
                ) : (
                  <div className="rounded-[22px] border border-[rgba(15,92,192,0.14)] bg-white/70 p-5">
                    <p className="m-0 leading-relaxed text-[var(--muted)]">{noticia.resumo}</p>
                    {sourceUrl && (
                      <p className="mb-0 mt-3 leading-relaxed text-[var(--muted)]">
                        O conteúdo completo está disponível na fonte original.
                      </p>
                    )}
                  </div>
                )}

                <div className="mt-2.5 border-t border-[rgba(15,92,192,0.12)] pt-4.5">
                  <p className="m-0 break-words text-[var(--muted)]">
                    <strong>Fonte ou referência:</strong> {referenceLabel}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                {sourceUrl && (
                  <a
                    href={sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-12 items-center justify-center rounded-full border border-[rgba(15,92,192,0.18)] bg-white/68 px-4.5 font-bold no-underline"
                  >
                    Ler notícia completa na fonte
                  </a>
                )}
                <Link
                  href={originLink}
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-[rgba(15,92,192,0.18)] bg-white/68 px-4.5 font-bold no-underline"
                >
                  {originLabel}
                </Link>
                <Link
                  href="/"
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-gradient-to-br from-[var(--primary-dark)] to-[var(--success)] px-4.5 font-bold text-white no-underline"
                >
                  Voltar para Home
                </Link>
              </div>
            </div>
          </article>
        </main>

        <Footer />
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  )
}
