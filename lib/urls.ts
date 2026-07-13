export function normalizeExternalUrl(url?: string) {
  if (!url) return undefined

  try {
    const parsedUrl = new URL(url)
    if (parsedUrl.protocol !== "http:" && parsedUrl.protocol !== "https:") {
      return undefined
    }

    return parsedUrl.toString()
  } catch {
    return undefined
  }
}
