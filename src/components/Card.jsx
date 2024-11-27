import { useState } from "react"
import wishlist from "../../public/images/wishlist.png"
import wishlisted from "../../public/images/wishlisted.png"
import Image from "next/image"

export default function Card({homes, index}) {
    const [isWishlist, setIsWishlist] = useState(false)

        function toggleWishlist() {
        setIsWishlist(prevState => !prevState)
    }


    return (
        <div key={index} className="bg-white h-[32rem] rounded-b-[3px] shadow-lg relative">
            <img className="h-[18rem] w-[45rem] rounded-t-[3px]" src={homes.images[0].url} alt="House Image" />
            <Image className="absolute top-[1rem] right-[1rem] z-10 cursor-pointer" onClick={toggleWishlist} src={isWishlist ? wishlisted : wishlist} alt="wishlist button"/>
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
    )
}