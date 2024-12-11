"use client"

import login from "@/actions/login"
import { redirect } from "next/navigation"
import { useActionState, useEffect } from "react"

export default function LogIn() {
    const [formState, formAction] = useActionState(login, null)

    useEffect(function() {
		if (!formState) return
		if (formState?.success !== true ) return
		redirect("/")
	}, [formState])
    
    return (
        <section>
            <div className="banner2 flex justify-center items-center flex-col text-white">
                <h2 className="font-semibold text-[1.5rem]">Account Login</h2>
                <div className="flex flex-row justify-between w-[5%] mt-[1rem]">
                    <a href="/" className="hover:text-orange-400">Home</a>
                    <span>|</span>
                    <h3 className="hover:text-orange-400">Login</h3>
                </div>
            </div>
            <div className="flex items-center justify-center my-[5rem]">
                <div className="w-[40%] p-[1.5rem] bg-white border-[#D3DEE8] border-[1.95px] shadow px-[10rem] py-[3rem]">
                    <h2 className="font-semibold text-center text-[1.3rem] mb-[1rem]">Log ind på din konto</h2>
                <form action={formAction}>
                    <div className="mb-[1rem]">
                        <label className="font-semibold flex flex-col text-gray-700">Email<span className="text-red-500 font-bold">{formState?.identifier?._errors.map(error => error)}</span></label>
                        <input name="identifier" type="email" placeholder="Email" className="w-full border-[#D3DEE8] border-[1.95px] h-[3rem] p-[0.5rem] mt-[0.5rem]"/>
                    </div>
                    <div className="mb-[1rem]">
                        <label className="font-semibold flex flex-col text-gray-700">Password <span className="text-red-500 font-bold">{formState?.password?._errors.map(error => error)}</span></label>
                        <input name="password" type="password" placeholder="Password" className="w-full border-[#D3DEE8] border-[1.95px]  h-[3rem] p-[0.5rem] mt-[0.5rem]"/>
                    </div>
                <button type="submit" className="w-full h-[3rem] text-white bg-[#162A41]">Log ind</button>
            </form>
            <form className="mt-[1rem]">
                <h3 className="text-[1.1rem] mb-[0.8rem]">Log in med</h3>
                <div className="text-white flex justify-between">
                    <button className="bg-[#DD4B39] h-[3rem] w-[8.5rem] rounded">Google</button>
                    <button className="bg-[#3B5999] h-[3rem] w-[8.5rem] rounded">Facebook</button>
                    <button className="bg-[#162a41] h-[3rem] w-[8.5rem] rounded">Twitter</button>
                </div>
                <div className="flex justify-center mt-[1rem]">
                    <h3 className="items-center">Har du ikke en konto? <a href="/Register" className="text-[#2F80ED]">Opret bruger.</a></h3>
                </div>
            </form>
            </div>
        </div>
        </section>
    )
}