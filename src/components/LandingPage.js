export default function LandingPage() {
    return (
        <main className="h-full">
            <div className="bg-hero h-[40rem] bg-no-repeat bg-cover bg-center justify-center flex flex-col items-center">
                <h1 className="text-white text-[2.5rem] font-semibold text-outline mb-[1rem]">Søg efter din drømmebolig</h1>
                <div className="bg-white w-[50%] h-[28%] p-[1rem]">
                    <p className="font-semibold text-[1.2rem]"><span className="border-[#162A41] border-b-[5px] pb-[0.2rem]">Søg</span> blandt 158 boliger til salg i 74 butikker</p>
                    <form className="mt-[1.2rem] flex flex-col">
                        <label className="text-black mt-[0.7rem] text-[1.1rem]">Hvad skal din næste bolig indeholde?
                        <div className="flex items-center w-[100%]">
                            <input type="text" className="p-[0.5rem] border-[#F3F1F1] border-2 py-[0.8rem] w-[90%] mr-[0.5rem]" placeholder="Søg på fx. glaskeramisk komfur, bryggers, kælder eller lignende"/>
                            <button className="px-[2.5rem] py-[0.9rem] bg-[#162A41] text-white rounded-[3px]">Søg</button>
                        </div>
                        </label>
                    </form>
                </div>
            </div>
        </main>
    )
}