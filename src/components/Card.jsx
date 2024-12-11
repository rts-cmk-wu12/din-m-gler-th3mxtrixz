import Link from "next/link"
import WishlistButton from "./WishlistButton"

export default function Card({homes, index, token, savedFavorite}) {
    return (
        <div key={index} className="bg-white h-[32rem] rounded-b-[3px] shadow-lg relative">
            <Link href={`/HouseInfo/${homes.id}`}>
                <img className="h-[18rem] w-[45rem] rounded-t-[3px]" src={homes.images[0].url} alt="House Image" />
            </Link>
                {token && <WishlistButton homes={homes} token={token} savedFavorite={savedFavorite} />}
                <div className="p-[1rem]">
                    <address className="font-semibold text-[1.3rem]">{homes.adress1}{homes.adress2 ? " •" : ""} {homes.adress2 ? homes.adress2 : ""}</address>
                    <address className="mt-2">{homes.postalcode} {homes.city}</address>
                    <address className="mt-2">
                        <span className="font-bold">{homes.type}</span> • Ejerudgift: {homes.cost.toLocaleString()} kr.
                    </address>
                        <div className="border-t border-gray-300 mt-[1.2rem]"></div>
                            <div className="flex justify-between items-center mt-[1rem]">
                                <span className={`font-bold text-[1.5rem] px-[0.5rem] mr-[1rem] text-white ${homes.energylabel}`}>{homes.energylabel}</span>
                                <span className="ml-[0.5rem]">{homes.rooms} værelser • {homes.livingspace} m²</span>
                                <div className="flex justify-end ml-auto">
                                <span className="font-semibold text-[1.3rem]">Kr. {homes.payment.toLocaleString()}</span>
                                </div>
                        </div>
                </div>
        </div>
    )
}