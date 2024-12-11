"use server"

import { cookies } from "next/headers";

export default async function put( homeId ) {

    const cookieStore = await cookies()
    const userid = cookieStore.get("dm_userid")
    const userToken = cookieStore.get("dm_token")

    const getFavorites = await fetch("https://dinmaegler.onrender.com/users/me", {
    "method": "GET",
    "headers": {
        "Authorization": `Bearer ${userToken.value}`
    }
})

    const savedFavorite = await getFavorites.json();

    const index = savedFavorite.homes.indexOf(homeId)

    if (index === -1) savedFavorite.homes.push(homeId)

    if (index > -1) {
        savedFavorite.homes.splice(index, 1)
    }

    console.log("saved favorites",index, savedFavorite.homes);
    

	fetch(`https://dinmaegler.onrender.com/users/${userid.value}`, {
    "method": "PUT",
    "headers": {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${userToken.value}`
    },
    "body": JSON.stringify({
        "homes": savedFavorite.homes
    })
    })

}