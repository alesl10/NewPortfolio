import { Link } from "react-router-dom"

interface MenuNavBarProps {
    title: string
    isActive: boolean
    link: string
}

const MenuNavBar = ({ title, isActive, link }: MenuNavBarProps) => {
    return (
        <Link to={`/${link}`} className={`${isActive ? 'border-b-2 font-semibold border-red-500' : ' cursor-pointer p-1 '}`}>{title}</Link>
    )
}

export default MenuNavBar