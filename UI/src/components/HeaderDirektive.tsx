import React from "react";

interface HeaderDirektiveProps {
    call: (id: string) => void
    id: string
    label: string
}

const HeaderDirektive: React.FC<HeaderDirektiveProps> = ({call, id, label}) => {
    return <a className="text-sm font-medium hover:text-green-500 cursor-pointer" onClick={() => call(id)}>
        {label}
    </a>
}

export default HeaderDirektive