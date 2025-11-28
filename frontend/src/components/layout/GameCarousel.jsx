import React, { useEffect, useState } from "react";
import ResultCard from "../blocks/GameCard";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

function GameCarousel() {
    const [emblaApi, setEmblaApi] = useState(null);
    const [selectedIndex, setSelectedIndex] = useState(0);

    useEffect(() => {
        if (!emblaApi) return;

        const onSelect = () => {
            setSelectedIndex(emblaApi.selectedScrollSnap());
        };

        emblaApi.on("select", onSelect);
        onSelect();
    }, [emblaApi]);

    return (
        <Carousel
            className="max-w-full "
            opts={{ loop: true }}
            setApi={setEmblaApi}
        >
            <CarouselContent className="-ml-1 flex items-center relative">
                {Array.from({ length: 5 }).map((_, index) => {
                    const isCenter = index === selectedIndex;

                    return (
                        <CarouselItem
                            key={index}
                            className={`pl-1 md:basis-1/2 lg:basis-1/3 flex justify-center relative
                    ${isCenter ? "z-[60]" : "z-[10]"}
                `}
                        >
                            <div
                                className={`
                        transition-all duration-500
                        ${isCenter ? "scale-110" : "scale-90 opacity-70"}
                    `}
                            >
                                <ResultCard />
                            </div>
                        </CarouselItem>
                    );
                })}
            </CarouselContent>
        </Carousel>
    );
}

export default GameCarousel;
