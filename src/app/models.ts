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

export interface UserResult {
  result: any,
  successful: boolean,
  user: any,
}

export interface Author {
  id: string,
  name: string
}
