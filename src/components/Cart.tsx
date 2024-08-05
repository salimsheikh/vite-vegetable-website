import { SetStateAction } from "react"
import { IoMdClose } from "react-icons/io"
import CartList from "./CartList";
import { IProduct } from "./Navbar";

interface PropsType {
    setCartOpen: React.Dispatch<SetStateAction<Boolean>>;
    setCart: React.Dispatch<SetStateAction<IProduct[]>>;
    cart: IProduct[];
}

const Cart = ({ cart, setCart, setCartOpen }: PropsType) => {

    const getTotal = () => {
        let total = 0;
        cart?.forEach((item) => {
            total += item.quantity * item.price;
        });

        return total;

    }

    return (
        <div className="fixed left-0  top-0  w-full min-h-screen bg-[#00000060] overflow-scroll">
            <div className="max-w-[400px] w-full min-h-full bg-white absolute right-0 top-0 p-6">
                <div className="text-3xl absolute right-0 top-0 m-6 cursor-pointer" onClick={() => setCartOpen(false)}>
                    <IoMdClose />
                </div>

                <h2 className="pt-6 text-lg font-medium text-gray-600 uppercase">Your Cart</h2>

                <div className="mt-6 space-y-2">
                    {cart?.map((item) => (
                        <CartList key={item.id} id={item.id} img={item.img} name={item.name} price={item.price}
                            quantity={item.quantity}
                            cart={cart}
                            setCart={setCart}
                        />
                    ))}
                </div>
                {getTotal() > 0 ?
                    <div className="flex items-center justify-between">
                        <div className="text-2xl font-semibold">Total</div>
                        <div className="text-2xl font-semibold">
                            ${getTotal().toFixed(2)}
                        </div>
                    </div>
                    : <div>Cart Empty</div>
                }
            </div>
        </div>
    )
}

export default Cart
