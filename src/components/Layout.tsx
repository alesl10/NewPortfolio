import { Outlet } from "react-router-dom"
import NavBar from "./NavBar"
import Footer from "./Footer"
import Aside from "../components/Aside"
import { useState } from "react"


const Layout = () => {
    const [viewAside, setViewAside] = useState<boolean>(false)


    return (
        <main className="h-screen flex flex-col justify-between">
            <NavBar setViewAside={() => setViewAside(!viewAside)} />
            <div className=" 
             p-3 
             xl:p-10 xl:mx-36 xl:grid xl:grid-cols-7 xl:gap-10 ">
                <Aside viewAside={viewAside} />
                <div className="col-span-5 flex flex-col gap-3" >
                    <Outlet />
                </div>
            </div>
            <Footer />
        </main>
    )
}

export default Layout