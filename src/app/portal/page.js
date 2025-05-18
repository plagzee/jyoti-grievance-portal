'use client'

import { useRouter } from "next/navigation";

const Menu = () => {

    const router = useRouter();

    if (typeof window !== "undefined") {
        if (!localStorage.getItem("token")) {
            router.push("/");
        }
    }

    return (
        <div>
            <div className="bg-pink-400 w-[100vw] h-[100vh] flex items-center justify-center">
                <div className="bg-slate-100 opacity-80 lg:w-[50vw] w-[90vw] h-[80vh] text-black flex">
                    <div className="flex flex-col items-center justify-center m-auto text-xl font-semibold font-mono">
                        <a className="opacity-100 bg-blue-400 p-3 hover:cursor-pointer hover:bg-blue-300 duration-small" href="/create">{"Create a Grievance 🌏"}</a>
                        <br></br>
                        {/* <a className="opacity-100 bg-blue-400 p-3 hover:cursor-pointer hover:bg-blue-300 duration-small">{"Past Grievances 💔"}</a>
                        <br></br> */}
                        <button className="text-red-500 hover:cursor-pointer hover:text-red-300 duration-small " onClick={() => { localStorage.removeItem("token"); router.push("/") }} type="button">Logout</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu;