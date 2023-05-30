"use client"
import axios from "axios";
import { useState } from "react";

export default function Upload() {
    const [lyf, setLyf] = useState(0);

    const submitForm = (e) => {
        // const file = e.target.files[0];
        console.log(e.target.files[0]);
        // const formData = new FormData();
        // formData.append("file", file);
        // axios.post(`http://18.119.29.1:3000/`, file)
        //     .then(res => alert(JSON.stringify(res.data)))
        e.preventDefault();
    }
    const handleUpload = (e) => {
        console.log(e);
        const formData = new FormData();
        formData.append("document", e);
        axios.post(`http://18.119.29.1:3000/upload`, formData)
            .then(res => alert(JSON.stringify(res.data)))
    }
    return (
        <div className="h-screen w-screen bg-[#02e18b] flex justify-center items-center">
            <div className="w-[calc(100%-64px)] max-w-[400px] px-6 py-10 rounded-2xl bg-[#666] text-[#202020]">
                <p className="heading mt-3">Upload a file</p>
                <form onSubmit={submitForm} id="log_in">
                    <div className="my-4">
                        <label className="m-2 text-xs">For testing</label>
                        <input type="file" className="py-2 px-4 text-sm rounded-full w-11/12" onChange={(e) => handleUpload(e.target.files[0])} />
                    </div>
                    <button type="submit" className="rounded-full py-2 px-6 text-sm bg-[#02e18b] font-medium mx-auto">Upload</button>
                </form>
            </div>
        </div>
    )
}
