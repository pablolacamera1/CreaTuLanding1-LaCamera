export interface Product {
  id: string;
  title: string;
  artist: string;
  price: number;
  stock: number;
  category: string;
  img: string;
  description: string;
}

export const products: Product[] = [
  {
    id: "1",
    title: "Canción Animal",
    artist: "Soda Stereo",
    price: 9000,
    stock: 10,
    category: "rock",
    img: "/img/cancion-animal.jpg",
    description: "Disco fundamental del rock argentino editado en 1990."
  },
  {
    id: "2",
    title: "Oktubre",
    artist: "Patricio Rey y sus Redonditos de Ricota",
    price: 8500,
    stock: 8,
    category: "rock",
    img: "/img/oktubre.jpg",
    description: "Uno de los discos más influyentes del rock nacional."
  },
  {
    id: "3",
    title: "Artaud",
    artist: "Luis Alberto Spinetta",
    price: 12000,
    stock: 5,
    category: "rock",
    img: "/img/artaud.jpg",
    description: "Obra cumbre del Flaco Spinetta."
  }
];

export function getProducts(): Promise<Product[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(products), 500);
  });
}

export function getProductById(id: string): Promise<Product | undefined> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(products.find(p => p.id === id)), 500);
  });
}
