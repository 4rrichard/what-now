import React, { useContext, useEffect, useState } from "react";
import GameCard from "../blocks/GameCard";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";

import GameContext from "../../context/GameProvider";

function GameCarousel() {
    const { games } = useContext(GameContext);

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

    if (!games || games.length === 0) {
        return <p className="text-center text-white mt-10">No games found.</p>;
    }

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
                                <GameCard key={game.id} gameData={game} />
                            </div>
                        </CarouselItem>
                    );
                })}
            </CarouselContent>
        </Carousel>
    );
}

export default GameCarousel;
