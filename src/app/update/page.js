"use client"
import axios from "axios";
import { useState } from "react";

export default function Update() {
    const [lyf, setLyf] = useState(0);

    const handleLogin = (e) => {
        axios.post(`${process.env.apiUrl}/update`,
            { lyf: parseInt(lyf), for: 'nextjs' })
            .then(res => alert(JSON.stringify(res.data)))
        e.preventDefault();
    }
    return (
        <div className="h-screen w-screen bg-[#02e18b] flex justify-center items-center">
            <div className="w-[calc(100%-64px)] max-w-[400px] px-6 py-10 rounded-2xl bg-[#666] text-[#202020]">
                <p className="heading mt-3">Update lyf </p>
                <form onSubmit={handleLogin} id="log_in">
                    <div className="my-4">
                        <label className="m-2 text-xs">For testing</label>
                        <input type="test" className="py-2 px-4 text-sm rounded-full w-11/12" inputMode="numeric"
                            value={lyf} onChange={(e) => setLyf(e.target.value)} />
                    </div>
                    <button type="submit" className="rounded-full py-2 px-6 text-sm bg-[#02e18b] font-medium mx-auto">Update</button>
                </form>
            </div>
        </div>
    )
}
