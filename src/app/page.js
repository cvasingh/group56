"use client"
import axios from "axios";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    axios.post(`${process.env.apiUrl}/88`,
      { email, password })
      .then(res => console.log(res))
    e.preventDefault();
  }
  return (
    <div className="h-screen w-screen bg-[#02e18b] flex justify-center items-center">
      <div className="w-[calc(100%-64px)] max-w-[400px] px-6 py-10 rounded-2xl bg-[#666] text-[#202020]">
        <p className="heading mt-3">Log In</p>
        <form onSubmit={handleLogin}>
          <div className="my-4">
            <label className="m-2">Email</label>
            <input type="text" className="py-2 px-4 text-sm rounded-full w-11/12" placeholder="Enter Email"
              value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="my-4">
            <label className="m-2" >Password</label>
            <input type="password" className="py-2 px-4 text-sm rounded-full w-11/12" placeholder="Password"
              value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="my-4 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="m-2" htmlFor="exampleCheck1">Remember me</label>
          </div>
          <button type="submit" className="rounded-full py-2 px-6 text-sm bg-[#02e18b] text-[#202020] font-medium">Log In</button>
        </form>
      </div>
    </div>
  )
}
