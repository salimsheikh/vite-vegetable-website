import { SetStateAction } from "react";
import ProductCard from "./ProductCard";
import { IProduct } from "./Navbar";

interface PropsType {
  setCart: React.Dispatch<SetStateAction<IProduct[]>>;
  cart: IProduct[];
}

const FeatureProducts = ({cart,setCart}:PropsType) => {
  const productsData = [
    {
      id: 1,
      img: "/product_1.jpg",
      name: "Orange",
      price: 78,
    }, {
      id: 2,
      img: "/product_2.jpg",
      name: "Pomegranate",
      price: 47,
    }, {
      id: 3,
      img: "/product_3.jpg",
      name: "Apple",
      price: 120,
    }, {
      id: 4,
      img: "/product_4.jpg",
      name: "Strawberry",
      price: 85,
    }, {
      id: 5,
      img: "/product_5.jpg",
      name: "Lemon",
      price: 5,
    }, {
      id: 6,
      img: "/product_6.jpg",
      name: "Tomato",
      price: 30,
    }, {
      id: 7,
      img: "/product_7.jpg",
      name: "Cauliflower",
      price: 32,
    }, {
      id: 8,
      img: "/product_8.jpg",
      name: "Grapes",
      price: 41,
    }, {
      id: 9,
      img: "/product_9.jpg",
      name: "Cauliflower",
      price: 65,
    }, {
      id: 10,
      img: "/product_10.jpg",
      name: "Orange",
      price: 20,
    }
  ];
  return (
    <div className="container py-[100px]">
      <h2 className="text-3xl font-semibold text-center">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 pt-[100px]">
        {productsData.map((product) => (
          <ProductCard key={product.id} id={product.id} img={product.img} name={product.name} price={product.price} cart={cart} setCart={setCart} />
        ))}
      </div>
    </div>
  )
}

export default FeatureProducts