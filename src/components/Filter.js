export default function Filter() {
    return (
        <div className="w-[100%]">
            <div className="">
            <div className="">
                <p className="font-semibold text-[1.2rem] pb-[1rem]">
                    <span className="border-[#162A41] text-center border-b-[5px] pb-2">Søg</span> efter dit drømmehus
                </p>
                </div>
                <div className="pt-[1rem]">
                    <div className="w-[15%]">
                        <label className="text-gray-700 text-[#333333]">Ejendomstype
                        <select className="w-full p-2 text-[#7B7B7B] mt-[1rem] border-[#D3DEE8] border-[1.5px]">
                            <option disabled value="">Ejendomstype</option>
                            <option value="villa">Villa</option>
                            <option value="landejendom">Landejendom</option>
                            <option value="ejerlejlighed">Ejerlejlighed</option>
                            <option value="byhus">Byhus</option>
                        </select>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}