import { SetStateAction } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IProduct } from "./Navbar";

interface PropsType {
    id: number;
    img: string;
    name: string;
    price: number;
    setCart: React.Dispatch<SetStateAction<IProduct[]>>;
    cart: IProduct[];
}
const ProductCard = ({id, img, name, price,cart,setCart} : PropsType) => {
    const addToCart = () => {       
        const productExists = cart?.filter((product) => product .id === id);
        if(productExists.length > 0){
            let cartItems: any = cart
            cartItems = cartItems.map((item: any) => {
                return item.id === id ? {...item, quantity: item.quantity + 1} : item;
            });
            setCart(cartItems);
        }else{
            setCart((prevState) => [
                ...prevState, 
                {id, img,name,price, quantity: 1},
            ]);
        }
    }

  return (
    <div>
        <div className="border border-gray-300">
            <img src={img} alt={name} className="w-full" />
        </div>
        <div className="border border-gray-300 border-t-0">
            <h2 className="text-2xl text-center pt-4">{name}</h2>
            <div className="flex justify-between items-center px-4 pt-8 mb-4">
                <p className="text-accentDark text-xl font-mediumt">$ {price}.00</p>
                <button className="bg-accent hover:bg-accentDark text-white px-4 py-2 flex items-center gap-2" onClick={addToCart}>
                    <MdOutlineShoppingCart />
                    Add to Cart
                    </button>
            </div>
        </div>
    </div>
  )
}

export default ProductCard