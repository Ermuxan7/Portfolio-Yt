'use client'
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

const navLink = [
    {name: "Home", path: "#"},
    {name: "About Me", path: "#aboutMe"},
    // {name: "Projects", path: "#projects"},
    // {name: "Skill", path: "#skill"},
]

const navVariants = {
    open: {
        opacity: 1,
        x: 0,
        transition: {
            type: "tween",
            duration: 0.5,
            damping: 20,
            skifness: 200
        }
    },
    close: {
        opacity: 0,
        x: "100%",
        transition: {
            type: "tween",
            duration: 0.5,
            damping: 20,
            skifness: 200
        }
    }
}

export default function Navbar() {
    const [nav, setNav] = useState(false)

    const toggleNav = () =>{
        setNav(!nav)
    }

    return (
        <>
            <div className="flex items-center justify-center gap-2 max-w-[400px] mx-auto p-4 text-white/70">
                <ul className="hidden md:flex items-center gap-6">
                    {navLink.map((link, idx) =>{
                        return <li key={idx} className="text-lg font-semibold hover:text-white">
                            <Link href={link.path}>{link.name}</Link>
                        </li>
                    })}

                    <li className="text-lg font-semibold ">
                        <Link href="/" className="group relative hover:text-white">Contect Me
                            <div className="absolute h-[2px] w-1/4 bg-indigo-500 duration-200 ease-linear group-hover:w-full" />
                        </Link>
                    </li>
                    
                </ul>
            </div>  

            <div className="absolute top-2 right-2 md:hidden z-50 cursor-pointer">
                {!nav ? <IoMenu onClick={toggleNav} size={30}/> : <IoClose onClick={toggleNav} size={30}/>}
            </div>
            <motion.div 
                initial="close"
                animate={nav ? "open" : "close"}
                variants={navVariants}
                className="fixed md:hidden top-0 right-0 w-full h-full z-40 bg-gradient-to-b from-purple-700 via-purple-500 to-indigo-300 ">
                    <ul className="flex flex-col items-center gap-4 space-y-4 p-4 text-white/70 mt-20">
                        {navLink.map((link, idx) =>{
                            return <li key={idx} className="text-2xl font-semibold ">
                                <Link href={link.path}>{link.name}</Link>
                            </li>
                        })}
                    </ul>
            </motion.div>

        </>
    )
}
