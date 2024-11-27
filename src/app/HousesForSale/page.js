"use client"

import Filter from "../../components/Filter"
import { useEffect, useState } from "react"
import Card from "../../components/Card"

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
                {homes && homes.map((homes, index) => (
                    <Card key={homes.id} homes={homes} index={index}/>
                ))}
            </div>
        </section>
    )
}