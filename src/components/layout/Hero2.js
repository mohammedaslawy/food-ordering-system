
export default function Hero2() {
    
    
    return (
        <section class="mb-12 mt-4 bg-gray-100">

            

            <div class="bg-neutral-50 px-6 py-12 text-center rounded-lg dark:bg-neutral-100 md:px-12 lg:text-left">
                <div class="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
                    <div class="grid items-center gap-12 lg:grid-cols-2">
                        <div class="mt-12 lg:mt-0">
                            <h1 class="mt-2 mb-16 text-4xl font-bold tracking-tight md:text-4xl xl:text-7xl">
                            Every&nbsp;Bite <span class="text-primary">Tells a Story&nbsp;</span>
                            </h1>
                            
                               <div className="mt-8 w-full flex justify-between  gap-12 text-sm ">
                                 <button class="mb-2 gap-2 w-full rounded-lg bg-primary px-12 pt-4 pb-3.5 text-sm 
                                 font-medium 
                                  leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out 
                                  hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]
                                   focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
                                   focus:outline-none focus:ring-0 active:bg-primary-700 
                                   active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
                                   dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] 
                                   dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] md:mr-2 md:mb-0" data-te-ripple-init data-te-ripple-color="light"
                                    href="#!" role="button">Get started</button>
                                 <button class="inline-block w-full gap-2 rounded-lg px-12 pt-4 pb-3.5 text-sm font-medium  
                                 leading-normal text-primary transition duration-150 ease-in-out
                                  hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 
                                  focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700
                                   dark:hover:bg-neutral-800 dark:hover:bg-opacity-60" 
                                   data-te-ripple-init data-te-ripple-color="light" href="#!" role="button">Learn more</button>
                               </div>
                            
                        </div>
                        <div class="mb-12 lg:mb-0">
                            <img 
                            src={'/res2.png'} layout={'fill'} objectFit={'contain'} alt='restaurant' className="w-full rounded-lg"  />
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}