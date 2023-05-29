"use client"
import axios from "axios";
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    axios.get(`${process.env.apiUrl}/${email}?password=${password}`)
      .then(res => alert(JSON.stringify(res.data)))
    e.preventDefault();
  }
  const handleSingup = (e) => {
    axios.post(`${process.env.apiUrl}/${email}`,
      { name, email, password })
      .then(res => alert(JSON.stringify(res.data)))
    e.preventDefault();
  }
  return (
    <div className="h-screen w-screen bg-[#02e18b] flex justify-center items-center">
      <div className="w-[calc(100%-64px)] max-w-[400px] px-6 py-10 rounded-2xl bg-[#666] text-[#202020]">
        {name === null
          ? <form onSubmit={handleLogin}>
            <p className="heading mt-3">Log In</p>
            <div className="my-4">
              <label className="m-2">Email</label>
              <input type="text" className="py-2 px-4 text-sm rounded-full w-11/12" placeholder="Enter Email"
                value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="my-4">
              <label className="m-2" >Password</label>
              <input type="password" className="py-2 px-4 text-sm rounded-full w-11/12" placeholder="Password"
                value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <p className="m-2 text-right text-[#02e18b] text-sm font-medium" onClick={() => setName('')}>Sign Up</p>
            <button type="submit" className="rounded-full py-2 px-6 text-sm bg-[#02e18b] text-[#202020] font-medium">Log In</button>
          </form>
          : <form onSubmit={handleSingup}>
            <p className="heading mt-3">Sing Up</p>
            <div className="my-4">
              <label className="m-2">Name</label>
              <input type="text" className="py-2 px-4 text-sm rounded-full w-11/12" placeholder="Enter Name"
                value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div className="my-4">
              <label className="m-2">Email</label>
              <input type="text" className="py-2 px-4 text-sm rounded-full w-11/12" placeholder="Enter Email"
                value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="my-4">
              <label className="m-2" >Password</label>
              <input type="password" className="py-2 px-4 text-sm rounded-full w-11/12" placeholder="Password"
                value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <p className="m-2 text-right text-[#02e18b] text-sm font-medium" onClick={() => setName(null)}>Log In</p>
            <button type="submit" className="rounded-full py-2 px-6 text-sm bg-[#02e18b] text-[#202020] font-medium">Sing Up</button>
          </form>}
      </div>
    </div>
  )
}
