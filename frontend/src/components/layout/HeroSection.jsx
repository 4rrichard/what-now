import { useState } from "react";
import SearchForm from "../blocks/SearchForm";
import Footer from "./Footer";
import NavBar from "./NavBar";
import GameCarousel from "./GameCarousel";
import SkeletonGameCarousel from "./SkeletonGameCarousel";
import SearchSection from "./SearchSection";

function HeroSection() {
    const [isSearching, setIsSearching] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [searchValue, setSearchValue] = useState("");

    function handleSearch(value) {
        setIsSearching(true);
        setIsLoading(true);
        setSearchValue(value);

        setTimeout(() => {
            setIsLoading(false);
        }, 1200);
    }

    return (
        <section className="hero-bg min-h-screen flex justify-center">
            <NavBar />

            <div
                className={`w-full flex flex-col text-center transition-all duration-300 px-6 lg:px-20 ${
                    isSearching
                        ? "pt-10 pb-10 justify-center overflow-y-hidden"
                        : "pt-32"
                }`}
            >
                <div
                    className={`overflow-hidden transition-all duration-500 ${
                        isSearching
                            ? "max-h-0 opacity-0 -translate-y-4"
                            : "max-h-[200px] opacity-100 translate-y-0"
                    }`}
                >
                    <h1 className="text-7xl text-primary font-bold drop-shadow">
                        What-Now?
                    </h1>

                    <p className="text-secondary text-xl max-w-xl mx-auto">
                        Find the perfect game based on your mood.
                    </p>
                </div>

                <div
                    className={`relative w-full transition-transform duration-700 transform-gpu ${
                        isSearching ? "animate-searchbar-up" : ""
                    }`}
                >
                    <SearchSection
                        onSearch={handleSearch}
                        value={searchValue}
                    />
                </div>

                {isSearching && (
                    <div className="mt-10 w-full flex justify-center">
                        {isLoading ? (
                            <SkeletonGameCarousel />
                        ) : (
                            <div className=" w-full">
                                <GameCarousel />
                            </div>
                        )}
                    </div>
                )}
            </div>

            <Footer />
        </section>
    );
}

export default HeroSection;
