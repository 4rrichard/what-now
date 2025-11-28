import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardHeader,
    CardDescription,
    CardTitle,
    CardFooter,
} from "@/components/ui/card";

const GameCard = () => {
    return (
        <Card className="min-w-md max-h-4/5 pt-0 text-primary">
            <CardContent className="px-0">
                <img
                    src="https://cdn.shadcnstudio.com/ss-assets/components/card/image-2.png?height=280&format=auto"
                    alt="Banner"
                    className="aspect-video rounded-t-xl object-cover"
                />
            </CardContent>
            <CardHeader>
                <CardTitle>Ethereal Swirl Gradient</CardTitle>
                <CardDescription>
                    Smooth, flowing gradients blending rich reds and blues in an
                    abstract swirl.
                </CardDescription>
            </CardHeader>
            <CardFooter className="gap-3 max-sm:flex-col max-sm:items-stretch">
                <Button>Explore More</Button>
                <Button variant={"outline"}>Download Now</Button>
            </CardFooter>
        </Card>
    );
};

export default GameCard;
