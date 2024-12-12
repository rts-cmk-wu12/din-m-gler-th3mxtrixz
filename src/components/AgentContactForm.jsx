"use client"

import { useState } from "react";
import { z } from "zod";

export default function AgentContactForm() {
    const [contact, setContact ] = useState({})
    const pattern = z.object (
        {
            email: z.string().min(1, {message: "Feltet er ikke udfyldt korrekt"}).email({message: "Ugyldig email"}),
            name: z.string().min(1, {message: "Feltet er ikke udfyldt korrekt"}),
            title: z.string().min(1, {message: "Feltet er ikke udfyldt korrekt"}),
            message: z.string().min(1, {message: "Feltet er ikke udfyldt korrekt"})
        }
    )

    function handleSubmit(event) {
        event.preventDefault()

        const email = event.target.email.value
        const name = event.target.name.value
        const title = event.target.title.value
        const message = event.target.message.value
    
        const validate = pattern.safeParse({email, name, title, message})
        console.log("validate", validate.error.format())
    
        if(!validate.success) return setContact({color: "text-red-500", text: validate.error.format()})
    }

    return (
            <form onSubmit={handleSubmit} className="flex flex-col w-full" noValidate>
                <div className="w-[100%] flex flex-row justify-between">
                    <div className="flex flex-col w-[48%]">
                        <label className="my-[0.5rem] font-semibold" type="name">Navn</label>
                        <span className={`${contact.color}`}>{contact.text?.name?._errors[0]}</span>
                        <input name="name" className={`${contact.text?.name?._errors[0] === "Feltet er ikke udfyldt korrekt" ? "border-red-500 border-2" : ""} bg-white border w-full border-slate-300 rounded-[0.2rem] py-4 pl-2 pr-3 shadow-sm focus:ring-orange-500`} type="text" placeholder="Indtast navn"/>
                    </div>
                        <div className="flex flex-col w-[48%]">
                            <label className="my-[0.5rem] font-semibold" type="email">Email</label>
                            <span className={`${contact.color}`}>{contact.text?.name?._errors[0]}</span>
                            <input name="email" className={`${contact.text?.email?._errors[0] === "Feltet er ikke udfyldt korrekt" ? "border-red-500 border-2" : ""} bg-white w-full border border-slate-300 rounded-[.02rem] py-4 pl-2 pr-3 shadow-sm`} type="email" placeholder="Indtast email"/>
                        </div>
                </div>
                <div className="flex flex-col">
                    <label className="my-[0.5rem] font-semibold">Emne</label>
                    <span className={`${contact.color}`}>{contact.text?.name?._errors[0]}</span>
                    <input name="title" className={` ${contact.text?.title?._errors[0] === "Feltet er ikke udfyldt korrekt" ? "border-red-500 border-2" : ""} bg-white w-full border border-slate-300 rounded-[0.2rem] py-4 pl-2 pr-3 shadow-sm`} type="text" placeholder="Hvad drejer din henvendelse sig om?"/>
                </div>
            <div className="flex flex-col">
                <label className="my-[0.5rem] font-semibold">Besked</label>
                <span className={`${contact.color}`}>{contact.text?.message?._errors[0]}</span>
                <textarea name="message" className={` ${contact.text?.message?._errors[0] === "Feltet er ikke udfyldt korrekt" ? "border-red-500 border-2" : ""} resize-none bg-white w-full h-[14rem] border border-slate-300 rounded-[.2em] py-3 pl-2 pr-3 shadow-sm`} type="text" placeholder="Skriv din besked her.."></textarea>
            </div>
                <button type="submit" className="flex justify-center items-center bg-[#162A41] text-white rounded-[3px] h-[3.5rem] w-[10rem] mt-[1.5rem]">Send besked</button>
            </form>
    )
}