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
  completedDate: string
  processes?: Process[]
}

export interface Process {
  id: number
  descriptions?: string[]
  summaryVideoId?: string
  imageUrls?: string[]
  videoIds?: string[]
  doneAt: string
}
