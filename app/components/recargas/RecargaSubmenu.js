const menu =[
    {
        logo:"internet.svg",
        color: "bg-[#9B2649]",
        url: "/recargas_ysb"
    },
    {
        logo:"cfe.svg",
        color: "bg-[#2B8D54]",
        url: "/recargas_cfe"
    }
] 

const RecargaSubmenu = ({active}) => {
    return (
        <section className="flex flex-col gap-8 mt-8">
            <div className="bg-[#F2F2F2] rounded-t-[20px] w-fit p-4 mx-auto flex flex-col sm:flex-row md:flex-row lg:flex-row gap-4 justify-center">
                {
                    menu.map((item, idx)=>(
                        <a key={idx} href={item.url} className={`${active === idx ? item.color : "mix-blend-difference opacity-25 hover:mix-blend-normal hover:opacity-100" } hover:${item.color} rounded-[15px] flex justify-center p-2 max-w-[300px] w-[300px]`}><img className="w-[100px]" src={`/images/${item.logo}`} alt="" /></a>
                    ))
                }
            </div>
        </section>
    )
}
export default RecargaSubmenu