'use client'

import checkLogin from "../../../middleware/checkLogin"
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const Menu = () => {

    const router = useRouter();

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        setIsLoggedIn(checkLogin());
    }, []);

    if (!isLoggedIn) return null;

    const logOut = () => {
        if (typeof window !== "undefined") {
            localStorage.removeItem("token");
            router.push("/");
        }
    }

    return (
        <div className="bg-cover bg-center w-screen h-screen flex justify-center items-center m-auto"
            style={{ backgroundImage: "url('/bg_1.jpg')", backgroundColor: "#FF00FF" }}>

            <div className="flex flex-col items-center justify-center m-auto text-xl font-semibold font-mono lg:w-[50vw] w-[80vw] h-[60vh] bg-amber-50 relative border-t-black border-t-8 border-r-black border-r-16 border-b-black border-b-20 border-l-black border-l-4">


                <img src="/hello_kitty.png" className="absolute top-2 right-2 w-20 sm:w-24 md:w-28 lg:w-32 rotate-24" />

                <div>
                    <br />
                    <h1 className="lg:text-3xl text-sm font-bold text-black text-center">{"Welcome back! 😺 "}</h1>
                    <br />
                    <div className="flex flex-col items-center justify-center m-auto">
                        <button className="relative inline-block px-4 md:px-6 py-2 md:py-3 text-sm md:text-base font-medium group w-auto cursor-pointer" onClick={() => router.push("/create")}>
                            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:translate-x-0 group-hover:translate-y-0"></span>
                            <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                            <span className="relative text-black group-hover:text-white">Create New Grievance</span>
                        </button>
                        <br />
                        <button className="relative inline-block px-4 md:px-6 py-2 md:py-3 text-sm md:text-base font-medium group w-auto cursor-pointer" onClick={() => router.push("/past")}>
                            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:translate-x-0 group-hover:translate-y-0"></span>
                            <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                            <span className="relative text-black group-hover:text-white">Past Grievances</span>
                        </button>
                        <br />
                        <button className="relative inline-block px-4 md:px-6 py-2 md:py-3 text-sm md:text-base font-medium group w-auto cursor-pointer" onClick={logOut}>
                            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:translate-x-0 group-hover:translate-y-0"></span>
                            <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-red-400"></span>
                            <span className="relative text-black group-hover:text-white">Log Out</span>
                        </button>
                        <br />
                        <br />
                        <a className="text-black text-[8px]" href="http://www.freepik.com">Designed by renata.s / Freepik</a>

                    </div>
                </div>


            </div>
        </div>
    )
}

export default Menu;