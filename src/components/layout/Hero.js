import Image from "next/image";
import Right from "../icons/Right";

export default function Hero(){
    return(
<section className="mb-12 mt-6 rounded-lg overflow-hidden">
  <div
    className="relative overflow-hidden bg-cover overlay-20 bg-no-repeat bg-[50%] h-[500px]
     bg-[url('https://media.istockphoto.com/id/1428737062/photo/empty-wooden-table-top-with-lights-bokeh-on-blur-restaurant-background.webp?b=1&s=170667a&w=0&k=20&c=bmQyPVwhLAB_FN9glJrREyPxzmIQPv5TOFcqcXHy2pw=')]">
    <div
      className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed">
      <div className="flex h-full items-center justify-center">
        <div className="px-6 text-center text-white md:px-12">
          <h1 className="mt-6 mb-16 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">
          Each Bite  <br /><span className="text-primary">Narrates a Tale</span>
          </h1>
          <a className="mb-2 inline-block rounded-full border-2 border-neutral-50 
          px-[46px] pt-[14px] pb-[12px] text-sm font-medium uppercase leading-normal
           text-neutral-50 transition duration-150 ease-in-out
           bg-primary hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 md:mr-2 md:mb-0"
            data-te-ripple-init data-te-ripple-color="light" href="#!" role="button">Get started</a>
          <a className="inline-block rounded-full px-12 pt-4 pb-3.5 text-sm font-medium 
          uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out
           hover:bg-primary hover:bg-opacity-25 hover:text-neutral-200 focus:text-neutral-200 focus:outline-none focus:ring-0 active:text-neutral-300"
            data-te-ripple-init data-te-ripple-color="light" href="#!" role="button">Learn more</a>
        </div>
      </div>
    </div>
  </div>

  <div
    className="-mt-2.5 text-white dark:text-neutral-800 md:-mt-4 lg:-mt-6 xl:-mt-10 h-[50px] scale-[2] origin-[top_center]">
    <svg viewBox="0 0 2880 48" xmlns="http://www.w3.org/2000/svg">
      <path d="M 0 48 L 1437.5 48 L 2880 48 L 2880 0 L 2160 0 C 1453.324 60.118 726.013 4.51 720 0 L 0 0 L 0 48 Z"
        fill="currentColor"></path>
    </svg>
  </div>
</section>
        // <section className='hero md:mt-4'>
        //     <div className='py-8 md:py-12'>
        //         <h1 className='text-4xl font-semibold'>
        //             Flavors Bistro: Where<br /> Every <span className='text-primary'>Bite</span><br /> Tells a &nbsp; Story</h1>
        //         <p className='my-6 text-gray-600 text-md'> A culinary haven where diverse tastes meet,<br/>
        //             creating a symphony of delightful experiences for your palate.</p>
        //             <div className='flex gap-4 text-sm'>
        //                 <button className='bg-primary gap-2 flex justify-center uppercase items-center  text-white px-4 py-2 rounded-full'>
        //                     Order Now
        //                     <Right />
        //                     </button>
        //                 <button className='flex gap-2 py-2 items-center text-gray-600 font-semibold'>
        //                     Learn More
        //                     <Right />
        //                     </button>
        //             </div>
        //     </div>
        //     <div className='relative hidden md:block'>
        //         <Image src={'/res2.png'} layout={'fill'} objectFit={'contain'} alt='restaurant' />
        //     </div>
        // </section>
    );
}