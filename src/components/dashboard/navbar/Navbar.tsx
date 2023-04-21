import { Link, NavLink, useMatch } from "react-router-dom";
import DropdownLink from "../../../shared/components/dropdown-links/DropdownLink";
import { RouteConfig } from "../../../shared/types/forms.types";
import { useEffect } from "react";

export default function Navbar(){

    const matchesHome = useMatch("/dashboard/home");
    const matchesFeatures = useMatch("/dashboard/features");
    const matchesMore = useMatch("/dashboard/more");
    const matchesProfile = useMatch("/dashboard/profile");
    const featuresConfig: RouteConfig[] = [
        { route: 'restricted', title: 'Restricted Content' },
        { route: 'download', title: 'Download Movies' },
        { route: 'playlist', title: 'Playlist' },
        { route: 'genres', title: 'Genres' },
    ]

    const moreConfig: RouteConfig[] = [
        { route: 'about', title: 'About Us' },
        { route: 'contact', title: 'Contact Us' },
        { route: 'policy', title: 'Privacy Policy' },
        { route: 'pricing', title: 'Pricing' },
        { route: 'subscription', title: 'Subscriptions' },
    ]

    function handleSidebarToggle(){
        const sidebar = document.getElementById('sidebar') as HTMLElement;
        sidebar.classList.toggle('hidden');
        sidebar.classList.toggle('flex');
    }

    useEffect(() => {
        const forbiddenIds = ['close-menu', 'hamburger'];
        const sidebar = document.getElementById('sidebar') as HTMLElement;
        const overlay = document.getElementById('overlay') as HTMLDivElement;
        document.addEventListener('click', (event: any) => {
            
            if(forbiddenIds.includes(event.target.id) || (!sidebar.contains(event.target) && sidebar.classList.contains('flex') && !forbiddenIds.includes(event.target.id))) {
                sidebar.classList.toggle('hidden')
                sidebar.classList.toggle('flex')
                sidebar.classList.contains('hidden') ? overlay.classList.add('hidden') : overlay.classList.remove('hidden')
            }
        })
    })

    return (
        <>
            <div className="py-3 bg-dark w-full">
                <aside className="sm:w-[50vw] w-[75vw] h-screen bg-dark absolute top-0 z-50 hidden md:hidden flex-col space-y-6" id="sidebar">
                    <div className="text-white md:hidden w-full flex flex-col space-y-4 mt-14">
                        <div className="w-[90%] mx-auto flex items-center justify-between">
                            <img src="/images/logo.png" className="w-32"/>
                            <img src="/icons/close_menu.svg" className="w-12 cursor-pointer" id="close-menu" onClick={handleSidebarToggle}/>
                        </div>
                        <div className="space-y-4" id="dropdown-links">
                            <DropdownLink matchesRoute={matchesHome} parentRoute="/dashboard/home" parentName="Home"/>
                            <DropdownLink routeConfigs={featuresConfig} matchesRoute={matchesFeatures} parentRoute="/dashboard/features" parentName="Features"/>
                            <DropdownLink routeConfigs={moreConfig} matchesRoute={matchesMore} parentRoute="/dashboard/more" parentName="More"/>
                            <DropdownLink matchesRoute={matchesProfile} parentRoute="/dashboard/profile" parentName="Profile"/>
                        </div>
                    </div>
                </aside>
                <nav className="container w-screen relative mx-auto py-2 bg-dark top-0">
                    <div className="w-full h-full flex items-center justify-between">
                        <div className="px-3">
                            <Link to="/">
                                <img src="/images/logo.png" alt="Logo" className="h-10"/>
                            </Link>
                        </div>
                        <div className="hidden md:flex items-center justify-center space-x-4">
                            <NavLink to='/dashboard/home' className={"text-white text-xl hover:animate-link " + (matchesHome && "animate-link")}>Home</NavLink>
                            <div className="relative group">
                                <NavLink to='/dashboard/features' className={"text-white text-xl hover:animate-link " + (matchesFeatures && "animate-link")}>Features</NavLink>
                                <div className="absolute z-50 w-52 py-2 bg-dark hidden group-hover:flex group-hover:animate-dropdown-full flex-col items-center justify-start space-y-4 group">
                                    <Link to='/dashboard/features' className="text-white hover:bg-gradient-to-r from-brightRed to-red-400 w-full px-4 text-xl mx-auto">Restricted Content</Link>
                                    <Link to='/dashboard/features' className="text-white hover:bg-gradient-to-r from-brightRed to-red-400 w-full px-4 text-xl mx-auto">Download Moview</Link>
                                    <Link to='/dashboard/features' className="text-white hover:bg-gradient-to-r from-brightRed to-red-400 w-full px-4 text-xl mx-auto">Playlist</Link>
                                    <Link to='/dashboard/features' className="text-white hover:bg-gradient-to-r from-brightRed to-red-400 w-full px-4 text-xl mx-auto">Genres</Link>
                                </div>
                            </div>
                            <div className="relative group">
                                <NavLink to='/dashboard/more' className={"text-white text-xl hover:animate-link " + (matchesMore && "animate-link")}>More</NavLink>
                                <div className="absolute z-50 w-52 py-2 bg-dark hidden group-hover:flex group-hover:animate-dropdown-full flex-col items-center justify-start space-y-4 group">
                                    <Link to='/dashboard/features' className="text-white hover:bg-gradient-to-r from-brightRed to-red-400 w-full px-4 text-xl mx-auto">Restricted Content</Link>
                                    <Link to='/dashboard/features' className="text-white hover:bg-gradient-to-r from-brightRed to-red-400 w-full px-4 text-xl mx-auto">Download Moview</Link>
                                    <Link to='/dashboard/features' className="text-white hover:bg-gradient-to-r from-brightRed to-red-400 w-full px-4 text-xl mx-auto">Playlist</Link>
                                    <Link to='/dashboard/features' className="text-white hover:bg-gradient-to-r from-brightRed to-red-400 w-full px-4 text-xl mx-auto">Genres</Link>
                                </div>
                            </div>
                            <NavLink to='/dashboard/profile' className={"text-white text-xl hover:animate-link " + (matchesProfile && "animate-link")}>Profile</NavLink>
                        </div>
                        <div className="flex items-center justify-center space-x-4">
                            <img src="/icons/search.svg" className="w-10 h-10 p-2 hover:animate-icons cursor-pointer rounded-md"/>
                            <img src="/icons/hamburger_menu.svg" className="w-10 h-10 p-2 hover:animate-icons cursor-pointer rounded-md md:hidden block" id="hamburger" onClick={handleSidebarToggle}/>
                        </div>
                    </div>
                    
                </nav>
            </div>
        </>
    )
}