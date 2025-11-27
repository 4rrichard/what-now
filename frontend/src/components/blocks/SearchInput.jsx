import { Input } from "@/components/ui/input";

function SearchInput() {
    return (
        <Input
            className="
                max-w-2/5 h-16 text-xl!
                placeholder:text-xl placeholder:text-muted placeholder:opacity-60
                backdrop-blur-xl bg-card/30 text-primary 
                border border-white/20 rounded-l-full px-6 mb-36 
                focus-visible:ring-transparent
                focus:border-text-muted focus:border-2
                focus:text-xl
                hover:bg-[#0a0a78]/20  
                focus:placeholder:opacity-0
            "
            placeholder="How are you feeling?"
        />
    );
}

export default SearchInput;
