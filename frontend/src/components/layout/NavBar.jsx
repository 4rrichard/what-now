import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

function NavBar() {
    return (
        <header className="w-full absolute top-0 left-0 z-50 backdrop-blur-xl bg-white/5 border-b border-white/10">
            <NavigationMenu className="max-w-6xl mx-auto w-full px-6 py-3 text-text">
                <NavigationMenuList className="flex items-center gap-4">
                    <NavigationMenuItem>
                        <NavigationMenuTrigger className="text-text hover:bg-white/10">
                            Item One
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className="bg-card/80 backdrop-blur-md border border-white/10 text-text p-2 rounded-xl">
                            <NavigationMenuLink>Link</NavigationMenuLink>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </header>
    );
}

export default NavBar;
