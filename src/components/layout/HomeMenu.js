"use client"
import MenuItem from "../menu/MenuItem";
import SectionHeaders from "./SectionHeaders";
import { useEffect, useState } from "react";

export default function HomeMenu() {
    const [bestSellers, setBestSellers] = useState([]);

    useEffect(() => {
        fetch('/api/menu-items').then(res => {
            res.json().then(menuItems => {
                const bestSellers = menuItems.slice(-6);
                setBestSellers(bestSellers)
            });
        });
    },[]);
    return(
        <section className="mt-4">
            {/* <div className="absolute  left-0 right-0 w-full
            justify-start">
                <div className="absolute left-0 -top-[70px] text-left
                -z-10">
                    <Image src={'/res1.jpg'} width={109} height={189}
                    alt="salad"/>
                </div>
                <div className="absolute -top-[100px] right-0 -z-10">
                    <Image src={'/res1.jpg'} width={'107'} height={'195'}
                    alt="salad"/>
                </div>
            </div> */}
            <div className="text-center mb-4">
                <SectionHeaders 
                subHeader={'check out'}
                mainHeader={'Our Best Sellers'}/>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {bestSellers?.length > 0 && bestSellers.map(item => (
                <MenuItem key={item._id} {...item}/>
            ))}
            </div>
            
        </section>
    );
}