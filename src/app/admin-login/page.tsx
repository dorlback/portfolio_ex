"use client";
import { login } from "@/lib/action";
import { useState } from "react";

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        login(email, password)
    };

    return (
        <div className="flex justify-center items-center w-full h-full bg-[#CCE5CF]">
            <div className="flex space-y-6 flex-col p-8 items-center min-w-40 min-h-40 bg-stone-100 shadow-xl rounded-xl">
                <h1 className="text-2xl font-bold ">로그인</h1>
                <input className="p-2 border rounded-lg border-stone-300" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                <input
                    className="p-2 border rounded-lg border-stone-300"
                    placeholder="Password"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className="bg-green-400 text-white p-2 w-full rounded-xl shadow" onClick={handleLogin}>Login</button>
            </div>
        </div>
    );
}
