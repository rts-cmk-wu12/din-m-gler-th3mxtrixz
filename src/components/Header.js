"use client"

import Image from "next/image";
import paperPlane from "../../public/images/paper-plane.png"
import phone from "../../public/images/phone.png"
import user from "../../public/svg/user.svg"
import icon from "../../public/images/din-maegler.png"
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathName = usePathname()

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
                <Link href="/LogIn" className="flex">
                    <Image src={user} width={25} height={25} alt="user" className="mr-[0.5rem]"/>
                    <span className={` ${pathName === "/LogIn" ? "text-orange-400" : "black"} text-[1.1rem] hover:text-orange-400`}>Log ind</span>
                </Link>
            </div>
            <div className="h-[5rem] flex justify-around items-center px-[9.3rem] bg-white">
                <Link href="/">
                    <Image src={icon} width={260} alt="website icon"/>
                </Link>
                <nav className="flex">
                    <Link href="/HousesForSale" className={` ${pathName === "/HousesForSale" ? "text-orange-400" : "black"} mr-8 hover:text-orange-400 text-[1.1rem]`}>Boliger til salg</Link>
                    <Link href="/AllAgents" className={` ${pathName === "/AllAgents" ? "text-orange-400" : "black"} mr-8 hover:text-orange-400 text-[1.1rem]`}>Mæglere</Link>
                    <a className="mr-8 hover:text-orange-400 text-[1.1rem]">Mine favoritter</a>
                    <a className="hover:text-orange-400 text-[1.1rem]">Kotankt os</a>
                </nav>
            </div>
        </header>
    )
}