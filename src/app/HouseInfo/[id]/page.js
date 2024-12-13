import horizon from "../../../../public/images/horizon.svg"
import stack from "../../../../public/images/stack.svg"
import addressPin from "../../../../public/images/address-pin.svg"
import likeHeart from "../../../../public/images/like-heart.svg"
import instagram from "../../../../public/svg/instagram.svg"
import linkedin from "../../../../public/svg/linkedin.svg"
import skype from "../../../../public/svg/skype.svg"
import agentPhone from "../../../../public/svg/agent-phone.svg"
import agentPaperPlane from "../../../../public/svg/agent-paper-plane.svg"
import Image from "next/image"

export default async function HouseInfo({params}) {
    const {id} = params
    const houseInfo = await fetch (`https://dinmaegler.onrender.com/homes/${id}`)
    const data = await houseInfo.json()
    
    console.log("house info", data)

    return (
        <main className="flex flex-col justify-center items-center mb-[10rem]">
            <img className="w-full h-[45rem] object-cover" src={data.images[0].url}alt="house image"/>
            <div className="flex items-center justify-center my-[1rem]">
                <div className="border-b-[0.01rem] border-[#D3DEE8] w-[75rem] flex justify-between items-center pb-5 mt-8 text-[#162A41]">
                    <address className="flex flex-col font-semibold text-[1.2rem]">
                        <span>{data.adress1}</span>
                        <span>{data.adress2}</span>
                    </address>
                <div className="flex w-[25%] justify-evenly items-center object-cover">
                    <Image src={horizon} width={45} height={45} alt="horizon image" />
                    <Image src={stack} width={45} height={45} alt="stack image" />
                    <Image src={addressPin} width={35} height={35} alt="pin image" />
                    <Image src={likeHeart} width={45} height={45} alt="heart/favorite image" />
                </div>
                <span className="font-semibold text-[2rem]">Kr. {data.price.toLocaleString()}</span>
            </div>
            </div>
            <div className="flex justify-between w-[75rem]">
                <div className="flex flex-col w-[25%]">
                    <div className="flex justify-between">
                        <span className="font-semibold">Sagsnummer:</span>
                        <span className="w-[35%]">1234567898.</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-semibold">Boligareal:</span>
                        <span className="w-[35%]">{data.livingspace} m²</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-semibold">Grundareal:</span>
                        <span className="w-[35%]">{data.lotsize} m²</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-semibold">Rum/værelser:</span>
                        <span className="w-[35%]">{data.rooms}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-semibold">Antal Plan:</span>
                        <span className="w-[35%]">-</span>
                    </div>
                </div>
                <div className="flex flex-col w-[25%]">
                    <div className="flex justify-between">
                        <span className="font-semibold">Kælder:</span>
                        <span className="w-[35%]">{data.basement ? data.basement : "-"}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-semibold">Byggeår:</span>
                        <span className="w-[35%]">{data.built}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-semibold">Ombygget:</span>
                        <span className="w-[35%]">{data.remodel}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-semibold">Energimærke:</span>
                        <span className="w-[35%]">{data.energylabel}</span>
                    </div>
                </div>
                <div className="flex flex-col w-[20%]">
                    <div className="flex justify-between">
                        <span className="font-semibold">Udbetaling:</span>
                        <span className="w-[35%]">Kr. {data.price}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-semibold">Brutto ex ejerudgift:</span>
                        <span className="w-[35%]">Kr. {data.gross}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-semibold">Netto ex ejerudgift:</span>
                        <span className="w-[35%]">Kr. {data.netto}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-semibold">Kr. Ejerudgifter:</span>
                        <span className="w-[35%]">Kr. {data.payment}</span>
                    </div>
                </div>
                </div>
                <section className="w-[79%] flex justify-items-center mt-[3rem]">
                    <div className="w-[60%] mr-[3rem]">
                        <h3 className="font-semibold text-[1.4rem] mb-[1rem]">Beskrivelse</h3>
                        <p className="w-[100%]">{data.description}</p>
                    </div>
                    <div className="w-[80%]">
                        <h3 className="font-semibold text-[1.4rem] mb-[1rem]">Ansvarlige mægler</h3>
                        <div>
                        <article className="border-[#D3DEE8] border-[1.95px] flex p-[2rem] w-full">
                            <img className="w-[15rem] h-[15rem] object-cover" src={data.agent.image.url}/>
                            <nav className="bg-[#162A41] h-[5%] w-[8%] flex flex-row p-[0.6rem] absolute top-[89rem]">
                                <Image className="w-[25rem]" src={instagram} height={20} width={20} alt="agents social medias"/>
                                <Image className="w-[25rem]" src={linkedin} height={20} width={20} alt="agents social medias"/>
                                <Image className="w-[25rem]" src={skype} height={20} width={20} alt="agents social medias"/>
                            </nav>
                            <div className="w-[50%] ml-[1rem]">
                                <h2 className="font-semibold text-[1.3rem]">{data.agent.name}</h2>
                                <p className="text-[#7B7B7B]">{data.agent.title}</p>
                            <div className="border-b-[2px] border-[#D3DEE8] w-[3rem] my-[1rem]"></div>
                            <address className="not-italic">
                                <div className="flex items-center">
                                    <Image className="mr-[0.5rem]" src={agentPhone} height={20} width={20} alt="Agent's phone number"/>
                                    <a className="hover:text-orange-400" href="tel:+4570704000">{data.agent.phone}</a>
                                </div>
                                <div className="flex items-center mt-[0.8rem]">
                                    <Image className="mr-[0.5rem]" src={agentPaperPlane} height={20} width={20} alt="Agent's email address"/>
                                    <a className="hover:text-orange-400" href="mailto:4000@dinmaegler.com">{data.agent.email}</a>
                                </div>
                            </address>
                            </div>
                        </article>
                        </div>
                    </div>
                </section>
        </main>
    )
}