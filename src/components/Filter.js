import { useState } from "react"

export default function Filter() {
    const [price, setPrice] = useState(0)

    function handlePriceSlider(event) {
        setPrice(event.target.value)

    }
    return (
        <div className="w-full flex pl-[23rem] pt-[2rem]">
            <div className="w-[100%]">
                <p className="font-semibold text-[1.2rem] pb-[1rem]"><span className="border-[#162A41] border-b-[5px] pb-[0.5rem]">Søg</span> efter dit drømmehus</p>
                <div className="flex items-center">
                    <div className="w-[20%]">
                        <label className="text-[#333333] font-medium">Ejendomstype</label>
                        <select className="w-[100%] block p-[0.5rem] mt-2 text-[#7B7B7B] border-[#D3DEE8] border-[1.5px] rounded">
                            <option disabled value="">Ejendomstype</option>
                            <option value="villa">Villa</option>
                            <option value="landejendom">Landejendom</option>
                            <option value="ejerlejlighed">Ejerlejlighed</option>
                            <option value="byhus">Byhus</option>
                        </select>
                    </div>
                    <div className="ml-[2rem] w-[30%]">
                        <label className="text-[#333333] block">Pris-interval</label>
                        <input type="range" min="0" max="12000000" value={price} onChange={handlePriceSlider} className="w-full appearance-none h-1 bg-[#D3DEE8] rounded-sm"/>
                        <div className="flex justify-between mt-1 text-sm text-[#7B7B7B]">
                            <span>0 kr.</span>
                            <span>12.000.000 kr.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}