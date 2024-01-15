/**
 * v0 by Vercel.
 * @see https://v0.dev/t/rbVRdDj7wuD
 */
import { CardHeader, CardContent, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import React, {Dispatch, SetStateAction, useState} from "react";
import doContactPost from "@/API/ContactFormPost.ts";

interface ContactFormProps{
    props: any
    call: () => void
    func: Dispatch<SetStateAction<boolean>>
    submitState: boolean
    failed: Dispatch<SetStateAction<boolean>>
    failedState: boolean
}

 const ContactForm:React.FC<ContactFormProps> = ({props, call, func, submitState, failed, failedState}) => {
    const [message, setMessage] = useState("")
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")

    const [failMessage, setFailMessage] = useState("")

    function sendMessage(name: string, email: string, message: string) {
        if (name === "") {
            failed(true)
            func(false)
            setFailMessage("Please provide a Name!")
            return;
        }
        if (email === "") {
            failed(true)
            func(false)
            setFailMessage("Please provide an email address!")
            return;
        }
        if (message === "") {
            failed(true)
            func(false)
            setFailMessage("Please provide a message!")
            return;
        }
        const response = doContactPost(name, email, message)
        response.then((response) => {
            if (!response.ok){
                failed(true)
                func(false)
                setFailMessage("Please provide a valid email.")
            }
            console.log(response)
        });
        func(true)
        failed(false)
        console.log(submitState)
    }

    return (
        <>
         <Card className="w-full max-w-md mx-4 border-t-2 border-b-5 " {...props()}>
             <div className={"container flex-row"}>
                 <button onClick={call} className={"mx-1 my-1 justify-end"}>
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                          stroke="currentColor" className="w-6 h-6">
                         <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12"/>
                     </svg>
                 </button>
                 <CardHeader>
                     <h2 className="text-xl font-bold">Contacting me immediately!? I feel honored</h2>
                 </CardHeader>

             </div>

             <CardContent className="space-y-4">
                 <div className="space-y-2">
                     <Label htmlFor="name" >Name</Label>
                     <Input onChange={(e ) => {setName(e.currentTarget.value)}} className="w-full" id="name" placeholder="Enter your name" required/>
                 </div>
                 <div className="space-y-2">
                     <Label htmlFor="email">Email</Label>
                     <Input onChange={(e ) => {setEmail(e.currentTarget.value)}}  className="w-full" id="email" placeholder="Enter your email address" required
                               type="email"/>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea onChange={(e ) => {setMessage(e.currentTarget.value)}} className="w-full min-h-[100px]" id="message" placeholder="Enter your message here"
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
        </>
    )
 }

export default ContactForm

