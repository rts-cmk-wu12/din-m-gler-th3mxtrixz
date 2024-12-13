"use client"

import Filter from "../../components/Filter"
import { useEffect, useState } from "react"
import Card from "../../components/Card"
import { getCookie } from "cookies-next"

export default function HousesForSale() {
    const [homes, setHomes] = useState([])
    const [token, setToken] = useState(null)

    const [price, setPrice] = useState(12000000)
    const [propertyType, setPropertyType] = useState("")
    
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

    function filterHomes(homes, price, propertyType) {
        return homes.filter((home) => {
            const priceFilter = home.price <= price
            const propertyMatch = propertyType === "" || home.type === propertyType
            return priceFilter && propertyMatch
        })
    }

    const filteredHomes = filterHomes(homes, price, propertyType)

    
    return (
        <section className="bg-[white] w-[100%] mb-[5rem]">
            <div className="banner flex justify-center items-center">
                <h2 className="font-bold text-white text-[5rem]">Boliger til salg</h2>
            </div>
                <Filter price={price} setPrice={setPrice} propertyType={propertyType} setPropertyType={setPropertyType} />
                <div className="flex justify-center">
                    <div className="grid grid-cols-2 gap-[2rem] place-items-center mt-[4rem] w-[61%]">
                        {filteredHomes && filteredHomes.map((home, index) => (
                        <Card key={home.id} homes={home} index={index} token={token}/>
                    ))}
                </div>
            </div>
        </section>
    )
}