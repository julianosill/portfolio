export interface Course {
  id: string
  institution: string
  period: string
  title: string
  description: {
    markdown: string
  }
}
