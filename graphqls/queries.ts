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
        completedAt
        description
      }
    }
  }
`
