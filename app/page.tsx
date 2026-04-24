import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Why from "@/components/Why";
import Gallery from "@/components/Gallery";
import Packages from "@/components/Packages";
import Inquiry from "@/components/Inquiry";
import Footer from "@/components/Footer";
import MessengerBubble from "@/components/MessengerBubble";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Why />
        <Gallery />
        <Packages />
        <Inquiry />
      </main>
      <Footer />
      <MessengerBubble />
    </>
  );
}
