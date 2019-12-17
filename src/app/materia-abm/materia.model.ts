export interface Materia {
    id: number
    name: string
    description: string
    duration: number
    totalHours: number
    correlativas: Array<object>
}
  