"use client"

import Filter from "../../components/Filter"
import { useEffect, useState } from "react"
import Card from "../../components/Card"
import { getCookie } from "cookies-next"

export default function HousesForSale() {
    const [homes, setHomes] = useState([])
    const [token, setToken] = useState(null)
    
    async function handleFetch() {
        const data = await fetch (`https://dinmaegler.onrender.com/homes`)
        setHomes(await data.json())
    }
    
    useEffect(() => {
        const loggedIn = getCookie("dm_userid")
        const tokenFromCookies = getCookie("dm_token")
        setToken(tokenFromCookies)
        handleFetch(loggedIn)
    }, [])
    
    console.log(homes)

    
    return (
        <section className="bg-[white] w-[100%] mb-[5rem]">
            <div className="banner flex justify-center items-center">
                <h2 className="font-bold text-white text-[5rem]">Boliger til salg</h2>
            </div>
                <Filter/>
                <div className="flex justify-center">
                    <div className="grid grid-cols-2 gap-[2rem] place-items-center mt-[4rem] w-[61%]">
                        {homes && homes.map((homes, index) => (
                        <Card key={homes.id} homes={homes} index={index} token={token}/>
                    ))}
                </div>
            </div>
        </section>
    )
}