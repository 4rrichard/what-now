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
            className="w-full max-w-[1150px]"
            opts={{ loop: true }}
            setApi={setEmblaApi}
        >
            <CarouselContent className="flex gap-6 px-6">
                {games.map((game, index) => {
                    const isCenter = index === selectedIndex;

                    return (
                        <CarouselItem
                            key={index}
                            className="basis-[340px] flex justify-center snap-start"
                        >
                            <div
                                className={`transition-all duration-500 ${
                                    isCenter
                                        ? "scale-100 z-50"
                                        : "scale-70 opacity-30 z-0"
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
