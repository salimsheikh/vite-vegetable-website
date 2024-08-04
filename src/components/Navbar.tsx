import { CiSearch } from "react-icons/ci"
import { FaRegHeart } from "react-icons/fa6"
import { MdOutlineShoppingCart } from "react-icons/md"

export const Navbar = () => {
  return (
    <nav className="sticky top-0 bg-white">
      <div className="container flex items-center justify-between gap-8 mb-4 pt-4">
        <div className="logo text-4xl font-semibold">Loog</div>
        <div className="search relative w-full hidden sm:block">
          <input type="text" name="search-text" className="py-2 px-4 outline-none border border-gray-300 rounded-md w-full" placeholder="Search Product Name..." />
          <button className="absolute top-0 right-0 bg-accent hover:bg-accentDark text-white text-md flex items-center gap-2 px-4 h-full rounded-r-md">
            <p>Search</p>
            <CiSearch />
          </button>
        </div>
        <div className="cart flex gap-4 text-xl text-gray-500 ">
          <div className="relative cursor-pointer">
            <MdOutlineShoppingCart />
            <div className=" bg-accent size-5 text-white text-sm rounded-full grid place-items-center absolute left-[12px] top-[-13px]">0</div>
          </div>
          <FaRegHeart />
        </div>
      </div>
    </nav>
  )
}
