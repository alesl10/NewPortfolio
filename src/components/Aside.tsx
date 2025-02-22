import { FaWhatsapp, FaLinkedin, FaMapMarker } from "react-icons/fa";

const Aside = ({ viewAside }: { viewAside: boolean }) => {

    return (
        <aside className={`${viewAside ? 'flex' : 'hidden'}  col-span-2 xl:flex flex-col gap-2`}>
            <div className="border-white border bg-white rounded-full w-60 h-60 overflow-hidden mx-auto">
                <img src="/FotoPerfil.png" alt="Foto perfil" className="w-full h-full object-cover rounded-full" />
            </div>
            <div>
                <h2 className="text-3xl font-semibold">Alexis López</h2>
                <span className="text-xl font-extralight text-gray-200">alesl10 - he/him</span>
            </div>
            <p className="text-md">Soy desarrollador web Front-End que ama la tecnologia y busca estar en constante contacto y aprendizaje con este mundo.</p>
            <button className="group flex items-center gap-2 justify-center w-full text-center p-1 border border-white cursor-pointer rounded-md bg-gray-600/80 hover:saturate-150 text-white">
                <a href="https://wa.me/1137623836" target="_blank">Contactame</a>
                <FaWhatsapp className={`size-5   text-green-500 hidden group-hover:block z-10 `} />
            </button>

            <div className="flex flex-col gap-2">
                <span className="flex items-center gap-1"><FaMapMarker className="size-6" /> Buenos Aires, Argentina</span>
                <a href="https://www.linkedin.com/in/alexis-lopez-%C2%AB-desarrollador-front-end-%C2%BB-709965180/" target="_blank"><span className="flex items-center gap-1"><FaLinkedin className="size-6" /> in/alexis-lopez-desarrollador</span></a>
            </div>
            <span className="text-xl font-semibold neon">Herramientas </span>
            <ul className="list-disc " >
                <li >Postman</li>
                <li>DBeaver</li>
                <li>SQL Management</li>
                <li>Git & GitHub</li>
            </ul>
            <span className="text-xl font-semibold neon">Habilidades </span>
            <ul className="list-disc " >
                <li >{`Metodologias agiles (SCRUM)`}</li>
                <li>Trabajo en equipo</li>
                <li>Responsable</li>
                <li>Pensamiento critico</li>
                <li>Aprendizaje continuo</li>
                <li >Creativo</li>
            </ul>
        </aside>
    )
}

export default Aside