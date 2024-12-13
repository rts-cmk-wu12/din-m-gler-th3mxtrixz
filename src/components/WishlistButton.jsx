"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import wishlist from "../../public/images/wishlist.png"
import wishlisted from "../../public/images/wishlisted.png"
import put from "@/actions/put"

export default function WishlistButton({ homes, token, savedFavorite = [] }) {
    const [isWishlist, setIsWishlist] = useState(false)

    function toggleWishlist(e) {
        e.preventDefault()
        setIsWishlist(prevState => !prevState)
        put(homes.id)
    }
    useEffect(() => {
        setIsWishlist(savedFavorite?.includes(homes.id))
    }, [savedFavorite, homes.id])

    return (
        <div className="bg-white bg-opacity-75 h-10 w-10 rounded-full absolute right-4 top-4 flex justify-center items-center">
            {token ? <button onClick={toggleWishlist} aria-label="Toggle Wishlist">
                <Image alt="Add to Wishlist" src={isWishlist ? wishlisted : wishlist}/>
                </button> : <Image alt="wishlist icon" src={wishlist}/>}
        </div>
    )
}
