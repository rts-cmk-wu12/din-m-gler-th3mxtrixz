export default function Register() {
    return (
                <section>
            <div className="banner2 flex justify-center items-center flex-col text-white">
                <h2 className="font-semibold text-[1.5rem]">Account Register</h2>
                <div className="flex flex-row justify-between w-[5%] mt-[1rem]">
                    <a href="/" className="hover:text-orange-400">Home</a>
                    <span>|</span>
                    <a href="/LogIn" className="hover:text-orange-400">Login</a>
                </div>
            </div>
            <div className="flex items-center justify-center my-[5rem]">
                <div className="w-[40%] p-[1.5rem] bg-white border-[#D3DEE8] border-[1.95px] shadow px-[10rem] py-[3rem]">
                    <h2 className="font-semibold text-center text-[1.3rem] mb-[1rem]">Opret bruger hos Din Mægler</h2>
                <form>
                    <div className="mb-[1rem]">
                        <label className="font-semibold text-gray-700">Fulde navn</label>
                        <input type="text" placeholder="Fulde navm" className="w-full border-[#D3DEE8] border-[1.95px] h-[3rem] p-[0.5rem] mt-[0.5rem]"/>
                    </div>
                    <div className="mb-[1rem]">
                        <label className="font-semibold text-gray-700">Email adresse</label>
                        <input type="email" placeholder="Email adresse" className="w-full border-[#D3DEE8] border-[1.95px]  h-[3rem] p-[0.5rem] mt-[0.5rem]"/>
                    </div>
                    <div className="mb-[1rem]">
                        <label className="font-semibold text-gray-700">Password</label>
                        <input type="password" placeholder="Password" className="w-full border-[#D3DEE8] border-[1.95px]  h-[3rem] p-[0.5rem] mt-[0.5rem]"/>
                    </div>
                    <div className="mb-[1rem]">
                        <label className="font-semibold text-gray-700">Bekræft password</label>
                        <input type="password" placeholder="Bekræft password" className="w-full border-[#D3DEE8] border-[1.95px]  h-[3rem] p-[0.5rem] mt-[0.5rem]"/>
                    </div>
                <button type="submit" className="w-full h-[3rem] text-white bg-[#162A41]">Opret Bruger</button>
            </form>
            </div>
        </div>
        </section>
    )
}