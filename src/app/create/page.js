'use client'

import { useState, useEffect } from "react"
import checkLogin from "../../../middleware/checkLogin"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/navigation";

export default function Create() {

    const router = useRouter();

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        setIsLoggedIn(checkLogin());
    }, []);

    if (!isLoggedIn) return null

    const handleChange = (event) => {
        event.preventDefault();

        if (event.target.name === "title") {
            setTitle(event.target.value);
        }
        if (event.target.name === "description") {
            setDescription(event.target.value);
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(title);
        console.log(description);
        const response = await fetch("/api/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: title,
                description: description,
            }),
        })

        const res = await response.json();

        if (res.success) {
            toast.success("Grievance created successfully!");
            setTimeout(() => {
                router.push("/success");
            }, 2500);
        } else {
            toast.error(res.message);
        }
    }

    return (
        <>
            <ToastContainer />
            <form onSubmit={handleSubmit}>
                <div className="bg-cover bg-center w-screen h-screen flex justify-center items-center m-auto"
                    style={{ backgroundColor: "#979e7c" }}>
                    <img src="/hello_kitty2.png" className="absolute top-2 right-2 w-20 sm:w-24 md:w-28 lg:w-32" />

                    <div className="bg-[#979e7c] flex flex-col items-center justify-center m-auto font-semibold font-mono lg:w-[50vw] w-[80vw] h-[70vh] border-[#20250f] border-8 rounded-2xl shadow-2xl shadow-black">
                        <input
                            className="w-[60vw] md:w-[40vw] h-[6vh] md:h-[5vh] border-4 border-[#20250f] rounded-md text-[#20250f] p-2 font-mono lg:text-xl text-sm"
                            placeholder="Title"
                            type="text"
                            name="title"
                            value={title}
                            onChange={handleChange}
                        />
                        <br />
                        <textarea className="w-[60vw] md:w-[40vw] h-[40vh] md:h-[30vh] border-4 border-[#20250f] rounded-md text-[#20250f] p-2 font-mono lg:text-xl text-sm"
                            placeholder="Description"
                            name="description"
                            value={description}
                            onChange={handleChange}></textarea>

                        <br />
                        <button className="w-[40vw] border-4 border-[#20250f] rounded-md text-[#20250f] p-2 font-mono cursor-pointer bg-[#7c8779] hover:bg-[#72a1ff] lg:text-xl text-sm">Submit Grievance</button>
                    </div>
                </div>
            </form>
        </>
    )
}