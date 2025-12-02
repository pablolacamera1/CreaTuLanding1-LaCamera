export interface Product {
  id: number;
  name: string;
  price: number;
}

export const products: Product[] = [
  { id: 1, name: "Soda Stereo - Canción Animal", price: 9000 },
  { id: 2, name: "Patricio Rey - Oktubre", price: 8500 },
  { id: 3, name: "Luis Alberto Spinetta - Artaud", price: 12000 },
  { id: 4, name: "Kendrick Lamar - GNX", price: 15000 },
  { id: 5, name: "Daft Punk - Discovery", price: 10000 }
];

export function getProducts(): Promise<Product[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(products), 600);
  });
}

export function getProductById(id: number): Promise<Product | undefined> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(products.find(p => p.id === id)), 600);
  });
}
