import Sbanner from '../components/Shopb'
import Navbar from '../components/Navbar';
import Scart from '../components/Scart';
import Frame from '../components/Frame';
import Footer from '../components/Footer';
export default function Home() {
    return (
      <div>
        <Navbar/>
        <Sbanner />
        <Scart />
        <Frame />
        <Footer />
          
      </div>
    );
  }