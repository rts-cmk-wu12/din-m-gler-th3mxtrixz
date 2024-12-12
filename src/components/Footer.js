"use client"

import Image from "next/image"
import dinMaegler from "../../public/images/din-maegler.png"
import callUsPhone from "../../public/images/call-us-phone.png"
import sendEmail from "../../public/images/send-email.png"
import address from "../../public/images/address.png"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { useEffect, useState } from "react"
import { getCookie } from "cookies-next"

export default function Footer() {
    const pathName = usePathname()

    const [isLoggedIn, setIsLoggedIn] = useState()
    useEffect(() => {
        const loggedIn = getCookie("dm_userid")
        setIsLoggedIn(loggedIn)
    },[pathName])
    
    function handleLogOut(){
        if (isLoggedIn) {
            deleteCookie("dm_token")
            deleteCookie("dm_userid")
            redirect("/Login")
        }
    }

    return (
        <footer className="w-[100%]">
            <div className="bg-[#F8F8FB] px-[20%] py-[5rem] z-[100] relative">
                    <Image src={dinMaegler} width={290} alt="din mægler icon"/>
                    <p className="mt-[1rem] text-[1.1rem]">There are many variations of passages of Lorem Ipsum available, but the majority have<br/> suffered alteration in some form, by injected humour, or randomized words.</p>
                <section className="w-[100%] flex z-[100] relative">
                    <address className="w-[37%] bg-white pl-[2rem] pt-[1rem] mt-[3rem] rounded-[5px] shadow-xl">
                    <div className="flex pt-[2rem] items-center">
                        <Image src={callUsPhone} alt="phone icon"/>
                        <div className="flex flex-col pl-[1rem]">
                            <span className="text-[#6F6F6F]">Ring til os</span>
                            <a className="hover:text-orange-400 font-bold text-[1.1rem] text-[#333333]" href="tel:+4570704000">+45 7070 4000</a>
                        </div>
                    </div>
                    <div className="flex pt-[2rem] items-center">
                        <Image src={sendEmail} alt="email icon"/>
                        <div className="flex flex-col pl-[1rem]">
                            <span className="text-[#6F6F6F]">Send en mail</span>
                            <a className="hover:text-orange-400 font-bold text-[1.1rem] text-[#333333]" href="mailto:4000@dinmaegler.com">4000@dinmaegler.com</a>
                        </div>
                    </div>
                    <div className="flex pt-[2rem] items-center">
                        <Image src={address} alt="address icon"/>
                        <div className="flex flex-col pl-[1rem]">
                            <span className="text-[#6F6F6F]">Butik</span>
                            <a className="hover:text-orange-400 font-bold text-[1.1rem] text-[#333333]" href="https://www.google.com/maps?q=Strændertorvet+78,+4000+Roskilde">Strændertorvet 78, 4000 Roskilde</a>
                        </div>
                    </div>
                        <p className="py-[1.5rem] text-[1.1rem]">Din Mægler Roskilde, er din<br/> boligbutik i lokalområdet.</p>
                    </address>
                    <nav className="w-[50%] mt-[2.5rem] ml-[10%]">
                        <ul className="flex flex-col">
                            <li className="font-bold text-[1.5rem]">Quick Links</li>
                            <li className="my-[1rem]">
                                <Link href="/HousesForSale" className={` ${pathName === "/HousesForSale" ? "text-orange-400" : "black"} hover:text-orange-400 text-[1.1rem]`}>Boliger til salg</Link>
                            </li>
                            <li>
                                <Link href="/AllAgents" className={` ${pathName === "/AlleAgents" ? "text-orange-400" : "black"} hover:text-orange-400 text-[1.1rem]`}>Mæglere</Link>
                            </li>
                            <li className="text-[1.1rem] hover:text-orange-400 my-[1rem]">Kontakt os</li>
                            <li>{isLoggedIn ? <button onClick={handleLogOut}>Log ud</button> : <Link href="/Login" className="hover:text-orange-400 text-[1.1rem]">Log ind / Bliv bruger</Link>}</li>
                        </ul>
                    </nav>
                </section>
                    <div className="bg-white z-[50] h-[25%] w-full absolute bottom-0 left-0 flex items-center justify-center">
                    <div className="text-start ml-[7%]">
                        <span className="text-[0.8rem] text-[#7B7B7B] block">Medlem af</span>
                        <span className="text-[3rem] font-bold text-[#7B7B7B] block">DMS</span>
                        <span className="text-[#7B7B7B] block">Dansk Mægler Sammenslutning</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}