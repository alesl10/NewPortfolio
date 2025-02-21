
interface Skill {
    name: string
    icon: string
    dev: string
}

interface SkillsProps {
    skill: Skill[]
}

const Skills = ({ skill }: SkillsProps) => {
    return (
        <div className="grid grid-cols-4 gap-4 justify-start p-2">
            {skill.map(s => (
                <div key={s.name} className="relative flex flex-col items-center group">
                    <span className="absolute bottom-full mb-2 w-max px-2 py-1 text-xs text-white bg-gray-800 rounded opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        {s.name}
                    </span>

                    <div className="group">
                        <img
                            className="hover:animate-spin hover:animate-once hover:animate-duration-300 hover:scale-110 size-12 object-contain transition-transform"
                            src={s.icon}
                            alt={`icon ${s.name}`}
                        />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Skills