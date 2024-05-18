'use client'

import UserTabs from "@/components/layout/UserTabs";
import { useProfile } from "@/components/UseProfile";
import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Left from '../../../../components/icons/Left'
import { redirect, useParams } from "next/navigation";
import MenuItemForm from '../../../../components/layout/MenuItemForm';
import DeleteButton from "@/components/DeleteButton";

export default function EditMenuItemPage() {
    const { id } = useParams();

    const [menuItem, setMenuItem] = useState(null)
    const { loading, data } = useProfile();
    const [redirectToItems, setRedirectToItems] = useState(false);

    useEffect(() => {
        fetch('/api/menu-items').then(res => {
            res.json().then(items => {
                const item = items.find(i => i._id === id);
                setMenuItem(item);
            });
        })
    }, []);

    async function handleFormSubmit(ev, data) {
        ev.preventDefault();
        data = { ...data, _id: id };
        const savingPromise = new Promise(async (resolve, reject) => {
            const response = await fetch('/api/menu-items', {
                method: 'PUT',
                body: JSON.stringify(data),
                headers: { 'Content-Type': 'application/json' },
            });
            if (response.ok)
                resolve();
            else
                reject();
        });
        await toast.promise(savingPromise, {
            loading: 'Saving this item...',
            success: 'successfully saved',
            error: 'Error'
        });
        setRedirectToItems(true);

    }
    async function handleDeleteMenu() {
        const promise = new Promise(async (resolve, reject) => {
            const res = await fetch('/api/menu-items?_id=' + id, {
                method: 'DELETE',
            });
            if (res.ok) resolve();
            else reject();
        });
        await toast.promise(promise, {
            loading: 'Deleting the item ...',
            success: 'Item has been Deleted',
            error: 'Error',
        });
        setRedirectToItems(true);
    }
    if (redirectToItems) {
        return redirect('/menu-items');
    }
    if (loading) {
        return 'loading item info...'
    }
    if (!data.admin) {
        return 'Not an admin'
    }
    return (
        <section className="mt-8">
            <UserTabs isAdmin={true} />
            <div className="max-w-2xl mx-auto mt-8">
                <Link href={'/menu-items'} className="button">
                    <Left />
                    <span>back to menu item</span>
                </Link>
                <br />
            </div>
            <MenuItemForm menuItem={menuItem} onSubmit={handleFormSubmit} />
            <div className="max-w-md mx-auto mt-4">
                <div className="max-w-xs ml-auto pl-4">
                    <DeleteButton 
                    label="Delete this menu item"
                    onDelete={handleDeleteMenu}/>
                </div>
            </div>
        </section>
    );
}