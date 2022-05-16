import Image from "next/image";
import {
  ChevronDownIcon,
  PlusIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/solid";

export default function Header() {
  return (
    <>
      <header className="hidden overflow-hidden bg-blue-600 lg:block">
        <div className="container flex items-center justify-center space-x-6 py-2 text-white ">
          <div className="flex flex-col">
            <Image
              src="/flipkart-logo-wide.png"
              width={90}
              height={22}
              layout="fixed"
            />
            <div className="flex flex-row items-center">
              <a href="#" className=" mr-2 shrink-0 text-sm italic">
                Explore plus
              </a>
              <Image src="/star.png" width={14} height={14} />
            </div>
          </div>
          <div className="flex shrink-0 items-center bg-white ">
            <input
              placeholder="Search for products, brands and more"
              className="w-[350px] py-2 px-4 text-[15px] font-semibold text-gray-600 outline-none"
            />
            <SearchIcon className="h-5 px-4 text-gray-700" />
          </div>
          <div>
            <button className="bg-white py-1 px-8 font-semibold text-blue-500">
              Login
            </button>
          </div>
          <div className="flex shrink-0 flex-nowrap space-x-6 pl-6 font-medium">
            <div>Become a Seller</div>
            <div className="flex shrink-0 items-center">
              More
              <ChevronDownIcon className="h-4" />{" "}
            </div>
            <div className=" flex shrink-0 items-center">
              <ShoppingCartIcon className="mr-1 h-5" /> Cart
            </div>
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
              <img
                className="h-auto w-16"
                src="/flipkart-logo-wide.png"
                width={90}
                height={15}
              />
              <div className="flex flex-row items-center">
                <a href="#" className=" mr-2 shrink-0 text-sm italic">
                  Explore plus
                </a>
                <Image src="/star.png" width={14} height={14} />
              </div>
            </div>
          </div>
          <div className="right flex shrink-0 items-center space-x-6">
            <PlusIcon className="h-5 rounded-sm bg-white py-1 text-blue-500" />
            <ShoppingCartIcon className="h-5" />
            <div>Login</div>
          </div>
        </div>
      </header>
    </>
  );
}
