import { ReactNode } from "react"

interface ButtonProps {
    color: string
    children: ReactNode
    action?: () => void
}

const Button = ({ color, children, action }: ButtonProps) => {
    return (
        <button onClick={action} className={` cursor-pointer border  px-2 py-1 rounded-md ${color}`}>{children}</button>
    )
}

export default Button