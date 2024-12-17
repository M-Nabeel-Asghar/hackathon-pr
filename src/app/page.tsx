import Header from "./components/Header";
import Browse from "./components/Browse";
import Cart from './components/Cart'
import Hero from './components/Hero'
import Gallery from "./components/Gallery";

export default function Home() {
  return (
    <div>
        <Header />
        <Browse />
        <Cart />
        <Hero />
        <Gallery />
    </div>
  );
}
