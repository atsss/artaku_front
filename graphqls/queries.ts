import { gql } from '@apollo/client'

export const GET_ARTIST = gql`
  query Artist($slug: String!) {
    artist(slug: $slug) {
      id
      slug
      name
      descriptions
      imageUrl
      linkedinUrl
      githubUrl
      twitterUrl
      facebookUrl
      instagramUrl
      artworks {
        id
        title
        thumbnailUrl
        description
        completedDate
      }
      articles {
        id
        title
        description
        url
        publishedDate
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
      completedDate
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
      references {
        id
        kind
        url
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
