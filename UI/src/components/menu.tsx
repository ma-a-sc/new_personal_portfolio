import CustomButton from "./Button.tsx";
import React, {useState} from "react";



const Menu: React.FC = () => {

    return (
        <>
            <ul>
                <li>
                    <CustomButton label={"Projects"}></CustomButton>
                </li>
                <li>
                    <CustomButton label={"About Me"}></CustomButton>
                </li>
                <li>
                    <CustomButton label={"Contact"}></CustomButton>
                </li>
            </ul>

        </>
    )
}

export default Menu