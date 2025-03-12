import type { Project } from '@/@types'
import { FETCH_PROJECTS_QUERY } from '@/graphql'
import { apolloClient } from '@/lib/apollo'

export async function fetchProjects(): Promise<Project[]> {
  const response = await apolloClient.query({
    query: FETCH_PROJECTS_QUERY,
  })

  return response.data.projects ?? []
}
