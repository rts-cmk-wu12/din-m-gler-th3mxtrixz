export default async function Houses() {
    const getAllHomes = await fetch(`https://dinmaegler.onrender.com/homes`)
    const data = await getAllHomes.json()

    console.log(data)
    return (
        <main className="bg-[#F8F8FB] mb-[10rem] w-[100%]">
            <div className="flex flex-col justify-center items-center text-center">
            <h1 className="text-[#263048] text-[2.5rem] font-bold mt-[5rem]">Udvalgte Boliger</h1>
            <p className="mt-[1rem] text-[1.1rem]">There are many variations of passages of Lorem Ipsum available but the this in <br/> majority have suffered alteration in some</p>
            </div>
            <div className="grid grid-cols-2 grid-rows-3 place-items-center px-[20rem] mt-[4rem]">
                {data.map((homes, index) => (
                    <div key={index} className="">
                        <img className="w-[25rem]" src={homes.images[0].url}/>
                    </div>
                ))}
            </div>
        </main>
    )
}