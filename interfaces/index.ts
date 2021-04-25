export interface User {
  id: number
  slug: string
  name: string
  imageUrl: string
  descriptions: string[]
  artworks?: Artwork[]
  articles?: Article[]
}

export interface Artwork {
  id: number
  title: string
  thumbnailUrl: string
  description: string
  completedDate: string
  processes?: Process[]
  references?: Reference[]
}

export interface Process {
  id: number
  descriptions?: string[]
  summaryVideoId?: string
  imageUrls?: string[]
  videoIds?: string[]
  doneAt: string
}

export interface Reference {
  id: number
  kind?: string
  url: string
  descriptions?: string
}

export interface Article {
  id: number
  title: string
  description: string
  url: string
  publishedDate: string
}
