import React from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Log from '../assests/logo.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'
const navigation = [
    { name: 'Home', link: '/' },
    { name: 'Products', link: '/product' },
    { name: 'Accessories', link: '/accessories' },
    { name: 'Contact', link: '/contact' },
]

const Navbar = () => {
    const handleclick = () => {
        console.log('click on link');
    }
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    return (
        <div  >
            <header className="inset-x-0 top-0 ">
                <nav className="flex items-center justify-between p-4 lg:px-8" aria-label="Global">
                    <div className="flex lg:flex-1">
                        <Link to='/'  className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img
                                className="h-16 w-auto"
                                src={Log}
                                 alt="no image"
                            />
                        </Link>
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-12">
                        {navigation.map((item) => (
                            <Link key={item.name} to={item.link} className="text-sm font-semibold leading-6 text-gray-900 hover:text-white hover:bg-black px-3 py-2 transition-all duration-300 rounded-2xl">
                                {item.name}
                            </Link>
                        ))}
                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                      
                    </div>
                </nav>
                <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                    <div className="fixed inset-0 z-50" />
                    <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <Link to='/' className="-m-1.5 p-1.5">
                                <span className="sr-only">Your Company</span>
                                <img
                                    className="h-16 w-auto"
                                    src={Log}
                                    alt=""
                                />
                            </Link>
                            <button
                                type="button"
                                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root ">
                            <div className="-my-6 divide-y divide-gray-500/10 ">
                                <div className="space-y-2 py-6 ">
                                    {navigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            to={item.link}
                                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900  hover:bg-gray-50 "
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                               
                            </div>
                        </div>
                    </Dialog.Panel>
                </Dialog>
            </header>
        </div>
    )
}

export default Navbar
