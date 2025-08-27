import Hero from "../components/Hero";
import Catalog from "../components/Catalog";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Catalog />
      <Footer />
    </div>
  );
}
