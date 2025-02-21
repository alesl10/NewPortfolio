import Skills from "../components/Skills"
import { habilidades } from "../Mocks/Skills"

const Tecnologias = () => {
    const skillsBack = habilidades.filter(h => h.dev == 'back')
    const skillsFront = habilidades.filter(h => h.dev == 'front')

    return (
        <section>
            <span className="text-2xl font-semibold neon ">{`<Tecnologias />`}</span>
            <div className="border border-white mt-2 flex p-2 flex-col gap-3 
            xl:gap-0 xl:flex-row
            ">
                <div className=" xl:w-1/2 ">
                    <h5 className="text-center xl:text-start text-xl font-semibold">Front-End</h5>
                    <Skills skill={skillsFront} />
                </div>
                <div className=" xl:w-1/2 ">
                    <h5 className="text-center xl:text-start text-xl font-semibold">Back-End</h5>
                    <Skills skill={skillsBack} />
                </div>
            </div>
        </section>
    )
}

export default Tecnologias