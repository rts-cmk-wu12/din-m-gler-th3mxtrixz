import Image from "next/image"
import arrow from "../../public/images/arrow.png"

export default function Subscription() {
    return (
        <form className="newsletter bg-[#F8F8FB] flex justify-center items-center">
            <p className="text-[1.5rem] font-semibold text-white mr-[10rem]">Tilmeld dig vores nyhedsbrev og <br /> hold dig opdateret på boligmarkedet</p>
            <div className="flex justify-center items-center relative">
                <input className="h-[4rem] w-[34rem] pl-[1rem] outline-none rounded" type="text" placeholder="Indtast din email adresse"/>
                <button className="h-[4rem] pr-[1rem] absolute right-0">
                    <Image src={arrow} alt="arrow icon"/>
                </button>
            </div>
        </form>
    )
}