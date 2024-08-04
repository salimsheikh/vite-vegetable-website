import Banner from "./components/Banner"
import FeatureProducts from "./components/FeatureProducts"
import Footer from "./components/Footer"
import { Navbar } from "./components/Navbar"
import Services from "./components/Services"
const App = () => {
  return (
    <main>
      <Navbar />
      <Banner />
      <Services />
      <FeatureProducts />
      <Footer />
    </main>
  )
}

export default App