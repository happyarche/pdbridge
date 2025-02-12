import React from "react"

import { IconProps } from "@/types/icon"

const Hamburger: React.FC<IconProps> = ({
    size = "20",
    color = "black",
    ...attributes
}) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...attributes}
        >
            <rect y="4" width="24" height="2" fill={color} />
            <rect y="11" width="24" height="2" fill={color} />
            <rect y="18" width="24" height="2" fill={color} />
        </svg>
    )
}

export default Hamburger
