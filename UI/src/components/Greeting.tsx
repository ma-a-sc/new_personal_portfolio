import React from "react";
import {useState} from "react";
import {useCollapse} from "react-collapsed";
import {Card, CardContent, CardHeader} from "@/components/ui/card.tsx";
import {Label} from "@/components/ui/label.tsx";
import {Input} from "@/components/ui/input.tsx";
import {Textarea} from "@/components/ui/textarea.tsx";
import {Button} from "@/components/ui/button.tsx";

const Greeting: React.FC = () => {

    const [ isExpanded, setExpanded ] = useState(false);
    const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });

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
                        Backend developer specializing in Python and Go. But that is not the only thing I do. If you are curious keep scrolling ... OR
                    </p>
                    {isExpanded ? <a
                        className="opacity-10 hover:cursor-pointer inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                        {...getToggleProps({onClick: handleClick})}
                    >
                        Contact Me
                    </a> : <a
                        className="hover:cursor-pointer inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gradient-to-r hover:animate-pulse hover:from-green-400 hover:to-yellow-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                        {...getToggleProps({onClick: handleClick})}
                    >
                        Contact Me
                    </a>
                    }

                    <Card className="w-full max-w-md mx-4 border-t-2 border-b-5 " {...getCollapseProps()}>
                        <div className={"container flex-row"}>
                            <button onClick={() => handleClick()} className={"mx-1 my-1 justify-end"}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     stroke-width="1.5"
                                     stroke="currentColor" className="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"/>
                                </svg>
                            </button>
                            <CardHeader>
                                <h2 className="text-xl font-bold">Contacting me!? I feel honored</h2>
                            </CardHeader>

                        </div>

                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="name">Name</Label>
                                <Input className="w-full" id="name" placeholder="Enter your name" required/>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input className="w-full" id="email" placeholder="Enter your email address" required
                                       type="email"/>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="message">Message</Label>
                                <Textarea className="w-full min-h-[100px]" id="message" placeholder="Enter your message here"
                                          required/>
                            </div>
                            <Button
                                className="w-full hover:animate-pulse hover:bg-gradient-to-r hover:from-green-400 hover:to-yellow-500">Submit</Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}

export default Greeting