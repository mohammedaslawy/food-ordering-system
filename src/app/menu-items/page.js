'use client';
import { useProfile } from "@/components/UseProfile";
import Right from "@/components/icons/Right";
import UserTabs from "@/components/layout/UserTabs";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function MenuItemsPage() {
    const { loading, data } = useProfile();
    const [menuItemsPage, setMenuItemsPage] = useState([]);

    useEffect(() => {
        fetch('/api/menu-items').then(res => {
            res.json().then(MenuItemsPage => {
                setMenuItemsPage(MenuItemsPage);
            });
        })
    },[]);
    if (loading) {
        return 'Loading Menu items...'
    }
    if (!data.admin) {
        return 'Not an admin'
    }

    return (
        <section className="mt-8 max-w-2xl mx-auto">
            <UserTabs isAdmin={true} />
            <div className="mt-8">
                <Link
                    className="button flex"
                    href={'/menu-items/new'}>
                    <span>Create new menu item</span>
                    <Right />
                </Link>
            </div>
            <div>
                <h2 className="text-sm text-gray-500 mt-8">Edit Menu Item</h2>
               <div className="grid grid-cols-3 gap-2">
                 {menuItemsPage?.length > 0 && menuItemsPage.map(item => (
                     <Link href={'/menu-items/edit/'+item._id}
                     key={item._id} 
                     className="bg-gray-200 rounded-lg p-12">
                        <div className="items-center">
                            <Image 
                            className="rounded-md"
                            src={item.image} alt="" width={160} height={180}/>
                        </div>
                         <div className="text-center mt-6 bg-gray-300 rounded-lg">{item.name}</div>
                     </Link>
                 ))}
               </div>
            </div>
        </section>
    );
}