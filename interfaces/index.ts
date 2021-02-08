export interface User {
  id: number
  slug: string
  name: string
  imageUrl: string
  descriptions: string
}

export interface Artwork {
  id: number
  title: string
  thumbnailUrl: string
  description: string
  size: string
  paintingMethod: string
  completedAt: string
}
