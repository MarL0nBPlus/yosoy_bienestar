// In AccordionItem.js
import { useState } from 'react';
import HtmlParser from 'react-html-parser';

export default function AccordionItem({ question, answer, logos, isFaq, idx }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => setIsOpen(!isOpen);

    return (
        <div className={`${isFaq ? "border-y border-[#BA956040] bg-[#FFFDF7]" : ""} py-2`}>
            <div className={`${isFaq ? "" : "border-2 border-[#E1E1E1] rounded-[10px] py-3 px-2 sm:px-10 md:px-10 lg:px-10"} max-w-7xl mx-auto`}>
                <button className={`${isFaq ? "uppercase text-[17px] text-[#4A4A4A]" : "text-[12px] sm:text-[20px] md:text-[20px] lg:text-[20px]"} cursor-pointer w-full flex justify-between items-center`} onClick={toggleOpen}>
                    {
                        isFaq ?
                            question
                            :
                            <div className='flex text-left gap-6 items-center'>
                                <span className='p-4 text-[14px] sm:text-[30px] md:text-[30px] lg:text-[30px] text-[#9B264A] font-bold bg-[#E1E1E1] rounded-full flex justify-center items-center w-8 h-8 sm:w-[50px] md:w-[50px] lg:w-[50px] sm:h-[50px] md:h-[50px] lg:h-[50px]'>{idx + 1}</span>
                                {question}
                            </div>
                    }
                    {
                        isFaq ?
                            <span className='text-[26px] text-[#9B264A] font-bold'>
                                {isOpen ? "-" : "+"}
                            </span>
                            :
                            ""
                    }
                </button>
                {isOpen && <div className='py-4'>
                    {HtmlParser(answer)}
                    {
                        !isFaq ?
                            <div className='mt-8 grid gap-6 grid-cols-2 sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-5'>
                                {logos.map((item, idx) => (
                                    <img key={idx} src={`/images/logos-accordion/${item}`} alt="" />
                                ))}
                            </div>
                            :
                            ""
                    }
                </div>}
            </div>
        </div>
    );
}