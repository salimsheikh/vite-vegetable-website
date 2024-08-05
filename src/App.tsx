import { useState } from "react"
import Banner from "./components/Banner"
import FeatureProducts from "./components/FeatureProducts"
import Footer from "./components/Footer"
import { IProduct, Navbar } from "./components/Navbar"
import Services from "./components/Services"
import Cart from "./components/Cart"
const App = () => {
  const[cart, setCart] = useState<IProduct[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  return (
    <main>
      <Navbar cart={cart}  setCartOpen={setCartOpen} />
      <Banner />
      <Services />
      <FeatureProducts cart={cart} setCart={setCart} />
      <Footer />

      {cartOpen && <Cart cart={cart} setCart={setCart} setCartOpen={setCartOpen} />}
    </main>
  )
}

export default App