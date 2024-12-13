
import FavoriteCard from "@/components/FavoriteCard"
import { cookies } from "next/headers"
import searchIcon from "../../../public/images/search-icon.png"
import Image from "next/image"

export default async function Favorite() {
    const cookieStore = await cookies()
    const token = cookieStore.get("dm_token")

    const getFavorites = await fetch("https://dinmaegler.onrender.com/users/me", {
        "method": "GET",
        "headers": {
            "Authorization": `Bearer ${token.value}`
        }
    })

    const savedFavorite = await getFavorites.json()
    console.log("property details", savedFavorite.homes)

    const getProperties = await fetch(`https://dinmaegler.onrender.com/homes`)
    const data = await getProperties.json()

    console.log("her har vi favorite fetches", data)

    const filteredHomes = data.filter(function (home) {
        if (savedFavorite.homes.includes(home.id)) return home
    })
    
    console.log("all homes", filteredHomes)

    return (
        <main>
            <div className="banner2 flex justify-center items-center">
                <h2 className="text-white text-[3rem] font-bold">Mine favoritboliger</h2>
            </div>
            <div className="flex flex-col justify-center items-center my-[5rem]">
                <div className="py-[1em] relative border-b-[1.8px] mb-[1rem] w-[63%]">
                    <Image alt="Søg i favoritter" className="absolute bottom-[1.7rem] left-2" src={searchIcon} />
                    <input type="text" placeholder="Søg i favoritter" name="search" className="placeholder:text-slate-400 block bg-white w-[17rem] border border-slate-300 rounded-[0.2rem] py-[0.4rem] pl-[2rem]" />
                </div>
                <div className="flex flex-col items-center justify-center">
                    {filteredHomes.map((items) => (
                        <FavoriteCard key={items.id} items={items} />
                    ))}
                </div>
            </div>
        </main>
    )
}