import { useState } from "react";
import SearchForm from "../blocks/SearchForm";
import Footer from "./Footer";
import NavBar from "./NavBar";

function HeroSection() {
    const [isSearching, setIsSearching] = useState(false);

    function handleSearch(value) {
        console.log("User searched:", value);
        setIsSearching(true);
    }

    return (
        <section className="hero-bg flex flex-col justify-center relative h-screen text-center">
            <NavBar />
            <div className="h-20"></div>
            <div
                className={`flex flex-col items-center transition-all duration-200 ${
                    isSearching
                        ? "opacity-0 translate-y-[-30px]"
                        : "opacity-100"
                }`}
            >
                <h1 className="text-7xl text-primary font-bold text-center drop-shadow">
                    What-Now?
                </h1>

                <p className="text-secondary text-xl text-center max-w-xl">
                    Find the perfect game based on your mood.
                </p>
            </div>

            <div
                className={`transition-all duration-700 ${
                    isSearching ? "animate-searchbar-up scale-90" : "scale-100"
                }`}
            >
                <SearchForm onSearch={handleSearch} />
            </div>
            <Footer />
        </section>
    );
}

export default HeroSection;
