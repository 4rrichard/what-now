import React, { useEffect, useState } from "react";
import GameCard from "../blocks/GameCard";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

import games from "../../assets/games";

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
            className="w-full"
            opts={{ loop: true, align: "center", containScroll: "trimSnaps" }}
            setApi={setEmblaApi}
        >
            <CarouselContent className="ml-0! px-0!">
                {games.map((game, index) => {
                    const isCenter = index === selectedIndex;

                    return (
                        <CarouselItem
                            key={index}
                            className="pl-0! basis-[380px] flex justify-center snap-start"
                        >
                            <div
                                className={`transition-all duration-500 ${
                                    isCenter
                                        ? "scale-100 z-50"
                                        : "scale-75 opacity-40 z-0"
                                }`}
                            >
                                <GameCard
                                    gameTitle={game.title}
                                    gameDesc={game.description}
                                    gameImg={game.image}
                                />
                            </div>
                        </CarouselItem>
                    );
                })}
            </CarouselContent>
        </Carousel>
    );
}

export default GameCarousel;
