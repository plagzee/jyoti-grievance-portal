'use client'

import { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from "next/navigation";
import 'react-toastify/dist/ReactToastify.css';
import checkLogin from "../../middleware/checkLogin";

const Home = () => {
  

  

  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const onSubmit = async() => {
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: userName,
        password: password,
      }),
    })

    const res = await response.json();

    if (res.success) {
      await localStorage.setItem("token", res.token);
      toast.success("Login successful!");
      setTimeout(() => {
        router.push("/portal");
      }, 2500);
      
    } else {
      toast.error(res.message);
    }
  }

  const handleSubmit = async(event) => {

    event.preventDefault();

    onSubmit();
    
  }

  return (
    <div>
      <ToastContainer />
      <title>{"Jyoti's Grievance Portal"}</title>

      <div className="bg-pink-200 w-[100vw] h-[100vh] flex items-center justify-center m-auto">
        <div className="container-box lg:w-[40vw] lg:h-[45vh] w-[90vw] h-[50vh] bg-amber-50 rounded-3xl">
          <h1 className="text-center text-black m-7 font-semibold text-2xl">{"Jyoti's Grievance Portal"}</h1>
          <form onSubmit={handleSubmit}>
            <div className="grid">
              <input
                className="bg-zinc-200 text-zinc-600 font-mono ring-1 ring-zinc-400 focus:ring-2 focus:ring-rose-400 outline-none duration-300 placeholder:text-zinc-600 placeholder:opacity-50 rounded-full px-4 py-2 shadow-md focus:shadow-lg focus:shadow-rose-400 dark:shadow-md dark:shadow-purple-500 m-auto"
                autoComplete="off"
                placeholder="Username"
                name="username"
                type="text"
                value={userName}
                onChange={handleUsernameChange}
              />
              <br />
              <input
                className="bg-zinc-200 text-zinc-600 font-mono ring-1 ring-zinc-400 focus:ring-2 focus:ring-rose-400 outline-none duration-300 placeholder:text-zinc-600 placeholder:opacity-50 rounded-full px-4 py-2 shadow-md focus:shadow-lg focus:shadow-rose-400 dark:shadow-md dark:shadow-purple-500 m-auto justify-center items-center"
                autoComplete="off"
                placeholder="Password"
                name="password"
                type="password"
                value={password}
                onChange={handlePasswordChange}
              />
              <br />
              <div className="grid m-auto">
                <div className="relative">
                  <div className="absolute -inset-5">
                    <div
                      className="w-full h-full max-w-sm mx-auto lg:mx-0 opacity-30 blur-lg bg-gradient-to-r from-yellow-400 via-pink-500 to-green-600">
                    </div>
                  </div>
                  <button
                    className="relative z-10 inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-white transition-all duration-200 bg-gray-900 border-2 border-transparent sm:w-auto rounded-xl font-pj hover:bg-pink-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                    role="button" type="submit"> 
                    Login
                  </button>

                  
                </div>
                <br />
                <a className="text-blue-400 underline cursor-pointer" href="https://github.com/plagzee/jyoti-grievance-portal">Read Manual</a>
              </div>
            </div>
            
          </form>
          
        </div>
      </div>
    </div>
  );
}


export default Home;