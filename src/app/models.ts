export interface Course {
  id: string,
  title: string,
  description: string,
  creationDate: string,
  duration: string,
  authors: string[]
}

export interface User {
  isAdmin: boolean,
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
