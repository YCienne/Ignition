import ButtonGradient from "./assets/svg/ButtonGradient";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Pricing from "./Components/Pricing";
import Services from "./Components/Services";
import Footer from "./Components/Footer";



const App = () => {
  
  return (
    <>
    
    <div className="pt-[5.75rem] lg:pt-[1.25rem] overflow-hidden">
      <Header />
      <About />
      <Services />
      <Pricing />
      <Footer />
    </div>

    <ButtonGradient />
    
    </>
  )
}

export default App

