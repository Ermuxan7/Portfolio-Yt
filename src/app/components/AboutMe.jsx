import React from "react";

export default function AboutMe() {
    return (
        <>
            <div className="w-full mb-20">
                
                <div className="relative max-w-[500px] mx-auto">
                    <h1 className="text-8xl font-bold ">About <span className="text-orange-400">Me</span></h1>
                </div>
                <div className="mx-auto max-w-[1200px] my-5 grid grid-cols-3 gap-4 px-10 text-xl">
                    <div className="col-span-2 h-36 p-6 rounded-md bg-red-500">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque saepe ratione consequatur?</p>
                    </div>
                    <div className="col-span-1 h-36 p-6 rounded-md bg-indigo-500"> 
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>

                    </div>
                    <div className="col-span-1 h-36 p-6 rounded-md bg-red-500">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    </div>
                    <div className="col-span-2 h-36 p-6 rounded-md bg-indigo-500"> 
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque saepe ratione consequatur?</p>
                        
                    </div>
                </div>
            </div>

        </>
)}
