import horizon from "../../../../public/images/horizon.svg"
import stack from "../../../../public/images/stack.svg"
import addressPin from "../../../../public/images/address-pin.svg"
import likeHeart from "../../../../public/images/like-heart.svg"
import Image from "next/image"

export default async function HouseInfo({params}) {
    const {id} = params
    const houseInfo = await fetch (`https://dinmaegler.onrender.com/homes/${id}`)
    const data = await houseInfo.json()
    
    console.log("house info", data)

    return (
        <main className="flex flex-col justify-center items-center">
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
        </main>
    )
}