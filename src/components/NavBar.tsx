import { FaGithub, FaMailBulk } from "react-icons/fa";
import { LuMenu } from "react-icons/lu";
import MenuNavBar from "./MenuNavBar";
import Button from "./Button";
import { useLocation } from "react-router-dom";

interface NavBarProps {
    setViewAside: () => void
}

const NavBar = ({ setViewAside }: NavBarProps) => {
    const location = useLocation();
    const currentPath = location.pathname

    return (
        <div className="border-white border-b flex flex-col px-5 pt-5
        xl:justify-between xl:flex-row
         ">
            <div className="flex flex-col gap-5">
                <div className="flex gap-3 items-center">
                    <LuMenu onClick={setViewAside} className="xl:hidden size-8 p-1 border border-white rounded-md font-extralight" />
                    <a href="https://github.com/alesl10" target="_blank"><FaGithub className="size-8" /></a>
                    <h2 className="font-semibold text-sm">López Alexis</h2>
                </div>
                <div className="flex justify-center gap-6">
                    <MenuNavBar link="" title="¿Quien soy?" isActive={currentPath == "/"} />
                    <MenuNavBar link="proyectos" title="Proyectos" isActive={currentPath == "/proyectos"} />
                    <MenuNavBar link="contacto" title="Contacto" isActive={currentPath == "/contacto"} />
                </div>
            </div>
            <div className="hidden xl:flex items-start gap-2">
                <Button color=""><a className="flex gap-2 items-center" href="mailto:lopezalexis499@gmail.com"><FaMailBulk /> {`< Lopezalexis499@gmail.com />`}</a></Button>
                <Button color=""><a href="https://www.linkedin.com/in/alexis-lopez-%C2%AB-desarrollador-front-end-%C2%BB-709965180/" target="_blank">Linkedin</a></Button>
                <Button color=""><a href="/CVAlexisLopez.pdf" download>CV</a></Button>
                <img src="/FotoPerfil.png" alt="avatar" className="size-9 bg-white rounded-full" />
            </div>
        </div>
    );
};

export default NavBar;