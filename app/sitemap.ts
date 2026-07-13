import type { MetadataRoute } from "next"
import { getNoticiaIsoDate, getNoticiaPath, noticias } from "@/lib/noticias"
import { absoluteUrl } from "@/lib/site"

export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: absoluteUrl("/"),
      priority: 1,
    },
    {
      url: absoluteUrl("/ai-news"),
      priority: 0.8,
    },
    {
      url: absoluteUrl("/ai-health"),
      priority: 0.8,
    },
  ]

  const articleRoutes: MetadataRoute.Sitemap = noticias.map((noticia) => ({
    url: absoluteUrl(getNoticiaPath(noticia)),
    lastModified: getNoticiaIsoDate(noticia),
    priority: 0.7,
  }))

  return [...staticRoutes, ...articleRoutes]
}
