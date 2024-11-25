import Image from "next/image";
import playStore from "../../public/images/play-store.png"
import appleIcon from "../../public/images/apple-icon.png"
import phoneLeft from "../../public/images/phone-left.png"
import phoneRight from "../../public/images/phone-right.png"

export default function Ad() {
    return (
        <main className="bg-[#162A41] w-[100%] text-white flex justify-center items-center z-[5]">
            <div className="w-[38%]">
                <h2 className="font-bold text-[2.3rem]">Hold dig opdateret <br/> på salgsprocessen</h2>
                <p className="py-[2rem] text-[1.05rem]">Når du sælger din bolig hos Din Mægler, kommunikerer du nemt med den <br/> ansvarlige mægler eller butik med vores app. Her kan du også se statistik på <br/>interessen for din bolig i alle vores salgskanaler.</p>
                <div className="flex w-[100%] items-center">
                    <button className="bg-white text-[#162A41] font-semibold flex px-[1.5rem] py-[0.9rem] border-white border-[1px] rounded-[3px] mr-[1rem]">
                        <Image className="mr-[0.5rem]" src={playStore} alt="play store icon"/>
                        Google Play
                        </button>
                        <button className="bg-[#162A41] border-white border-[1px] flex font-semibold px-[1.5rem] py-[0.9rem] rounded-[3px]">
                            <Image className="mr-[0.5rem]" src={appleIcon} alt="apple store icon"/>
                            Apple Store
                    </button>
                </div>
            </div>
                <div className="flex pt-[5rem] w-[22%]">
                    <Image src={phoneLeft} alt="phone turning to the left side"/>
                    <Image className="absolute ml-[11rem] z-[-1]" src={phoneRight} alt="phone turning to the right side"/>
                </div>
            <div>

            </div>
        </main>
    )
}