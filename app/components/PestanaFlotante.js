"use client"
const PestanaFlotante = () => {
    const handleComentarios = () => {
        alert("Comentarios");
    }
    return (
        <div className="fixed -right-28 top-[45%] -rotate-90 z-50 flex flex-row-reverse items-center justify-center gap-4">
            <button type="button"
                onClick={() => handleComentarios}
                className="text-white bg-[#9B264A] hover:text-black rounded-t-[10px] py-2 px-12 flex items-center justify-center w-full overflow-hidden text-[17px] relative group cursor-pointer"

            >
                <span className="absolute w-[1000px] h-0 transition-all duration-300 origin-center rotate-0 -translate-x-20 bg-black top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                <span className="relative text-white transition duration-300 group-hover:text-white ease">Comentarios</span>
            </button>

            <a className="w-[50px] rotate-90 h-9 rounded-full p-1 bg-[#0FA82B] hover:bg-[#0c8522] transition-all flex justify-center items-center" target="_blank" href="https://wa.me/5644697852?text=Hola%20me%20gustaría%20saber%20de..."><img src="/images/whats.svg" alt="" /></a>
        </div>
    )
}
export default PestanaFlotante