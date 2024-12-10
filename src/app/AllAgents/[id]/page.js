import Image from "next/image"
import agentPhone from "../../../../public/svg/agent-phone.svg"
import agentPaperPlane from "../../../../public/svg/agent-paper-plane.svg"
import search from "../../../../public/images/search-icon.png"
import instagram from "../../../../public/svg/instagram.svg"
import linkedin from "../../../../public/svg/linkedin.svg"
import skype from "../../../../public/svg/skype.svg"

export default async function AgentInfo({params}) {
    const {id} = params
    const agentsInfo = await fetch(`https://dinmaegler.onrender.com/agents/${id}`)
    const data = await agentsInfo.json()
    
    console.log("agents info", data)

    return (
        <section className="w-[100%]">
            <div className="banner2 flex justify-center items-center">
                <h2 className="text-white text-[3rem] font-bold">Kontakt en medarbejder</h2>
            </div>
            <section className="flex justify-center my-[5rem] px-[20%]">
                <div className="flex flex-col md:flex-row gap-[2rem]">
            <article className="grid grid-cols-2 border-[#D3DEE8] border-[1.95px] p-[1.5rem] w-[70%]">
                <img className="w-[19rem] h-[19rem] object-cover" src={data.image.url}/>
                <div className="bg-[#162A41] h-[5%] w-[8%] flex flex row p-[0.6rem] absolute bottom-[16rem]">
                    <Image className="w-[25rem]" src={instagram} height={20} width={20} alt="agents social medias"/>
                    <Image className="w-[25rem]" src={linkedin} height={20} width={20} alt="agents social medias"/>
                    <Image className="w-[25rem]" src={skype} height={20} width={20} alt="agents social medias"/>
                </div>
            <div className="w-full">
                <h2 className="font-semibold text-[1.3rem]">{data.name}</h2>
                <p className="text-[#7B7B7B]">{data.title}</p>
            <div className="border-b-[2px] border-[#D3DEE8] w-[3rem] my-[1rem]"></div>
            <address className="not-italic">
                <div className="flex items-center">
                    <Image className="mr-[0.5rem]" src={agentPhone} height={20} width={20} alt="Agent's phone number"/>
                    <a className="hover:text-orange-400" href="tel:+4570704000">{data.phone}</a>
                </div>
            <div className="flex items-center mt-[0.8rem]">
                <Image className="mr-[0.5rem]" src={agentPaperPlane} height={20} width={20} alt="Agent's email address"/>
                <a className="hover:text-orange-400" href="mailto:4000@dinmaegler.com">{data.email}</a>
            </div>
        </address>
        </div>
        <section className="mt-[1rem] col-span-2 my-[0.8rem]">
            <span className="font-semibold text-[1.2rem]">Om {data.name}</span>
            <div className="border-b-[4px] border-[#162A41] w-[3.5rem] my-[0.5rem]"></div>
            <span>{data.description}</span>
            </section>
            <section className="col-span-2 border-[1px] border-[#D3DEE8] rounded p-[1.5rem] mt-[1rem]">
                <span className="text-[1.1rem] font-semibold">Kontakt {data.name}</span>
                <div className="border-b-[4px] border-[#162A41] w-[3.4rem] my-[0.5rem]"></div>
                    <form className="flex flex-col w-full">
                        <div className="w-[100%] flex flex-row justify-between">
                            <div className="flex flex-col w-[48%]">
                                <label className="my-[0.5rem]" type="name">Navn</label>
                                <input className="border-[1px] border-[#D3DEE8] w-full h-[3rem] rounded-[2px] p-[0.5rem]" type="text" placeholder="Indtast navn"/>
                            </div>
                        <div className="flex flex-col w-[48%]">
                            <label className="my-[0.5rem]" type="email">Email</label>
                            <input className="border-[1px] border-[#D3DEE8] w-full h-[3rem] rounded-[2px] p-[0.5rem]" type="email" placeholder="Indtast email"/>
                        </div>
                </div>
                <div className="flex flex-col">
                    <label className="my-[0.5rem]">Emne</label>
                    <input className="border-[1px] border-[#D3DEE8] w-full h-[3rem] rounded-[2px] p-[0.5rem]" type="text" placeholder="Hvad drejer din henvendelse sig om?"/>
                </div>
            <div className="flex flex-col">
                <label className="my-[0.5rem]">Besked</label>
                <textarea className="border-[1px] border-[#D3DEE8] w-full h-[8rem] rounded-[2px] p-[0.5rem] resize-none" type="text" placeholder="Skriv din besked her.."></textarea>
            </div>
                <button type="submit" className="flex justify-center items-center bg-[#162A41] text-white rounded-[3px] h-[3.5rem] w-[10rem] mt-[1.5rem]">Send besked</button>
            </form>
        </section>
        </article>
        <section className="flex flex-col w-[40%]">
            <aside className="bg-[#EEF7FF] p-[1rem] rounded-[2px] w-[100%] h-[9.5rem]">
                <h2 className="font-semibold text-[1.3rem]">Search Property</h2>
                <div className="border-b-[1px] border-[#D3DEE8] w-[100%] my-[0.5rem]"></div>
                <form className="mt-[1rem]">
                    <input className="border-[1px] border-[#D3DEE8] w-full h-[3rem] rounded-[2px] p-[0.5rem] pl-[2rem] mt-[0.5rem]" type="text" placeholder="Search"/>
                    <Image className="relative bottom-[2.1rem] left-[0.5rem]" src={search} height={20} width={20} alt="search icon"/>
                </form>
            </aside>
            <aside className="bg-[#162A41] text-white flex flex-col justify-center items-center text-center p-[2rem] py-[4.5rem] mt-[1rem]">
                <h2 className="text-[1.8rem] font-semibold">Find The Best<br/> Property<br/> For Rent Or Buy</h2>
                <div className="border-b-[3px] border-[#D3DEE8] w-[4rem] my-[1rem]"></div>
                <p className="text-[1.05rem]">Call Us Now</p>
                <address className="mt-[1rem]">
                    <span className="text-[1.5rem] font-semibold hover:text-orange-400">+00 123 456 789</span>
                </address>
            </aside>
        </section>
        </div>
    </section>
</section>

    )
}