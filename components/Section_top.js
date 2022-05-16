const data = [
  { image: "/offers.webp", title: 'Offers' },
  { image: "/grocerry.webp", title: 'Grocery' },
  { image: "/mobiles.webp", title: 'Mobiles' },
  { image: "/fashion.webp", title: 'Fashion' },
  { image: "/electronics.webp", title: 'Electronics' },
  { image: "/home.webp", title: 'Home' },
  { image: "/appliances.webp", title: 'Appliances' },
  { image: "/travel.webp", title: 'Travel' },
  { image: "/toys.webp", title: 'Toys & More' },
]

import Image from "next/image";

export default function Section_top() {
  return <>
    <div className="section-top shadow-md bg-white">
      <div className="container flex  py-3 justify-start md:justify-center items-start shrink-0 space-x-7 md:space-x-14 overflow-x-scroll">
        {data.map((item) =>
          <div className="flex flex-col items-center shrink-0">
            <Image src={item.image} width={55} height={55} layout='fixed' />
            <h5 className="font-medium text-[14px] md:text-sm">{item.title}</h5>
          </div>
        )}
      </div>
    </div>
    <div className="my-3">
      <div className="container h-[160px] md:h-[250px] p-3  bg-white">
        <img className=" w-full h-full" src="/hero-1.jpg" />
      </div>
    </div>
  </>
}