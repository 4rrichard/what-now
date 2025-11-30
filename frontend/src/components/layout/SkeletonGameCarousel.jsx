import SkeletonGameCard from "../blocks/SkeletonGameCard";

function SkeletonGameCarousel() {
    return (
        <div className="flex gap-6 px-4">
            <SkeletonGameCard />
            <SkeletonGameCard />
            <SkeletonGameCard />
        </div>
    );
}
export default SkeletonGameCarousel;
