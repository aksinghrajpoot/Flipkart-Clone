const data = [
  { image: "/offers.webp", title: "Offers" },
  { image: "/grocerry.webp", title: "Grocery" },
  { image: "/mobiles.webp", title: "Mobiles" },
  { image: "/fashion.webp", title: "Fashion" },
  { image: "/electronics.webp", title: "Electronics" },
  { image: "/home.webp", title: "Home" },
  { image: "/appliances.webp", title: "Appliances" },
  { image: "/travel.webp", title: "Travel" },
  { image: "/toys.webp", title: "Toys & More" },
];

import Image from "next/image";

export default function Section_top() {
  return (
    <>
      <div className="section-top  bg-white shadow-md">
        <div className="container  flex shrink-0  items-start justify-start space-x-7 overflow-x-scroll py-3 md:justify-center md:space-x-14">
          {data.map((item) => (
            <div
              key={item.image}
              className="flex shrink-0 flex-col items-center"
            >
              <Image src={item.image} width={55} height={55} layout="fixed" />
              <h5 className="text-[14px] font-medium md:text-sm">
                {item.title}
              </h5>
            </div>
          ))}
        </div>
      </div>
      <div className="my-3">
        <div className="container h-[160px] bg-white p-3  md:h-[250px]">
          <img className=" h-full w-full" src="/hero-1.jpg" />
        </div>
      </div>
    </>
  );
}
