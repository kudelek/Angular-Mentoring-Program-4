export interface Course {
  id: string,
  title: string,
  description: string,
  creationDate: string,
  duration: number,
  authors: string[]
}

export interface User {
  id: string,
  name: string,
}

export interface Result {
  result: any,
  successful: boolean,
}
