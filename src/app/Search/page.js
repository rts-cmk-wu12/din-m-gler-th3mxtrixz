import { cookies } from "next/headers"

export default async function Search({searchParams}) {
    const {results} = searchParams
    const searchData = await fetch(`https://dinmaegler.onrender.com/homes?description_contains=${results}`)
    const getSearch = await searchData.json()

    const cookieStore = await cookies()
    const token = cookieStore.get("dm_token")

    console.log("search fetch", getSearch)

    return ( 
        <>
        </>
    )
}