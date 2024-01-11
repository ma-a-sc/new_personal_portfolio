import React, {Dispatch, SetStateAction} from "react";
import {useState} from "react";
import {useCollapse} from "react-collapsed";
import ContactForm from "@/components/ContactForm.tsx";

interface ContactMeButtonProps {
    props: any
    func: () => void
    visible: boolean
}

const ContactMeButton: React.FC<ContactMeButtonProps> = ({props , func, visible}) => {
    if (visible) {
        return (
            <a
                className="hover:cursor-pointer inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gradient-to-r hover:animate-pulse hover:from-green-400 hover:to-yellow-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                {...props({onClick: func})}
            >
                Contact Me
            </a>
        )
    } else {
    return (
        <a
            className="opacity-0 inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
        >
        </a>
    )
}}

interface GreetingProps {
    submit: Dispatch<SetStateAction<boolean>>
    submitState: boolean
    failed: Dispatch<SetStateAction<boolean>>
    failedState: boolean
}

const Greeting: React.FC<GreetingProps> = ({submit, submitState, failed, failedState}) => {

    const [isExpanded, setExpanded] = useState(false);
    const {getCollapseProps, getToggleProps} = useCollapse({isExpanded});

    function handleClick() {
        setExpanded(!isExpanded)
    }

    return (
        <section className="w-full py-24 bg-gray-100 dark:bg-gray-800" id="hero">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <h1 className="text-5xl font-bold tracking-tighter sm:text-7xl ">Hey ho, I'm</h1>
                    <h1 className="text-5xl font-bold tracking-tighter sm:text-7xl text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-yellow-500 ">Mark</h1>
                    <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                        Backend developer specializing in Python and Go. But that is not the only thing I do. If you are
                        curious keep scrolling ... OR
                    </p>
                    {isExpanded ?
                        <ContactMeButton props={getToggleProps} func={handleClick} visible={false}/> :
                        <ContactMeButton props={getToggleProps} func={handleClick} visible={true}/>
                    }

                    <ContactForm func={submit} submitState={submitState} failed={failed} failedState={failedState} props={getCollapseProps} call={handleClick} ></ContactForm>
                </div>
            </div>
        </section>
    )
}

export default Greeting