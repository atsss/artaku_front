import gql from 'graphql-tag'

export const UPDATE_WALL = gql`
  mutation UpdateWall($id: ID!, $contentUrl: String!) {
    updateWall(input: { id: $id, contentUrl: $contentUrl }) {
      id
      comment
      contentUrl
    }
  }
`
