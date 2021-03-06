import { gql } from '@apollo/client'

export const GET_ARTIST = gql`
  query Artist($slug: String!) {
    artist(slug: $slug) {
      id
      slug
      name
      descriptions
      imageUrl
      artworks {
        id
        title
        thumbnailUrl
        description
        size
        paintingMethod
        completedAt
      }
    }
  }
`

export const GET_ARTWORK = gql`
  query Artwork($id: ID!) {
    artwork(id: $id) {
      id
      title
      thumbnailUrl
      description
      size
      paintingMethod
      completedAt
      author {
        name
        slug
      }
      processes {
        id
        descriptions
        summaryVideoId
        videoIds
        imageUrls
        doneAt
      }
    }
  }
`

export const GET_WALL = gql`
  query Wall($id: ID!) {
    wall(id: $id) {
      id
      comment
      contentUrl
    }
  }
`
