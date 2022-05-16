import "@heroicons/react/solid";
import "@heroicons/react/outline";
import Image from "next/image";

const data = [
  {
    image: "/furnishing.webp",
    title: "Best of furnishing",
    offer: "Upto 80% OFF",
    desc: "Cushions, Pillows & more",
  },
  {
    image: "/bedsheet.webp",
    title: "Cotton Double Bedsheet",
    offer: "From ₹ 189",
    desc: "Best Selling...!",
  },
  {
    image: "/kitchen.webp",
    title: "Kitchen and Dinning Essentials",
    offer: "From ₹ 199",
    desc: "Best Discounts!",
  },
  {
    image: "/shoes.webp",
    title: "Sparks, Bata, Campus",
    offer: "From ₹ 299",
    desc: "Men's Casual Shoes",
  },
  {
    image: "/essentials.webp",
    title: "Grooming Essentials",
    offer: "Min 20% OFF",
    desc: "Indulekha, Himalaya & more",
  },
  {
    image: "/car.webp",
    title: "Remote Control Cars",
    offer: "From ₹ 499",
    desc: "Toys for childrens",
  },
  {
    image: "/watch.webp",
    title: "Sonata, Flipkart Watches",
    offer: "Min 50% OFF",
    desc: "Purchase branded watches,",
  },
];
export default function Section_one() {
  return (
    <>
      <div className=" mt-3">
        <div className="container p-0">
          <div className="flex gap-2">
            <div className="w-full md:w-10/12">
              <div className="flex shrink-0 flex-row items-center justify-between bg-white p-3">
                <div className="flex  items-center">
                  <h2 className="mr-4 text-xl font-semibold">
                    Deals of the Day
                  </h2>
                  <Image
                    className="block pt-4"
                    src="/clock.svg"
                    height={16}
                    width={16}
                    objectFit="cover"
                  />
                  <span className="md:text-basetext-gray-500  text-sm">
                    18 : 35 : 10 Left
                  </span>
                </div>
                <button className="text-large bg-blue-500 py-2 px-5 font-semibold text-white">
                  View All
                </button>
              </div>
              <hr className="" />
              <div className="flex gap-8 overflow-hidden overflow-x-scroll bg-white px-4 py-5">
                {data.map((item) => (
                  <div key={item.image} className="flex flex-col">
                    <Image
                      src={item.image}
                      height={130}
                      width={130}
                      layout="fixed"
                      objectFit="contain"
                    />
                    <h4 className="mt-2 text-center text-sm font-medium">
                      {item.title}
                    </h4>
                    <p className="my-1 text-center text-sm text-green-600">
                      {item.offer}
                    </p>
                    <p className="text-center text-sm font-medium text-gray-500">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden w-2/12 bg-white p-1 text-gray-500  md:block">
              <div className="relative h-[300px]">
                <Image
                  src="/motorola.webp"
                  className="absolute"
                  layout="fill"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
