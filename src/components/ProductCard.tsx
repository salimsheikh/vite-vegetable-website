import { MdOutlineShoppingCart } from "react-icons/md";

interface PropsType {
    id: number;
    img: string;
    name: string;
    price: number;

}
const ProductCard = ({id, img, name, price} : PropsType) => {
  return (
    <div>
        <div className="border border-gray-300">
            <img src={img} alt={name} className="w-full" />
        </div>
        <div className="border border-gray-300 border-t-0">
            <h2 className="text-2xl text-center pt-4">{name}</h2>
            <div className="flex justify-between items-center px-4 pt-8 mb-4">
                <p className="text-accentDark text-xl font-mediumt">$ {price}.00</p>
                <button className="bg-accent hover:bg-accentDark text-white px-4 py-2 flex items-center gap-2">
                    <MdOutlineShoppingCart />
                    Add to Cart
                    </button>
            </div>
        </div>
    </div>
  )
}

export default ProductCard