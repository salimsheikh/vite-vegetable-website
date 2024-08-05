import { IoMdClose } from "react-icons/io";
import { IProduct } from "./Navbar";
import { SetStateAction } from "react";

interface PropsType {
  id: number;
  img: string;
  name: string;
  price: number;
  quantity: number;
  cart: IProduct[];
  setCart: React.Dispatch<SetStateAction<IProduct[]>>;
}

const CartList = ({ id, img, name, price, quantity, cart, setCart }: PropsType) => {

  const removeFromCart = () => {
    const remove = cart.filter(item => item.id !== id);
    setCart(remove);
  }
  return (
    <div className="flex justify-between items-center">

      <div className="flex items-center gap-4">
        <img className="h-[80px]" src={img} alt={name} />
        <div className="space-y-2">
          <h3 className="font-medium">{name}</h3>
          <p className="text-gray-600 text-[14px]">
            {quantity} X ${price}.00
          </p>
        </div>
      </div>
      <div className="text-2xl cursor-pointer" onClick={removeFromCart}>
        <IoMdClose />
      </div>
    </div>
  )
}

export default CartList