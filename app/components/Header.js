'use client'
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useEffect, useState } from 'react'
import ReactCountryFlag from 'react-country-flag'
import Avisos from './Avisos'

const navigation = [
    { name: 'Comprar SIM', href: '/conserva_numero', current: false },
    { name: 'Conserva tu número', href: '/conserva_numero', current: false },
    { name: 'Recargas', href: '/recargas_ysb', current: false },
    { name: 'Celulares', href: '/', current: false },
    { name: 'Promociones', href: '/recargas', current: false },
]

const subnavigation = [
    { name: 'Personal', href: '/', current: false },
    { name: 'Emprendedores y Negocios', href: '/', current: false },
    { name: 'Gobierno', href: '/', current: false },
    { name: 'Convenios', href: '/', current: false },
]

const greennavigation = [
    { name: 'Soporte', href: '/', current: false },
    { name: 'Tiendas', href: '/', current: false },
    { name: 'Cobertura', href: '/', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
const Header = () => {
    const [isMenuFixed, setIsMenuFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsMenuFixed(true);
            } else {
                setIsMenuFixed(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <Disclosure as="nav" className={`fixed z-20 w-full -mt-2 transition-all duration-300 ease-in-out ${isMenuFixed ? 'bg-white' : 'bg-white'}`}>

            <div className='bg-[#EDEDED]'>
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex items-center justify-between">
                        {/*MENU 1*/}
                        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="hidden sm:flex flex-col items-center justify-center">
                                <div className="flex">
                                    {subnavigation.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            aria-current={item.current ? 'page' : undefined}
                                            className={
                                                classNames(
                                                    item.current ? 'text-[#9B2649] font-bold! bg-white' : 'text-[#444444] font-normal',
                                                    'px-4 text-[13px] font-normal relative regular-menu-item pt-4 pb-2',
                                                )}
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                        {/*MENU 2*/}
                        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="hidden sm:flex flex-col items-center justify-center">
                                <div className="flex">
                                    <a
                                        href="#"
                                        className='px-4 pt-4 pb-2 text-[13px] font-normal relative regular-menu-item text-[#1F7556] flex gap-2'
                                    >
                                        <span><img src="/images/whatsapp.svg" alt="whatsapp" /></span>
                                        <b>+52 (56) 4469 7852</b>
                                    </a>
                                    {greennavigation.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            aria-current={item.current ? 'page' : undefined}
                                            className={
                                                classNames(
                                                    item.current ? 'hover:text-[#1F7556]' : 'hover:text-[#1F7556]',
                                                    isMenuFixed ? 'text-[#1F7556] hover:text-[#1F7556]!' : 'text-[#1F7556]',
                                                    'px-4 pt-4 pb-2 text-[13px] font-normal relative regular-menu-item',
                                                )}
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                        {/*MENU IDIOMA*/}
                        <div className="absolute inset-y-0 right-0 hidden sm:flex md:flex lg:flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 pt-4 pb-2">
                            <Menu as="div" className="relative">
                                <div>
                                    <MenuButton className="relative flex items-center gap-2 rounded-full text-sm focus:outline-hidden">
                                        <ReactCountryFlag countryCode="mx" svg />
                                        <span className="absolute -inset-1.5" />
                                        <span className="text-[#888888] text-[13px] uppercase">Español</span>
                                    </MenuButton>
                                </div>
                                <MenuItems
                                    transition
                                    className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                                >
                                    <MenuItem>
                                        <a
                                            href="#"
                                            className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                                        >
                                            EN
                                        </a>
                                    </MenuItem>
                                </MenuItems>
                            </Menu>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    {/*LOGO*/}
                    <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                        {/* Mobile menu button*/}
                        <DisclosureButton className={`group relative inline-flex items-center justify-center rounded-md p-2 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset ${isMenuFixed ? 'text-[#0A0A2C]' : 'text-[#0A0A2C]'}`}>
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
                            <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
                        </DisclosureButton>
                    </div>
                    {/*MENU 3*/}
                    <div className="flex flex-1 items-center sm:items-stretch sm:justify-start">
                        <div className="flex shrink-0 items-center">
                            <a href="/">
                                {isMenuFixed ?
                                    <>
                                        <img
                                            alt="YSB"
                                            src="/logo.svg"
                                            width={126}
                                            height={40}
                                            className='hidden'
                                        />
                                        <img
                                            alt="YSB"
                                            src="/logo.svg"
                                            width={126}
                                            height={40}
                                            className='block'
                                        />
                                    </>
                                    :
                                    <img
                                        alt="YSB"
                                        src="/logo.svg"
                                        width={126}
                                        height={40}
                                        className='block'
                                    />}
                            </a>
                        </div>
                        <div className="hidden sm:mx-auto sm:flex flex-col items-center justify-center">
                            <div className="flex">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        aria-current={item.current ? 'page' : undefined}
                                        className={
                                            classNames(
                                                item.current ? 'hover:text-[#232323]' : 'hover:text-[#232323]',
                                                isMenuFixed ? 'text-[#232323] hover:text-[#232323]!' : 'text-[#232323]',
                                                'px-4 text-[12px] sm:text-[15px] md:text-[15px] lg:text-[15px] font-normal relative regular-menu-item border-r last-of-type:border-0 border-[#B85564]',
                                            )}
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/*MENU SESION*/}
                    <div className="absolute hidden sm:flex md:flex lg:flex inset-y-0 right-0 items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <a
                            href='test'
                            className="relative transition-all ease-in-out duration-300 flex items-center gap-2 text-[#232323] text-[12px] sm:text-[15px] md:text-[15px] lg:text-[15px]"
                        >
                            Inicia sesión
                            <span className="flex items-center justify-center px-1 py-1 bg-[#BA9560] rounded-full text-white material-symbols-outlined">
                                account_circle
                            </span>
                        </a>
                    </div>
                </div>
            </div>

            {/*MENU MOBILE*/}
            <DisclosurePanel className="sm:hidden bg-[#0A0A2C]">
                <div className="space-y-1 px-2 pt-2 pb-3">
                    {navigation.map((item) => (
                        <DisclosureButton
                            key={item.name}
                            as="a"
                            href={item.href}
                            aria-current={item.current ? 'page' : undefined}
                            className={classNames(
                                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                'block rounded-md px-3 py-2 text-base font-medium',
                            )}
                        >
                            {item.name}
                        </DisclosureButton>
                    ))}
                    <hr className='border-white/20'/>
                    {subnavigation.map((item) => (
                        <DisclosureButton
                            key={item.name}
                            as="a"
                            href={item.href}
                            aria-current={item.current ? 'page' : undefined}
                            className={classNames(
                                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                'block rounded-md px-3 py-2 text-base font-medium',
                            )}
                        >
                            {item.name}
                        </DisclosureButton>
                    ))}
                    <hr className='border-white/20'/>
                    {greennavigation.map((item) => (
                        <DisclosureButton
                            key={item.name}
                            as="a"
                            href={item.href}
                            aria-current={item.current ? 'page' : undefined}
                            className={classNames(
                                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                'block rounded-md px-3 py-2 text-base font-medium',
                            )}
                        >
                            {item.name}
                        </DisclosureButton>
                    ))}
                </div>
            </DisclosurePanel>

            <Avisos/>

        </Disclosure>
    )
}
export default Header;
