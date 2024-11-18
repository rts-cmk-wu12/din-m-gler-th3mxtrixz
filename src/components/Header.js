import Image from "next/image";
import paperPlane from "../../public/images/paper-plane.png"
import phone from "../../public/images/phone.png"
import user from "../../public/images/user.png"
import icon from "../../public/images/din-maegler.png"

export default function Header() {
    return (
        <header className="sticky top-0">
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
                <div className="flex">
                    <Image src={user} width={25} height={25} alt="user" className="mr-[0.5rem]"/>
                    <span className="hover:text-orange-400">Log ind</span>
                </div>
            </div>
            <div className="h-[5rem] flex justify-around items-center px-[9.3rem] bg-white">
                <Image src={icon} width={260} alt="website icon"/>
                <nav className="flex">
                    <a className="mr-8 hover:text-orange-400">Boliger til salg</a>
                    <a className="mr-8 hover:text-orange-400">Mæglere</a>
                    <a className="mr-8 hover:text-orange-400">Mine favoritter</a>
                    <a className="hover:text-orange-400">Kotankt os</a>
                </nav>
            </div>
        </header>
    )
}