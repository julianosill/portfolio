import { gql } from '@apollo/client'

export const FETCH_JOBS_QUERY = gql`
  query Jobs {
    jobs(orderBy: publishedAt_DESC) {
      id
      company
      period
      type
      position
      description {
        markdown
      }
    }
  }
`
