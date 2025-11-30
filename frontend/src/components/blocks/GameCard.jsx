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

const GameCard = ({ gameTitle, gameDesc, gameImg }) => {
    return (
        <Card className="w-[380px] h-[380px] pt-0 text-primary bg-[#0a0a78]/20 overflow-hidden">
            <CardContent className="px-0">
                <img
                    src={gameImg}
                    alt="Banner"
                    className="aspect-video rounded-t-xl object-cover select-none"
                />
            </CardContent>
            <CardHeader className="select-none">
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
