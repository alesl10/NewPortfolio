import { IoMdCodeDownload } from "react-icons/io";

const About = () => {
    return (
        <section className="flex justify-between">
            <div>
                <span className="text-2xl font-semibold">Hey, que tal ? </span>
                <div className="border border-white px-5 mt-2 py-2 rounded-md flex items-end gap-3">
                    <div>
                        <p>Mi nombre es Alexis,</p>
                        <h2><span>soy</span> <span className="text-blue-400 font-medium text-lg"> Desarrollador Web </span></h2>
                        <h4>Experiencia: +2 años</h4>
                    </div>
                    <div className="group flex flex-col items-center">
                        <span className="text-center opacity-0 group-hover:opacity-100 transition-all duration-150">Descargar CV</span>
                        <a href="/CVAlexisLopez.pdf" download><IoMdCodeDownload className="size-10 cursor-pointer animate-bounce animate-infinite animate-duration-500 group-hover:animate-none transition-all" /></a>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default About