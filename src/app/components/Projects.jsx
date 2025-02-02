import Image from "next/image"
import project1 from '../assets/project-1.jpg'
import project2 from '../assets/project-2.png'
import project3 from '../assets/project-3.png'
import project4 from '../assets/project-4.jpg'
import project5 from '../assets/project-5.jpg'

const projectsData = [
    {
        id: 1,
        title: 'Real-Time Chat',
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero dolorum dolores voluptatum ullam commodi dicta aliquam eveniet fugiat, velit quo!',
        img: project1
    },
    {
        id: 2,
        title: 'E-Commerce Platform',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.',
        img: project2
    },
    {
        id: 3,
        title: 'Social Media App',
        desc: 'Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.',
        img: project3
    },
    {
        id: 4,
        title: 'Project Management Tool',
        desc: 'Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.',
        img: project4
    },
    {
        id: 5,
        title: 'Weather Forecast App',
        desc: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
        img: project5
    }
]


export default function Projects() {
    return (
        <>
            <div className="max-w-full mx-auto px-20">
                <div className="text-center">
                    <h2 className="text-6xl font-bold text-white ">
                        My <span className="text-orange-600">Projects</span>
                    </h2>     
                </div>
                <div className="my-10">
                    {projectsData.map((data, idx) =>{
                        return(
                            <div key={data.id} className={`flex ${ idx % 2 === 1 ? 'justify-start' : 'justify-end' } mt-10 `} >
                                <div key={data.id} className="flex  gap-10 bg-zinc-600 p-4 rounded-md">
                                    <div className="max-w-[500px]">
                                        <p className="w-24 flex items-center justify-center my-6 text-5xl p-4 rounded-full bg-zinc-500/70">{idx+1}</p>
                                        <h3 className="text-3xl font-bold mb-5">{data.title}</h3>
                                        <p className="text-lg text-zinc-400">{data.desc}</p>
                                    </div>
                                    <Image src={data.img}  alt={data.title} className="w-[600px] h-full" />
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>   
        </>
    )
}
