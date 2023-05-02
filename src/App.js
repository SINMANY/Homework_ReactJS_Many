import { CompImage } from "./components/CompImage";
import { Featback } from "./components/Featback";
import { Footer } from "./components/Footer";
import Navbar from "./components/Navbar";
import { Product } from "./components/Product";
import SlideAsBody from "./components/SlideAsBody";


function App() {
    return (
        <>
            <Navbar />
            <SlideAsBody />
            <main>
                <Product />
                <CompImage />
                <Featback />
            </main>
            <Footer />
        </>
    )
}

export default App;