import SearchForm from "../blocks/SearchForm";
import Footer from "./Footer";
import NavBar from "./NavBar";

function HeroSection() {
    return (
        <section className="hero-bg flex flex-col justify-center relative h-screen text-center">
            <NavBar />
            <div className="flex flex-col items-center">
                <h1 className="text-7xl text-primary font-bold text-center drop-shadow">
                    What-Now?
                </h1>

                <p className="text-secondary text-xl text-center max-w-xl">
                    Find the perfect game based on your mood.
                </p>
            </div>

            <SearchForm />
            <Footer />
        </section>
    );
}

export default HeroSection;
