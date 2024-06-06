export interface IProject {
  id: string
  pending?: boolean
  video?: string
  image: string
  name: string
  description: string
  urlPreview?: string
  urlGithub?: string
  urlGithubApi?: string
  techs: string[]
}
