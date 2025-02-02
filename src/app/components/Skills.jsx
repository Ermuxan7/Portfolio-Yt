import React from "react";
import { IoLogoCss3, IoLogoHtml5, IoLogoJavascript, IoLogoNodejs, IoLogoReact } from "react-icons/io5";

const skillData = [
    { icon: <IoLogoHtml5 />, name: 'Html' },
    { icon: <IoLogoCss3 />, name: 'Css' },
    { icon: <IoLogoJavascript />, name: 'Javascript' },
    { icon: <IoLogoReact />, name: 'React' },
    { icon: <IoLogoNodejs />, name: 'Node Js' },
]

export default function Skills() {
    return (
        <>
            <div className="max-w-full mx-auto px-20 my-20">
                <h1 className="text-6xl text-center font-bold text-white/70">My <span className="text-indigo-600">Skills</span></h1>

                <div className="grid grid-cols-3 place-items-center gap-8 mt-12">
                    {skillData.map(data =>{
                        return (
                            <div className="flex flex-col items-center justify-center p-5 bg-zinc-500/70 w-60  rounded-md text-2xl transition hover:bg-zinc-500">
                                <p className="text-center text-9xl">{data.icon}</p>
                                <p>{data.name}</p>
                            </div>
                        )
                    })}
                    
                </div>
            </div>
        </>
)}
