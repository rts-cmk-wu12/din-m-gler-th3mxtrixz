import { cookies } from "next/headers"

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



    const getProperties = await fetch(`https://dinmaegler.onrender.com/homes`);

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
        </main>
    )
}