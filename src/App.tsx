import Banner from "./components/Banner"
import { Navbar } from "./components/Navbar"
import Services from "./components/Services"
const App = () => {
  return (
    <main>
      <Navbar />
      <Banner />
      <Services />
      <div className="container py-[100px]">
        <h2 className="text-3xl font-semibold text-center">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 pt-[100px]">
          Products
        </div>
      </div>
    </main>
  )
}

export default App