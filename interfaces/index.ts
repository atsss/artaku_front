export interface User {
  id: number
  slug: string
  name: string
  imageUrl: string
  descriptions: string[]
  artworks?: Artwork[]
}

export interface Artwork {
  id: number
  title: string
  thumbnailUrl: string
  description: string
  size: string
  paintingMethod: string
  completedAt: string
  processes?: Process[]
}

export interface Process {
  id: number
  descriptions?: string[]
  summaryVideoUrl?: string
  imageUrls?: string[]
  videoUrls?: string[]
  doneAt: string
}
