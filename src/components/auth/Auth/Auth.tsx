import { Outlet, Route, Routes } from "react-router-dom";
import Register from "../Register/Register";
import Login from "../Login/Login";
import ForgotPassword from "../Forgot/Forgot";
import ResetPassword from "../Reset/Reset";

export default function Auth(){
    return (
        <div className="w-screen h-screen bg-hero-image bg-cover bg-center relative">
            <div className="absolute w-screen h-screen flex items-center justify-center backdrop-brightness-50">
                <div className="lg:w-1/2 md:w-3/4 w-[90%] h-[90%] bg-opacity-80 backdrop-blur-lg bg-darkGray overflow-y-scroll flex flex-col justify-start items-center space-y-4 py-4">
                    <div className="">
                        <img src="/images/logo.png" alt="Logo" />
                    </div>
                    <Routes>
                        <Route path='/register' element={<Register/>}/>
                        <Route path='/login' element={<Login/>}/>
                        <Route path='/forgot' element={<ForgotPassword/>}/>
                        <Route path='/reset' element={<ResetPassword/>}/>
                    </Routes>
                </div>
            </div>
            
        </div>
    )
}