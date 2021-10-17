export interface Product{
  id: number;
  name: string;
  price: number;
  description: string
}

export const products = [
  {
    id: 1,
    name: 'Item 1',
    price: 100,
    description: 'Description 1'
  },
  {
    id: 2,
    name: 'Item 2',
    price: 200,
    description: 'Description 2'
  },
  {
    id: 3,
    name: 'Item 3',
    price: 300,
    description: 'Description 3'
  }
]
