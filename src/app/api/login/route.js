import { NextResponse } from "next/server";
const jwt = require("jsonwebtoken");

export async function POST(request) {
    
    if (request.method === "POST") {
        const data = await request.json();
        
        if (!data.username) {
            return NextResponse.json({ message: "Username is required", success: false }, { status: 400 });
        }
        if (!data.password) {
            return NextResponse.json({ message: "Password is required" , success: false }, { status: 400 });
        }

        if (data.username == 'keniko' && data.password==`${process.env.PASSWORD}`) {
            
            // Make a jWT token
            const token = await jwt.sign(
                { username: data.username, login: true },
                process.env.JWT_SIGNATURE
            );

            // add it to localstorage
            // localStorage is not defined error fix
            // localStorage.setItem("token", token);
            
            return NextResponse.json({ message: "Login successful", success: true, token: token }, { status: 200 });
        } else {
            return NextResponse.json({ message: "Invalid credentials", success: false }, { status: 401 });
        }
    }

}