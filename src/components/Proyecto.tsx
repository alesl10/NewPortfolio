import { useState } from "react"
import Button from "./Button"

interface ProyectoProps {
    titulo: string
    descripcion: string
    link?: string
    imagen: string
    repositorio?: string
}


const Proyecto = ({ titulo, descripcion, link, imagen, repositorio }: ProyectoProps) => {
    const [expanded, setExpanded] = useState(false)


    return (
        <>
            {
                expanded && (
                    <div
                        className={`fixed top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center z-50 transition-opacity duration-500 ${expanded ? 'opacity-100' : 'opacity-0'
                            }`}
                        onClick={() => setExpanded(false)}
                    >
                        <div
                            className={`bg-white border-2 text-black border-white  rounded-md max-w-3xl relative transition-all duration-500 transform ${expanded ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
                                }`}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img src={imagen} alt="imagen del proyecto" className="max-w-full h-auto" />
                            <p className="p-2">{descripcion}</p>
                            <div className="flex gap-2 m-2">
                                <Button color="font-semibold hover:bg-gray-200 "><a href={link} target="_blank">Link</a></Button>
                                <Button color="font-semibold hover:bg-gray-200 "><a href={repositorio} target="_blank">Repositorio</a></Button>
                            </div>
                        </div>
                    </div>
                )
            }
            <div className="flex flex-col gap-2 ">
                <h2 className="neon-yellow text-gray-900 cursor-context-menu text-2xl font-semibold">{titulo}</h2>
                <div className="flex flex-col items-center
                xl:flex-row xl:justify-center xl:items-end gap-5">
                    <img onClick={() => setExpanded(true)} src={imagen} alt="imagen del proyecyo" className="rounded-lg shadow-xs shadow-blue-300 hover:saturate-150 cursor-pointer object-contain w-1/2" />
                    <div className="flex flex-col gap-1">
                        <p className="">{descripcion.slice(0, 150)}...</p>
                        <Button action={() => setExpanded(true)} color="bg-gray-100 text-black hover:bg-gray-300 hover:border-yellow-400">Ver mas</Button>
                    </div>
                </div>
                <div className="border-b-2 border-blue-300 mx-15 my-3"></div>
            </div>
        </>
    )
}

export default Proyecto