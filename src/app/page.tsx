import Image from "next/image";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Browse from "./components/Browse";
import Cart from './components/Cart'
import Hero from './components/Hero'
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
        <Navbar />
        <Header />
        <Browse />
        <Cart />
        <Hero />
        <Gallery />
        <Footer />
        
    </div>
  );
}
