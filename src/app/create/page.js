'use client'

import { useRouter } from "next/navigation";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Create = () => {

    const router = useRouter();

    const [ title, setTitle ] = useState("");
    const [ description, setDescription ] = useState("");
    const [ mood, setMood ] = useState("happy");

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    const handleMoodChange = (event) => {
        event.preventDefault();
        setMood(event.target.value);
        console.log(mood);
    };

    if (!localStorage.getItem("token")) {
        router.push("/");
    }

    const onSubmit = (e) => {

        e.preventDefault();

        fetch("/api/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: title,
                description: description,
                mood: mood,
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.success) {
                    router.push("/success");
                } else {
                    toast.error(data.message);
                }
            });
    }

    return (
        <div>
            <ToastContainer />
            <div className="bg-pink-400 w-[100vw] h-[100vh] flex items-center justify-center">
                <form>
                    <div className="bg-slate-100 w-[90vw] h-[80vh] text-black flex flex-col items-center justify-center m-auto rounded-lg">
                        <input className="bg-white text-black font-mono text-xl p-2 w-[70vw]" type="text" placeholder="What bothers you today? 😺" value={title} onChange={handleTitleChange}></input>
                        <br />
                        <textarea className="bg-white text-black h-[40vh] w-[70vw] font-mono text-md p-2" placeholder="Please describe here." value={description} onChange={handleDescriptionChange}></textarea>
                        <br />
                        {/**We're adding a Menu */}
                        {/* <select className="bg-slate-700 text-white font-mono text-lg p-2" value={mood} onChange={handleMoodChange}>
                            <option value="happy">{"Happy 😊"}</option>
                            <option value="angry">{"Angry 😡"}</option>
                            <option value="sad">{"Sad 😔"}</option>
                        </select> */}
                        <br></br>
                        <button
                            className="relative z-10 inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-white transition-all duration-200 bg-gray-900 border-2 border-transparent sm:w-auto rounded-xl font-pj hover:bg-pink-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                            role="button" type="submit" onClick={onSubmit}>
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )

}

export default Create;