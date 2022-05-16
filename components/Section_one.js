import "@heroicons/react/solid"
import "@heroicons/react/outline"
import Image from "next/image"

const data = [
    { image: "/furnishing.webp", title: 'Best of furnishing', offer: "Upto 80% OFF", desc: "Cushions, Pillows & more" },
    { image: "/bedsheet.webp", title: 'Cotton Double Bedsheet', offer: "From ₹ 189", desc: "Best Selling...!" },
    { image: "/kitchen.webp", title: 'Kitchen and Dinning Essentials', offer: "From ₹ 199", desc: "Best Discounts!" },
    { image: "/shoes.webp", title: 'Sparks, Bata, Campus', offer: "From ₹ 299", desc: "Men's Casual Shoes" },
    { image: "/essentials.webp", title: 'Grooming Essentials', offer: "Min 20% OFF", desc: "Indulekha, Himalaya & more" },
    { image: "/car.webp", title: 'Remote Control Cars', offer: "From ₹ 499", desc: "Toys for childrens" },
    { image: "/watch.webp", title: 'Sonata, Flipkart Watches', offer: "Min 50% OFF", desc: "Purchase branded watches," },
]
export default function Section_one() {
    return <>
        <div className=" mt-3">
            <div className="container p-0">
                <div className="flex gap-2">
                    <div className="w-full md:w-10/12">
                        <div className="flex flex-row shrink-0 items-center justify-between bg-white p-3">
                            <div className="flex  items-center">
                                <h2 className="text-xl font-semibold mr-4">Deals of the Day</h2>
                                <Image className="pt-4 block" src='/clock.svg' height={16} width={16} objectFit='cover' />
                                <span className="text-sm  md:text-basetext-gray-500">18 : 35 : 10 Left</span>
                            </div>
                            <button className="font-semibold text-large py-2 px-5 bg-blue-500 text-white">View All</button>
                        </div>
                        <hr className="" />
                        <div className="flex gap-8 px-4 py-5 bg-white overflow-hidden overflow-x-scroll">
                            {data.map((item) =>
                                <div className="flex flex-col">
                                    <Image src={item.image} height={130} width={130} layout='fixed' objectFit="contain" />
                                    <h4 className="font-medium text-sm text-center mt-2">{item.title}</h4>
                                    <p className="text-sm text-green-600 text-center my-1">{item.offer}</p>
                                    <p className="text-sm font-medium text-gray-500 text-center">{item.desc}</p>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="hidden md:block w-2/12 p-1 bg-white">
                        <div className="relative h-[300px]">
                            <Image src="/motorola.webp" class="aboslute" layout="fill" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}