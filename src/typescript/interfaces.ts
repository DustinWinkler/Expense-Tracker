export interface UserInterface {
  firstName: string
  lastName: string
  id: string
  budget: number
}

export interface ExpenseInterface {
  user: UserInterface
  category: Categories
  cost: number
  description: string
  holderID: string
  id: string
}

export enum Categories {
  Food = "Food",
  Travel = "Travel",
  Health = "Health",
  Supplies = "Supplies"
}