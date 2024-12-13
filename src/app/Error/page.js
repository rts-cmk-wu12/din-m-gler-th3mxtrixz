import Link from "next/link";

export default function Error() {
    return (
    <main className="flex flex-col items-center justify-center h-[80vh] bg-blue-100 text-center">
        <h2 className="text-[10rem] font-bold relative z-[10] text-white">Hov!
            <div className="absolute inset-0 top-[9rem] h-[5rem] bg-[#162A41] -z-10"></div>
        </h2>
            <p className="text-[1.5rem] font-semibold mt-4">Du er havnet på en side som ikke findes!</p>
            <p className="mt-[0.5rem]">Det er vi kede af! Vi har sendt en besked af sted til vores <br/> internetbureau, og bedt dem se på fejlen.</p>
                <Link href="/" className="mt-6 px-6 py-3 bg-[#162A41] text-white font-medium rounded hover:bg-blue-800">Tilbage til forsiden</Link>
    </main>
    )
}