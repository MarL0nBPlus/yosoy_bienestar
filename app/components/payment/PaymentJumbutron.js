const PaymentJumbutron =({title, text})=>{
    return(
        <section className="pb-22 pt-52 sm:pt-44 md:pt-44 lg:pt-44 bg-[#B85564] px-4 sm:px-0 md:px-0 lg:px-0">
            <div className="max-w-7xl mx-auto flex flex-col gap-4 justify-between items-center">
                <h2 className="text-white text-[50px] font-bold text-center">{title}</h2>
                <p className="text-white text-[12px] sm:text-[20px] md:text-[20px] lg:text-[20px] text-center">{text}</p>
            </div>
        </section>
    )
}
export default PaymentJumbutron

5776392