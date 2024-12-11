import Image from "next/image"
import mail from "../../../public/images/mail.png"
import Link from "next/link"

export default async function AllAgents() {
    const meetAgents = await fetch(`https://dinmaegler.onrender.com/agents`)
    const data = await meetAgents.json()

    console.log("all agents", data)

    return (
        <section className="w-full">
            <div className="banner2 flex justify-center items-center">
                <h2 className="text-white text-[3rem] font-bold">Medarbejder i Roskilde</h2>
            </div>
            <div className="flex justify-center my-[8rem]">
            <div className="grid grid-cols-3 grid-rows-2 gap-[3rem]">
                {data.map((data, index) => (
                    <Link key={index} href={`/AllAgents/${data.id}`}>
                    <div key={index} className="shadow-lg bg-white rounded-[5px]">
                    <img className="w-[22rem] h-[23rem] object-cover rounded-t-[5px]" src={data.image.url}/>
                    <div className="flex justify-center items-center flex-col rounded-b-[10px] py-[1.5rem]">
                        <h3 className="text-[#2A2C30] text-[1.5rem] font-semibold">{data.name}</h3>
                        <span className="text-[1.1rem] text-[#7B7B7B]">{data.title}</span>
                        <div className="flex justify-center items-center mt-[0.8rem]">
                            <Image src={mail} alt="mail"/>
                            <span className="text-[#263048] font-bold ml-[0.5rem] text-[1.2rem]">in</span>
                        </div>
                    </div>
                    </div>
                </Link>
                ))}
            </div>
                </div>
        </section>
    )
}