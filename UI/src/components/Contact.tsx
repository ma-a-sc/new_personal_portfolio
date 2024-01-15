import React, {Dispatch, SetStateAction, useState} from "react";
import {Card, CardContent, CardHeader} from "@/components/ui/card.tsx";
import {Label} from "@/components/ui/label.tsx";
import {Input} from "@/components/ui/input.tsx";
import {Textarea} from "@/components/ui/textarea.tsx";
import {Button} from "@/components/ui/button.tsx";
import doContactPost from "@/API/ContactFormPost.ts";

interface ContactProps{
    submit: Dispatch<SetStateAction<boolean>>
    submitState: boolean
    failed: Dispatch<SetStateAction<boolean>>
    failedState: boolean
}

const Contact:React.FC<ContactProps> = ({submit, submitState, failed, failedState}) => {
    const [message, setMessage] = useState("")
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")

    const [failMessage, setFailMessage] = useState("")

    function sendMessage(name: string, email: string, message: string) {
        if (name === "") {
            failed(true)
            submit(false)
            setFailMessage("Please provide a Name!")
            return;
        }
        if (email === "") {
            failed(true)
            submit(false)
            setFailMessage("Please provide an email address!")
            return;
        }
        if (message === "") {
            failed(true)
            submit(false)
            setFailMessage("Please provide a message!")
            return;
        }
        const response = doContactPost(name, email, message)
        response.then((response) => {
            if (!response.ok){
                failed(true)
                submit(false)
                setFailMessage("Please provide a valid email.")
            }
            console.log(response)
        });
        submit(true)
        failed(false)
        console.log(submitState)
    }

    return (
        <section className="w-full py-24 bg-gray-100 dark:bg-gray-800" id="contact">
            <div className="container grid grid-cols-2">
                <div>
                    <div className="container px-4 md:px-6">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-12">Contact</h2>
                        <p className="text-sm my-5 text-gray-500 dark:text-gray-400">You can find me on Linkedin, Github or directly contact me via the form on the right. Your choice!  I just included HackerRank for references.</p>
                        <a className="text-blue-600 hover:text-green-500" href="https://www.linkedin.com/in/mark-scharmann-9202b92a5/" target="_blank">
                            LinkedIn
                        </a>
                        <a className="text-blue-600 hover:text-green-500 ml-4" href="https://github.com/ma-a-sc" target="_blank">
                            GitHub
                        </a>
                        <a className="text-blue-600 hover:text-green-500 ml-4"
                           href="https://www.hackerrank.com/profile/m98_hr"
                           target="_blank">
                            HackerRank
                        </a>
                    </div>
                </div>
                <div>
                    <Card className="w-full max-w-md mx-4 border-t-2 border-b-5 ">
                        <div className={"container flex-row"}>
                            <CardHeader>
                            </CardHeader>
                        </div>

                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="name">Name</Label>
                                <Input onChange={(e ) => {setName(e.currentTarget.value)}} className="w-full" id="name" placeholder="Enter your name" required/>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input onChange={(e ) => {setEmail(e.currentTarget.value)}} className="w-full" id="email" placeholder="Enter your email address" required
                                       type="email"/>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="message">Message</Label>
                                <Textarea onChange={(e ) => {setMessage(e.currentTarget.value)}} className="w-full min-h-[100px]" id="message"
                                          placeholder="Enter your message here"
                                          required/>
                            </div>
                            {
                                failedState ? <div
                                        className="w-full text-red-400 text-center text-sm">{failMessage}
                                    </div> :
                                    <></>
                            }
                            {
                                submitState ? <Button
                                    className="w-full">Contact message has been sent.
                                </Button> : <Button
                                    onClick={() => sendMessage(name, email, message)}
                                    className="w-full hover:animate-pulse hover:bg-gradient-to-r hover:from-green-400 hover:to-yellow-500">Submit
                                </Button>
                            }

                             </CardContent>
                    </Card>
                </div>
            </div>

        </section>
    )
}

export default Contact