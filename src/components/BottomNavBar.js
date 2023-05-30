"use client"
import Link from "next/link"
import { useState } from "react"

export default function BottomNavBar() {
    const [active, setActive] = useState(0)
    return (
        <div className="flex items-center gap-3 absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white rounded-3xl py-2 px-4">
            {[
                { name: 'Home', link: '/' },
                { name: 'Camera', link: '/scan' },
                // { name: 'Setting', link: '/upload' }
            ].map((ele, i) =>
                <NavBottom key={i} active={active === i} setActive={() => setActive(i)} ele={ele} />
            )}
            <a href="http://18.119.29.1:3000" className={`text-xs whitespace-nowrap rounded-3xl py-2 px-6 duration-300 ease-linear
            ${active ? 'font-bold text-[#202020] bg-[#02e18b]' : 'font-medium text-[#202020]'}`}>
                Upload
            </a>
        </div>
    )
}

export function NavBottom({ active, setActive, ele }) {
    return (
        <Link href={ele.link} className={`text-xs whitespace-nowrap rounded-3xl py-2 px-6 duration-300 ease-linear
            ${active ? 'font-bold text-[#202020] bg-[#02e18b]' : 'font-medium text-[#202020]'}`}
            onClick={setActive}>
            {ele.name}
        </Link>
    )
}
