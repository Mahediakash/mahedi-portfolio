import Image from "next/image";
import Hero from "@/app/components/Hero";
import Ticker from "@/app/components/Ticker";
import Portfolio from "@/app/components/Portfolio";
import Services from "@/app/components/Services";
import ContactForm from "@/app/components/ContactForm";
import Footer from "@/app/components/Footer";
import Testimonials from "@/app/components/Testimonials";
import GraphicShowcase from "@/app/components/GraphicsShowcase";


export default function Dashboard() {
    return (
        <main className="bg-primary min-h-screen text-white selection:bg-accent selection:text-primary">
            {/* Boxed Wrapper */}
            <div >
                <Hero />
                <Ticker />
                <Services />
                <Portfolio />
                <GraphicShowcase/>
                <Testimonials/>
                {/*<ContactForm />*/}
                <Footer />
            </div>
        </main>
    );
}
