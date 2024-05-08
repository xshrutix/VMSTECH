import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import { CookieConsent } from "./components/CookieConsent";
import Hero from "./components/Hero";
import Stack from "./components/StackedPages/Stack";
import TestimonialSection from "./components/Testimonials/Testimonials";







const Home = () => {
    return (
        <>

            <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden h-full">
                <CookieConsent />
                <Hero />
                <Benefits />
                <Stack />
                <TestimonialSection />
            </div>

            <ButtonGradient />
        </>

    );
};

export default Home;
