"use client"

import { useEffect, useState } from "react"

export default function Houses() {
    const [homes, setHomes] = useState([])

    async function handleFetch() {
        const data = await fetch (`https://dinmaegler.onrender.com/homes?_limit=4`)
        setHomes(await data.json())
    }
    
    useEffect(() => {
        handleFetch()
    }, [])
    
    console.log(homes)

    
    return (
        <main className="bg-[#F8F8FB] pb-[5rem]">
            <div className="flex flex-col justify-center items-center text-center">
            <h1 className="text-[#263048] text-[2.5rem] font-bold mt-[5rem]">Udvalgte Boliger</h1>
            <p className="mt-[1rem] text-[1.1rem]">There are many variations of passages of Lorem Ipsum available but the this in<br/> majority have suffered alteration in some</p>
            </div>
            <div className="grid grid-cols-2 grid-rows-2 gap-[2rem] place-items-center px-[25rem] mt-[4rem]">
                {homes.map((homes, index) => (
                    <div key={index} className="bg-white h-[29rem] rounded-b-[3px]">
                        <img className="h-[16rem] w-[40rem] rounded-t-[3px]" src={homes.images[0].url}/>
                        <div className="p-[1rem]">
                            <address className="font-semibold text-[1.3rem]">{homes.adress1}{homes.adress2 ? " •" : ""} {homes.adress2 ? homes.adress2 : ""}</address>
                            <address className="mt-2">{homes.postalcode} {homes.city}</address>
                            <address className="mt-2">
                                <span className="font-bold">{homes.type}</span> • Ejerudgift: {homes.gross} kr.
                            </address>
                            <div className="border-t border-gray-300 mt-[1.2rem]"></div>
                            <div className="flex justify-between items-center mt-[1rem]">
                                <span className={`font-bold text-[1.5rem] px-[0.5rem] mr-[1rem] text-white ${homes.energylabel}`}>{homes.energylabel}</span>
                                <span className="ml-[0.5rem]">{homes.rooms} værelser • {homes.livingspace} m²</span>
                                <div className="flex justify-end ml-auto">
                                <span className="font-semibold text-[1.3rem]">Kr. {homes.payment}</span>
                                </div>
                            </div>
                            </div>
                    </div>
                ))}
            </div>
                <div className="flex justify-center mt-[4rem]">
                    <button className="bg-[#162A41] text-white py-[1rem] px-[1.8rem] hover:text-orange-400">Se alle boliger</button>
                </div>
        </main>
    )
}