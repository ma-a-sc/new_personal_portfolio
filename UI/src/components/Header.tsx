import React, {Dispatch, SetStateAction} from "react";
import CodeIcon from "./CodeIcon.tsx"
import HeaderDirektive from "@/components/HeaderDirektive.tsx";
import {useState, useEffect} from "react";
import { Button } from "@/components/ui/button"
import {useCollapse} from "react-collapsed";

function XIcon(props:any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M18 6 6 18"/>
            <path d="m6 6 12 12"/>
        </svg>
    )
}

function MenuIcon(props:any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
    )
}

interface MenuButtonProps{
    state: boolean
    toggle: any
    click: Dispatch<SetStateAction<boolean>>
}

const MenuButton: React.FC<MenuButtonProps> = ({state,toggle, click}) => {

    return (<>
            {
                state ? <Button {...toggle({onClick: () => {click(!state)}})} className="rounded-full" size="icon" variant="plain">
                        <XIcon className="h-6 w-6" />
                        <span className="sr-only">Toggle navigation menu</span>
                    </Button> :
                    <Button {...toggle({onClick: () => {click(!state)}})} className="rounded-full" size="icon" variant="plain">
                        <MenuIcon className="h-6 w-6" />
                        <span className="sr-only">Toggle navigation menu</span>
                    </Button>
            }
        </>
        )

}

interface MobileMenuProps {
    props: any
}

const MobileMenu: React.FC<MobileMenuProps> = ({props}) => {
    const handleClickScroll = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({behavior: 'smooth'});
        }
    };
    return <nav {...props()} className=" sm:ml-auto flex gap-4 justify-center mx-auto my-6">
        <HeaderDirektive call={handleClickScroll} id={"about"} label={"About"}/>
        <HeaderDirektive call={handleClickScroll} id={"skills"} label={"Skills"}/>
        <HeaderDirektive call={handleClickScroll} id={"projects"} label={"Projects"}/>
        <HeaderDirektive call={handleClickScroll} id={"experience"} label={"Experience"}/>
        <HeaderDirektive call={handleClickScroll} id={"education"} label={"Education"}/>
        <HeaderDirektive call={handleClickScroll} id={"contact"} label={"Contact"}/>
    </nav>
}


const Header: React.FC = () => {
    const handleClickScroll = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({behavior: 'smooth'});
        }
    };
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const isAbove700 = () => {
        return windowWidth > 700
    }
    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        // cleanup this component
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const [isExpanded, setMenuShown] = useState(false)

    const {getCollapseProps, getToggleProps} = useCollapse({isExpanded})

    return (
        <header className="sticky top-0 left-0 w-full bg-white">
            <div className="px-4 lg:px-6 flex items-center justify-between ml-4 my-4">
                <div className="flex items-center">
                    <CodeIcon props="h-6 w-6"/>
                    <span className="text-xl font-bold ml-2">Mark Scharmann</span>
                </div>
                {
                    isAbove700() ? <nav className=" sm:ml-auto flex gap-4">
                        <HeaderDirektive call={handleClickScroll} id={"about"} label={"About"}/>
                        <HeaderDirektive call={handleClickScroll} id={"skills"} label={"Skills"}/>
                        <HeaderDirektive call={handleClickScroll} id={"projects"} label={"Projects"}/>
                        <HeaderDirektive call={handleClickScroll} id={"experience"} label={"Experience"}/>
                        <HeaderDirektive call={handleClickScroll} id={"education"} label={"Education"}/>
                        <HeaderDirektive call={handleClickScroll} id={"contact"} label={"Contact"}/>
                    </nav> : <></>
                }
                {
                    isAbove700() ? <></> :
                        <MenuButton state={isExpanded} click={setMenuShown} toggle={getToggleProps}></MenuButton>
                }


            </div>
            {
                isAbove700() ? <></>  : <MobileMenu props={getCollapseProps}></MobileMenu>
            }

        </header>

    )
}

export default Header