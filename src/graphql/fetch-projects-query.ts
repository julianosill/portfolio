import { gql } from '@apollo/client'

export const FETCH_PROJECTS_QUERY = gql`
  query Projects {
    projects(orderBy: publishedAt_DESC) {
      id
      name
      description
      urlPreview
      urlGithub
      urlGithubApi
      stack
      image {
        url
      }
      video {
        url
      }
      inProgress
    }
  }
`
