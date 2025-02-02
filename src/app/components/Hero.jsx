'use client'
import { motion } from "framer-motion";
import nuts from '../assets/Nut_Bolt-removebg-preview.png'
import lightning from '../assets/Lightning-removebg-preview.png'
import Image from "next/image";


export default function Hero() {
    return (
        <>
            <div className="relative h-lvh overflow-clip py-14 mt-10 bg-gradient-to-b from-black via-purple-500 to-indigo-500 ">
                <div className="absolute w-[3000px] h-[1300px] rounded-[50%] top-[550px] left-[50%] -translate-x-1/2   bg-gradient-to-b from-zinc-900 to-zinc-600 shadow-2xl" />
                <div className="relative">
                    <div className="mx-auto max-w-[500px] text-center ">
                        <h1 className="text-zinc-300 text-8xl font-bold">
                            Hi I'm <span className="text-orange-400">Ermuxan</span>
                        </h1>
                        <p className="text-md text-gray-300 mt-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam rem blanditiis porro minus eaque molestias
                        </p>
                    </div>
                </div>
                <motion.div
                className="absolute top-1/3 left-44"
                    drag
                >
                    <Image src={nuts} alt="nuts" className="size-56 -z-10 cursor-pointer" draggable='false' />
                </motion.div>
                <motion.div
                className="absolute top-1/2 right-44"
                    drag
                >
                    <Image src={lightning} alt="nuts" className="size-72 -z-10 cursor-pointer" draggable='false' />
                </motion.div>
            </div>


            

        </>
    )
}
