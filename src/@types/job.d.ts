export interface Job {
  id: string
  company: string
  period: string
  type: string
  position: string
  description: {
    markdown: string
  }
}
