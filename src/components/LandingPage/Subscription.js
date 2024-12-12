"use client"

import Image from "next/image"
import arrow from "../../../public/images/arrow.png"
import { useState } from "react"
import { z } from "zod"

export default function Subscription() {
    const [isSubscribed, setIsSubscribed] = useState({})
    const pattern = z.string().min(1, {message: "Udfyld venligst dette felt."}).email({message: "Den indtastede e-mailadresse er ikke gyldig."})

    function handleSubscription(event) {
        event.preventDefault()

        const email = event.target.email.value
        const validate = pattern.safeParse(email)
        
        if(!validate.success) return setIsSubscribed({color: "text-red-500", text: validate.error.format()._errors[0]})

        fetch("https://dinmaegler.onrender.com/subscribers", {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json"
            },
            "body": JSON.stringify({
                "email": event.target.email.value
        })
        })
        .then(response => {
            if(!response.ok) return setIsSubscribed({color: "text-red-500", text: "Noget gik galt. Prøv venligst igen."})
                setIsSubscribed({color: "text-green-500", text: "Vi har registreret din tilmelding til nyhedsbrevet."})
        })
        .catch(err => console.error(err))
    }

    return (
        <form onSubmit={handleSubscription} className="newsletter bg-[#F8F8FB] flex justify-center items-center" noValidate>
            <p className="text-[1.5rem] font-semibold text-white mr-[10rem]">Tilmeld dig vores nyhedsbrev og <br /> hold dig opdateret på boligmarkedet</p>
            <div className="flex relative">
                <div className="flex flex-col">
                    <span className={`${isSubscribed.color}`}>{isSubscribed.text}</span>
                    <input name="email" className={`h-[4rem] w-[34rem] pl-[1rem] outline-none rounded ${isSubscribed.text === "Vi har registreret din tilmelding til nyhedsbrevet." ? "border-[2px] border-green-500" : ""}`} type="email" placeholder="Indtast din email adresse"/>
                </div>
                <button className="h-[4rem] pr-[1rem] absolute right-0 bottom-0 ">
                    <Image src={arrow} alt="subscription button"/>
                </button>
            </div>
        </form>
    )
}