"use client"

import Image from "next/image";
import paperPlane from "../../public/images/paper-plane.png"
import phone from "../../public/images/phone.png"
import user from "../../public/svg/user.svg"
import icon from "../../public/images/din-maegler.png"
import Link from "next/link";
import { redirect, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { deleteCookie, getCookie } from "cookies-next";

export default function Header() {
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
            redirect("/LogIn")
        }
    }

    return (
        <header className="sticky top-0 z-[1000]">
            <div className="bg-[#162A41] flex items-center justify-around text-white h-[3.8rem]">
            <address className="flex">
                <div className="flex mr-[1rem]">
                    <Image src={paperPlane} width={25} height={25} alt="paper plane" className="mr-[0.5rem]"/>
                    <a className="hover:text-orange-400" href="mailto:4000@dinmaegler.com">4000@dinmaegler.com</a>
                    </div>
                    <div className="flex">
                        <Image src={phone} width={25} height={25} alt="phone" className="mr-[0.5rem]"/>
                        <a className="hover:text-orange-400" href="tel:+4570704000">+45 7070 4000</a>
                        </div>
                </address>
                <div className="flex hover:text-orange-400">
                    <Image height={24} width={24} alt="log in" className="mr-2" src={user}/>
                    {isLoggedIn ? <button onClick={handleLogOut}>Log ud</button> 
                    : 
                    <Link href="/LogIn" className={`${pathName === "/Login" ? "text-orange-400" 
                    : 
                    "black"}`}>Log ind</Link>}
                </div>
            </div>
            <div className="h-[5rem] flex justify-around items-center px-[9.3rem] bg-white">
                <Link href="/">
                    <Image src={icon} width={260} alt="website icon"/>
                </Link>
                <nav className="flex">
                    <Link href="/HousesForSale" className={` ${pathName === "/HousesForSale" ? "text-orange-400" : "black"} mr-8 hover:text-orange-400 text-[1.1rem]`}>Boliger til salg</Link>
                    <Link href="/AllAgents" className={` ${pathName === "/AllAgents" ? "text-orange-400" : "black"} mr-8 hover:text-orange-400 text-[1.1rem]`}>Mæglere</Link>
                    <Link href="/Favorite" className={` ${pathName === "/Favorite" ? "text-orange-400" : "black"} mr-8 hover:text-orange-400 text-[1.1rem]`}>Mine favoritter</Link>
                    <a className="hover:text-orange-400 text-[1.1rem]">Kontakt os</a>
                </nav>
            </div>
        </header>
    )
}