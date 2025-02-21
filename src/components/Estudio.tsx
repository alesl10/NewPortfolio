import { useState } from "react"
import Button from "./Button"
import { FaGraduationCap } from "react-icons/fa";
import { IoTimeOutline } from "react-icons/io5";


interface EstudioProps {
    titulo: string
    descripcion: string
    certificado: string
    link: string
    completo: boolean
}

const Estudio = ({ titulo, descripcion, certificado, link, completo }: EstudioProps) => {
    const [expanded, setExpanded] = useState(false)
    return (
        <div className="relative px-5 flex flex-col gap-2">
            <div className="size-4 bg-white absolute left-0 -translate-x-1/2 translate-1 top-0 rounded-full"></div>
            {
                completo ?
                    <div className="absolute right-0 flex items-center gap-2 text-green-300"><FaGraduationCap className="size-6 " /><span className="hidden xl:block">Terminado </span></div>
                    :
                    <div className="absolute right-0 flex items-center gap-2 text-yellow-300"><IoTimeOutline className="size-6 " /><span className="hidden xl:block">En progreso</span></div>
            }
            <h5 className="text-lg font-medium">{titulo}</h5>
            <div >
                <p >{expanded ? descripcion : descripcion.slice(0, 350)}...<span className="text-end w-full text-gray-300 cursor-context-menu" onClick={() => setExpanded(!expanded)}>{expanded ? 'Cerrar' : 'Ver mas'}</span></p>
            </div>
            <div className="flex gap-2">

                <Button color='bg-white text-black cursor-pointer hover:border-amber-300'><a href={certificado} target="_blank">Certificado</a></Button>
                <Button color='cursor-pointer hover:border-amber-300'><a href={link}>Saber mas</a></Button>
            </div>
        </div>
    )
}

export default Estudio