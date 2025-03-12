type Asset = {
  url: string
}

export interface Project {
  id: string
  name: string
  description: string
  urlPreview: string
  urlGithub: string
  urlGithubApi: string
  image: Asset
  video: Asset | null
  stack: string[]
  inProgress: boolean
}
