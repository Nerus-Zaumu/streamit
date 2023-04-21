import { Route, Routes } from "react-router-dom";
import Home from "../home/Home";
import Navbar from "../navbar/Navbar";
import Feature from "../features/Feature";
import More from "../more/More";
import Profile from "../profile/Profile";

export default function MainDashboard() {
    return (
        <section className="flex flex-col items-center justify-center ">
            {/* Nav container */}
            <div className="z-50 w-screen">
                <Navbar />
            </div>
            <div className="w-full relative">
                <div className="hidden absolute w-full h-full backdrop-brightness-75" id="overlay"></div>
                <Routes>
                    <Route path='/home' element={<Home />}/>
                    <Route path='/features' element={<Feature />}/>
                    <Route path='/more' element={<More />}/>
                    <Route path='/profile' element={<Profile />}/>
                </Routes>
            </div>
        </section>
    )
}