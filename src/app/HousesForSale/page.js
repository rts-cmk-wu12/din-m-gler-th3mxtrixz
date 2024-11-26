"use client"

import Filter from "../../components/Filter"
import { useEffect, useState } from "react"

export default function HousesForSale() {
    const [homes, setHomes] = useState([])

    async function handleFetch() {
        const data = await fetch (`https://dinmaegler.onrender.com/homes`)
        setHomes(await data.json())
    }
    
    useEffect(() => {
        handleFetch()
    }, [])
    
    console.log(homes)

    
    return (
        <section className="bg-[white] w-[100%]">
            <div className="banner flex justify-center items-center">
                <h2 className="font-bold text-white text-[5rem]">Boliger til salg</h2>
            </div>
                <Filter/>
            <div className="grid grid-cols-2 grid-rows-2 gap-[2rem] place-items-center px-[23rem] mt-[4rem]">
                {homes.map((homes, index) => (
                    <div key={index} className="bg-white h-[32rem] rounded-b-[3px] shadow-lg">
                        <img className="h-[18rem] w-[45rem] rounded-t-[3px]" src={homes.images[0].url}/>
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
        </section>
    )
}