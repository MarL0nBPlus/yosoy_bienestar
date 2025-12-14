const ProductFeat = ({ product }) => {
    return (
        <section className="bg-[#F2F2F2] pt-20 pb-0 px-4 sm:px-0 md:px-0 lg:px-0">
            {product.featured_title_1 ?
                <div className="max-w-5xl mx-auto flex flex-col sm:flex-row md:flex-row lg:flex-row gap-8 items-center mb-8">
                    <div className="flex-1">
                        <img className="max-h-[400px]!" src={`/images/products/${product.featured_photo_1}`} alt="product" />
                    </div>
                    <div className="flex-1">
                        <h2 className="text-[#4A4A4A] text-[30px] font-bold">{product.featured_title_1}</h2>
                        <p className="text-[#777777]">{product.featured_text_1}</p>
                    </div>
                </div>
                :
                ""
            }
            {
                product.featured_title_2 ?
                    <div className="max-w-5xl mx-auto flex flex-col sm:flex-row md:flex-row lg:flex-row gap-8 items-center">
                        <div className="flex-1">
                            <h2 className="text-[#4A4A4A] text-[30px] font-bold">{product.featured_title_2}</h2>
                            <p className="text-[#777777]">{product.featured_text_2}</p>
                        </div>
                        <div className="flex-1">
                            <img className="max-h-[400px]!" src={`/images/products/${product.featured_photo_2}`} alt="product" />
                        </div>
                    </div>
                    :
                    ""
            }
            {
                product.featured_title_3 ?
                    <div className="max-w-5xl mx-auto flex flex-col sm:flex-row md:flex-row lg:flex-row gap-8 items-center ">
                        <div className="flex-1">
                            <img className="max-h-[400px]!" src={`/images/products/${product.featured_photo_3}`} alt="product" />
                        </div>
                        <div className="flex-1">
                            <h2 className="text-[#4A4A4A] text-[30px] font-bold">{product.featured_title_3}</h2>
                            <p className="text-[#777777]">{product.featured_text_3}</p>
                        </div>
                    </div>
                    :
                    ""
            }
        </section>
    )
}
export default ProductFeat