type Activity = {
  id: string
  text: string
}

export interface ICareerItem {
  id: string
  company: string
  period: string
  type?: string
  position: string
  activities: Activity[]
}
