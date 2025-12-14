const featured = [
    {
        photo: "/images/dummie-phone.png",
        name: "Brand",
        text: "PRODUCT MODEL AND NAME",
        price: "00,000.00",
        currentPricie: "00,000.00",
        url: "#",
    },
    {
        photo: "/images/dummie-phone.png",
        name: "Brand",
        text: "PRODUCT MODEL AND NAME",
        price: "00,000.00",
        currentPricie: "00,000.00",
        url: "#",
    },
    {
        photo: "/images/dummie-phone.png",
        name: "Brand",
        text: "PRODUCT MODEL AND NAME",
        price: "00,000.00",
        currentPricie: "00,000.00",
        url: "#",
    },
    {
        photo: "/images/dummie-phone.png",
        name: "Brand",
        text: "PRODUCT MODEL AND NAME",
        price: "00,000.00",
        currentPricie: "00,000.00",
        url: "#",
    },
    {
        photo: "/images/dummie-phone.png",
        name: "Brand",
        text: "PRODUCT MODEL AND NAME",
        price: "00,000.00",
        currentPricie: "00,000.00",
        url: "#",
    },
    {
        photo: "/images/dummie-phone.png",
        name: "Brand",
        text: "PRODUCT MODEL AND NAME",
        price: "00,000.00",
        currentPricie: "00,000.00",
        url: "#",
    },

]

const FeaturedProducts = () => {
    return (
        <section className="py-20 px-4 sm:px-0 md:px-0 lg:px-0">
            {
                /*
                <div className="py-8 max-w-7xl mx-auto flex flex-col sm:flex-row md:flex-row lg:flex-row justify-between sm:items-center md:items-center lg:items-center">
                <p className="text-[#4A4A4A]"><strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</strong></p>
                <a className="text-[#9B2649] hover:text-[#8E6202] transition-all" href="#">Action chips</a>
            </div>
            <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-6 md:grid-cols-6 lg:grid-cols-6 gap-6">
                {featured.map((item, idx) => (
                    <div key={idx} className="relative pt-8">
                        <button className="bg-[#B85564] text-white rounded-full p-2 w-8 h-8 flex justify-center items-center absolute top-1 right-1 cursor-pointer hover:bg-[#9B264A] transition-all">
                            <span className="material-symbols-outlined text-[18px]!">
                                add_shopping_cart
                            </span>
                        </button>
                        <div className="mb-4 max-w-[80%] h-[200px] overflow-hidden mx-auto">
                            <img className="w-full h-full object-cover" src={item.photo} alt="" />
                        </div>
                        <h2 className="text-[#4A4A4A] text-[17px] font-medium">{item.name}</h2>
                        <p className="text-[#4A4A4A] text-[12px] sm:text-[20px] md:text-[20px] lg:text-[20px] font-light">{item.text}</p>
                        <p className="text-[#4A4A4A] text-[17px] font-medium line-through">{item.price}</p>
                        <h3 className="text-[#4A4A4A] text-[25px] font-bold">{item.currentPricie}</h3>
                        <a
                            className="text-white mt-4 bg-[#9B264A] font-semibold hover:text-black rounded-[50px] py-2 px-8 flex items-center justify-center w-fit overflow-hidden uppercase text-[14px] relative group cursor-pointer"
                            href={item.url}
                        >
                            <span className="absolute w-[500px] h-0 transition-all duration-300 origin-center rotate-0 -translate-x-20 bg-black top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                            <span className="relative transition duration-300 group-hover:text-white ease">ver más planes</span>
                        </a>
                    </div>
                ))}
            </div>
                */
            }
            <div className="max-w-7xl mx-auto flex gap-4 flex-col sm:flex-row md:flex-row lg:flex-row">
                <img src="/images/app-bienestar.png" alt="app" />
            </div>
        </section>
    )
}
export default FeaturedProducts