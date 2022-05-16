import Image from "next/image";
import { ChevronDownIcon, PlusIcon, SearchIcon, ShoppingCartIcon } from '@heroicons/react/solid'

export default function Header() {
    return <>
        <header className="bg-blue-600 overflow-hidden hidden lg:block">
            <div className="container flex items-center justify-center space-x-6 text-white py-2 ">
                <div className="flex flex-col">
                    <Image src='/flipkart-logo-wide.png' width={90} height={22} layout='fixed' />
                    <div className="flex flex-row items-center">
                        <a href="#" className=" text-sm mr-2 italic shrink-0">Explore plus</a>
                        <Image src='/star.png' width={14} height={14} />
                    </div>
                </div>
                <div className="flex shrink-0 items-center bg-white ">
                    <input placeholder="Search for products, brands and more" className="font-semibold text-[15px] w-[350px] py-2 px-4 outline-none text-gray-600" />
                    <SearchIcon className="h-5 text-gray-700 px-4" />
                </div>
                <div>
                    <button className="py-1 px-8 bg-white text-blue-500 font-semibold">Login</button>
                </div>
                <div className="flex flex-nowrap space-x-6 font-medium pl-6 shrink-0">
                    <div>Become a Seller</div>
                    <div className="flex shrink-0 items-center">More<ChevronDownIcon className="h-4" /> </div>
                    <div className=" flex shrink-0 items-center"><ShoppingCartIcon className="h-5 mr-1" /> Cart</div>
                </div>
            </div>
        </header>

        <header className="mobile-menu bg-blue-600 text-white lg:hidden">
            <div className="container flex items-center justify-between space-x-3 py-3">
                <div className="flex items-center space-x-3">
                    <div className="text-white">
                        <svg fill="white" viewBox="0 0 100 80" width="28" height="28">
                            <rect width="70" height="8"></rect>
                            <rect y="25" width="70" height="8"></rect>
                            <rect y="50" width="70" height="8"></rect>
                        </svg>
                    </div>
                    <div className="flex flex-col">
                        <img className="w-16 h-auto" src='/flipkart-logo-wide.png' width={90} height={15} />
                        <div className="flex flex-row items-center">
                            <a href="#" className=" text-sm mr-2 italic shrink-0">Explore plus</a>
                            <Image src='/star.png' width={14} height={14} />
                        </div>
                    </div>
                </div>
                <div className="right flex items-center shrink-0 space-x-6">
                    <PlusIcon className="h-5 rounded-sm text-blue-500 bg-white py-1" />
                    <ShoppingCartIcon className="h-5" />
                    <div>Login</div>

                </div>
            </div>
        </header>
    </>
}