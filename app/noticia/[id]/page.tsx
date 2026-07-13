import { redirect } from "next/navigation"
import { getNoticiaById, getNoticiaPath, noticias } from "@/lib/noticias"

interface PageProps {
  params: Promise<{ id: string }>
}

export const dynamicParams = false

export async function generateStaticParams() {
  return noticias.map((noticia) => ({
    id: noticia.id,
  }))
}

export default async function LegacyNoticiaPage({ params }: PageProps) {
  const { id } = await params
  const noticia = getNoticiaById(id)

  if (!noticia) {
    redirect("/")
  }

  redirect(getNoticiaPath(noticia))
}
