import { gql } from '@apollo/client'

export const FETCH_COURSES_QUERY = gql`
  query Courses {
    courses(orderBy: publishedAt_DESC) {
      id
      institution
      period
      title
      description {
        markdown
      }
    }
  }
`
