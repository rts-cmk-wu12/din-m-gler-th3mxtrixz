import Image from "next/image"
import mail from "../../public/images/mail.png"

export default async function MeetAgents() {
    const meetAgents = await fetch(`https://dinmaegler.onrender.com/agents?_limit=3`)
    const data = await meetAgents.json()

    console.log("agents", data)
    return (
        <main className="bg-[#F8F8FB] pb-[5rem]">
            <div className="flex flex-col items-center text-center">
                <h2 className="text-[#263048] text-[2.5rem]  font-bold mt-[5rem]">Mød vores engagerede medarbejdere</h2>
                <p className="text-[1.1rem]">Din Mægler er garant for altid veluddannet assistance i dit boligsalg. <br/> Kontakt en af vores medarbejdere.</p>
            </div>
            <div className="flex justify-center gap-[1.5rem] mt-[4rem]">
                {data.map((data, index) => (
                    <div key={index} className="shadow-lg bg-white rounded-[5px]">
                        <img className="w-[23.5rem] h-[23rem] object-cover rounded-t-[5px]" src={data.image.url}/>
                        <div className="flex justify-center items-center flex-col rounded-b-[10px] py-[1.5rem]">
                            <h3 className="text-[#2A2C30] text-[1.5rem] font-semibold">{data.name}</h3>
                            <span className="text-[1.1rem] text-[#7B7B7B]">{data.title}</span>
                            <div className="flex justify-center items-center mt-[0.8rem]">
                                <Image src={mail} alt="mail"/>
                                <span className="text-[#263048] font-bold ml-[0.5rem] text-[1.2rem]">in</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
                <div className="flex justify-center mt-[4rem]">
                    <button className="bg-[#162A41] text-white py-[1rem] px-[1.8rem] hover:text-orange-400">Se alle mæglere</button>
                </div>
        </main>
    )
}