"use client"
import { useState } from "react";

export default function Home() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    if (username === 'foo' || password === 'bar') {
      sessionStorage.setItem('username', username);
      navigate('/home')
      console.log(username);
      console.log(password);
    } else {
      alert('username or password not match')
    }
    e.preventDefault();
  }
  return (
    <div className="h-screen w-screen bg-[#02e18b] flex justify-center items-center">
      <div className="main px-6 py-10 rounded-2xl bg-[#666]">
        <p className="heading mt-3">Log In </p>
        <form onSubmit={handleLogin} id="log_in">
          <div className="my-4">
            <label className="m-2">User Name</label>
            <input type="test" className="py-2 px-4 rounded-full w-11/12" placeholder="Enter User Name"
              value={username} onChange={(event) => setUsername(event.target.value)} />
          </div>
          <div className="my-4">
            <label className="m-2" >Password</label>
            <input type="password" className="py-2 px-4 rounded-full w-11/12" placeholder="Password"
              value={password} onChange={(event) => setPassword(event.target.value)} />
          </div>
          <div className="my-4 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="m-2" for="exampleCheck1">Remember me</label>
          </div>
          <button type="submit" className="rounded-md py-2 px-4 bg-[#02e18b] text-[#202020] font-medium">Log In</button>
        </form>
      </div>
    </div>
  )
}
