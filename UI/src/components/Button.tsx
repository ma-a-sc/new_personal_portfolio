import React from 'react'

interface CustomButtonProps {
    label: string
}

const CustomButton: React.FC<CustomButtonProps> = ({label}) => {
    return (
        <>
            <span>{label}</span>
        </>
    )
}

export default CustomButton