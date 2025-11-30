import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardHeader,
    CardDescription,
    CardTitle,
    CardFooter,
} from "@/components/ui/card";

// import gameImg from "../../assets/rock-bg.jpg";

import { useEffect } from "react";

const GameCard = ({ gameTitle, gameDesc, gameImg }) => {
    return (
        <Card className="min-w-[340px] pt-0 text-primary bg-[#0a0a78]/20">
            <CardContent className="px-0">
                <img
                    src={gameImg}
                    alt="Banner"
                    className="aspect-video rounded-t-xl object-cover"
                />
            </CardContent>
            <CardHeader>
                <CardTitle>{gameTitle}</CardTitle>
                <CardDescription>{gameDesc}</CardDescription>
            </CardHeader>
            <CardFooter className="gap-3 max-sm:flex-col max-sm:items-stretch">
                <Button>Save to Favorites</Button>
                <Button variant={"outline"}>More Details</Button>
            </CardFooter>
        </Card>
    );
};

export default GameCard;
