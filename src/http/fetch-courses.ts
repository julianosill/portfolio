import type { Course } from '@/@types'
import { FETCH_COURSES_QUERY } from '@/graphql'
import { apolloClient } from '@/lib/apollo'

export async function fetchCourses(): Promise<Course[]> {
  const response = await apolloClient.query({
    query: FETCH_COURSES_QUERY,
  })

  return response.data.courses ?? []
}
