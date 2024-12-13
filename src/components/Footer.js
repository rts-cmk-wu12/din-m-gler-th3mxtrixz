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
        <footer className="gap-4 min-h-[50vh] grid grid-cols-[auto,35em,35em,auto] grid-rows-3 bg-gray-100">
            <section className="col-start-2 col-end-4 mt-[5rem]">
                <Image src={dinMaegler} width={290} alt="din mægler icon"/>
                <p className="mt-[1rem] text-[1.1rem]">There are many variations of passages of Lorem Ipsum available, but the majority have<br/> suffered alteration in some form, by injected humour, or randomized words.</p>
            </section>
            <section className="col-start-3 col-end-4">
                <ul>
                <h2 className="font-bold text-[1.5rem]">Quick Links</h2>
                    <li className="my-[1rem]">
                        <Link href="/HousesForSale" className={` ${pathName === "/HousesForSale" ? "text-orange-400" : "black"} hover:text-orange-400 text-[1.1rem]`}>Boliger til salg</Link>
                    </li>
                    <li>
                        <Link href="/AllAgents" className={` ${pathName === "/AlleAgents" ? "text-orange-400" : "black"} hover:text-orange-400 text-[1.1rem]`}>Mæglere</Link>
                    </li>
                    <li className="my-[1rem]">
                        <Link href="/Error" className={` ${pathName === "/Error" ? "text-orange-400" : "black"} hover:text-orange-400 text-[1.1rem]`}>Kontakt os</Link>
                    </li>
                    <li>{isLoggedIn ? <button onClick={handleLogOut}>Log ud</button> : <Link href="/Login" className="hover:text-orange-400 text-[1.1rem]">Log ind / Bliv bruger</Link>}</li>
                </ul>
            </section>
                <section className="grid grid-cols-2 bg-white row-start-3 row-end-4 col-start-1 col-end-5">
                    <div className="col-start-2 mt-[1rem]">
                        <span className="text-[0.8rem] text-[#7B7B7B] block">Medlem af</span>
                        <span className="text-[3rem] font-bold text-[#7B7B7B] block">DMS</span>
                        <span className="text-[#7B7B7B] block">Dansk Mægler Sammenslutning</span>
                    </div>
                </section>
                <address className="mb-[5rem] mr-[4rem] bg-white row-start-2 row-end-4 col-start-2 col-end-3 shadow-lg p-[2rem]">
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
        </footer>
    )
}