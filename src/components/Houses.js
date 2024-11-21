import Image from "next/image"

export default async function Houses() {
    const getAllHomes = await fetch(`https://dinmaegler.onrender.com/homes`)
    const data = await getAllHomes.json()

    console.log(data)

    const sliceHomes = data.slice(0, 4)
    
    const getEnergyLabelsColor = (label) => {
        const labelColors = {
            A: "#108F09",
            B: "#7FC417",
            C: "#FCEE21",
            D: "#FBB03C",
            E: "#F15A24",
            F: "#FE1212",
            G: "#BD0405"
        }
        return labelColors[label] || "#000000"
    }
    return (
        <main className="bg-[#F8F8FB]">
            <div className="flex flex-col justify-center items-center text-center">
            <h1 className="text-[#263048] text-[2.5rem] font-bold mt-[5rem]">Udvalgte Boliger</h1>
            <p className="mt-[1rem] text-[1.1rem]">There are many variations of passages of Lorem Ipsum available but the this in<br/> majority have suffered alteration in some</p>
            </div>
            <div className="grid grid-cols-2 grid-rows-3 gap-[2rem] place-items-center px-[32rem] mt-[4rem]">
                {sliceHomes.map((homes, index) => (
                    <div key={index} className="bg-white rounded-b-[3px]">
                        <img className="h-[15rem] w-[35rem] rounded-t-[3px]" src={homes.images[0].url}/>
                        <div className="p-[1rem]">
                            <address className="font-bold">{homes.adress1}</address>
                            <address className="mt-2">{homes.postalcode} {homes.city}</address>
                            <address className="mt-2">
                                <span className="font-bold">{homes.type}</span> • Ejerudgift: {homes.gross} kr.
                            </address>
                            <div className="border-t border-gray-300 mt-2"></div>
                            <div className="flex justify-between items-center mt-2">
                                <span className="font-bold text-[1.5rem] px-[0.5rem] mr-[1rem]" style={{backgroundColor: getEnergyLabelsColor(homes.energylabel), color: "#FFFFFF"}}>{homes.energylabel}</span>
                                <span className="ml-[0.5rem]">{homes.rooms} værelser • {homes.livingspace} m²</span>
                                <div className="flex justify-end ml-auto">
                                <span className="font-bold">Kr. {homes.payment}</span>
                                </div>
                            </div>
                            </div>
                    </div>
                ))}
            </div>
        </main>
    )
}