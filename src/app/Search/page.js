"use client"

import Card from "@/components/Card"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

export default function Search() {
    const searchParams = useSearchParams()
    const results = searchParams.get("results")
    const [homes, setHomes] = useState([])
    const token = cookieStore.get("dm_token")

    
    useEffect(() => {
        async function fetchHomes() {
            const searchData = await fetch(`https://dinmaegler.onrender.com/homes?description_contains=${results}`)
            const data = await searchData.json()
            setHomes(data)
            console.log("search fetch", searchData)
        }
        fetchHomes()
    }, [results])

    return ( 
        <main className="">
            <div className="banner2 flex justify-center items-center">
                <h2 className="text-white text-[3rem] font-bold">Søge resultater</h2>
            </div>
            <div className="flex justify-center my-[5rem]">
                <div className="grid grid-cols-2 gap-[2rem] place-items-center">
                    {homes.length > 0 ? (
                        homes.map((home, index) => (
                            <Card key={home.id} homes={home} index={index} token={token?.value}/>
                        ))
                    ) : (
                        <p>Ingen resultater fundet for din søgning: "{results}"</p>
                    )}
                </div>
            </div>
        </main>
    )
}