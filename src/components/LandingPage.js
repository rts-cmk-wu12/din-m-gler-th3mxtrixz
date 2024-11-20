import Image from "next/image"
import familyImage from "../../public/images/family-img.png"
import handOverHouse from "../../public/images/hand-over-house.png"
import home from "../../public/images/home.png"
import handUnderHouse from "../../public/images/hand-under-house.png"
import pin from "../../public/images/pin.png"
import handUnderUser from "../../public/images/hand-under-user.png"

export default function LandingPage() {
    return (
        <main className="h-full">
            <div className="h-[44.5rem] justify-center flex flex-col items-center filter">
                <h1 className="text-white text-[3rem] font-semibold text-outline mb-[2rem]">Søg efter din drømmebolig</h1>
                <section className="bg-white w-[50%] h-[28%] p-[1.5rem]">
                    <p className="font-semibold text-[1.2rem]"><span className="border-[#162A41] border-b-[5px] pb-2">Søg</span> blandt 158 boliger til salg i 74 butikker</p>
                    <form className="mt-[1.2rem] flex flex-col">
                        <label className="text-black mt-[0.7rem] text-[1.1rem]">Hvad skal din næste bolig indeholde?
                        <div className="flex items-center w-[100%]">
                            <input type="text" className="p-[0.5rem] border-[#F3F1F1] border-2 py-[0.8rem] w-[90%] mr-[0.5rem]" placeholder="Søg på fx. glaskeramisk komfur, bryggers, kælder eller lignende"/>
                            <button className="px-[2.5rem] py-[0.9rem] bg-[#162A41] text-white rounded-[3px] hover:text-orange-400">Søg</button>
                        </div>
                        </label>
                    </form>
                </section>
            </div>
            <div className="w-[100%] flex flex-col items-center justify-center mt-[7rem]">
            <section className="flex justify-center w-[100%]">
                <Image src={familyImage} alt="family image" width={450}/>
                    <div className="flex flex-col w-[33%] ml-[5rem]">
                        <h2 className="text-[#263048] text-[2.5rem] font-bold mb-[1rem] w-[85%]">Vi har fulgt danskerne hjem i snart 4 årtier</h2>
                        <h3 className="text-[#263048] text-[1.5rem] font-semibold mb-[0.8rem]">Det synes vi siger noget om os!</h3>
                        <p className="text-[#263048] mb-[0.8rem] w-[80%]">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has normal distribution.</p>
                        <p className="text-[#263048] w-[80%]">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    <div className="flex items-center mt-[3rem] justify-between w-[70%]">
                        <div className="flex items-center">
                            <div className="bg-[#EEF7FF] h-[4rem] w-[4rem] flex items-center justify-center">
                                <Image src={handOverHouse} alt="hand over house icon" />
                                </div>
                            <div className="ml-3 flex flex-col">
                                <span className="text-[#263048] font-bold text-[1.5rem]">4829</span>
                                <span className="text-[#263048] text-[1.1rem]">boliger solgt</span>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div className="bg-[#EEF7FF] h-[4rem] w-[4rem] flex items-center justify-center">
                                    <Image src={home} alt="home icon" />
                                </div>
                                <div className="ml-3 flex flex-col">
                                    <span className="text-[#263048] font-bold text-[1.5rem]">158</span>
                                    <span className="text-[#263048] text-[1.1rem]">boliger til salg</span>
                                </div>
                                </div>
                            </div>
                        </div>
                </section>
                <ul className="flex pt-[3rem] border-[#D3DEE8] border-t w-[60%] my-[5rem]">
                    <li className="flex justify-center">
                        <div className="bg-[#EEF7FF] w-[3rem] h-[3rem] flex justify-center items-center mr-[0.8rem]">
                            <Image alt="logo til sektion" src={handUnderHouse}/>
                        </div>
                        <section className="w-[75%]">
                            <h3 className="text-[1.5rem] font-semibold mb-[1rem]">Bestil et salgstjek</h3>
                            <p className="text-[1.1rem]">Med et Din Mægler Salgstjek bliver du opdateret på værdien af din bolig.</p>
                        </section>
                    </li>
                    <li className="flex justify-center">
                        <div className="bg-[#EEF7FF] w-[3rem] h-[3rem] flex justify-center items-center mr-[0.8rem]">
                            <Image alt="logo til section" src={pin} />
                        </div>
                        <section className="w-[65%]">
                            <h3 className="text-[1.5rem] font-semibold mb-[1rem]">74 butikker</h3>
                            <p className="text-[1.1rem]">Hos Din Mægler er din bolig til salg i alle vores 74 butikker, som er fordelt rundt om i Danmark.</p>
                        </section>
                    </li>
                    <li className="flex justify-center">
                        <div className="bg-[#EEF7FF] w-[3rem] h-[3rem] flex justify-center items-center mr-[0.8rem]">
                            <Image alt="logo til section" src={handUnderUser} />
                        </div>
                        <div className="w-[70%]">
                            <h3 className="text-[1.5rem] font-semibold mb-[1rem]">Tilmeld køberkartotek</h3>
                            <p className="text-[1.1rem]">Når du er tilmeldt vores køberkartotek, bliver du kontaktet inden en ny bolig bliver annonceret.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </main>
    )
}