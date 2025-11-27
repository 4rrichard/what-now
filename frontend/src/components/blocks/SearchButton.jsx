import { Button } from "@/components/ui/button";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

function SearchButton({ onClick }) {
    return (
        <Button variant="ghost" onClick={onClick} className="cta-button  mb-36">
            <MagnifyingGlassIcon className="size-8" />
        </Button>
    );
}

export default SearchButton;
