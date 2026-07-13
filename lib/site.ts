export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://liasnews.vercel.app"

export const siteConfig = {
  name: "Lias News",
  url: SITE_URL,
  description:
    "Portal informativo da Liga de Inteligência Artificial na Saúde (LIAS), com notícias, pesquisas e tendências sobre IA e saúde.",
  defaultOgImage: "/logo-lias.png",
}

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString()
}
