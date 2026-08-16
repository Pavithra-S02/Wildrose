import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import WhyWildRose from "./components/WhyWildRose";
import Testimonials from "./components/Testimonials";
import BookingCTA from "./components/BookingCTA";
import Contact from "./components/Contact";

function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <Services />
            <Gallery />
            <WhyWildRose />
            <Testimonials />
            <BookingCTA />
            <Contact />
        </>
    );
}

export default App;