"use client";
import { CartContext, cartProductPrice } from "@/components/AppContext"
import SectionHeaders from "@/components/layout/SectionHeaders";

import { useContext, useEffect, useState } from "react";
import CartProduct from "@/components/menu/CartProduct";
import AddressInputs from "@/components/layout/AddressInputs";
import { useProfile } from "@/components/UseProfile";
import toast from "react-hot-toast";

export default function CartPage() {
    const { cartProducts, removeCartProduct } = useContext(CartContext);
    const [address, setAddress] = useState({});
    const { data: profileData } = useProfile();

    useEffect(() => {
        if(typeof window !== 'undefined'){
            if(window.location.href.includes('canceled=1')){
                toast.error('Payment Canceled');
            }
        }
    })

    useEffect(() => {
        if (profileData?.city) {
            const { phone, streetAddress, city, postalCode, country } = profileData;
            const addressFromProfile = {
                phone,
                streetAddress,
                city,
                postalCode,
                country,
            };
            setAddress(addressFromProfile);
        }
    }, [profileData]);

    let subtotal = 0;
    for (const p of cartProducts) {
        subtotal += cartProductPrice(p);
    }
    function handleAddressChange(propName, value) {
        setAddress(prevAaddress => ({ ...prevAaddress, [propName]: value }));
    }
    async function proceedToCheckout(ev) {
        ev.preventDefault();
        // address and shopping cart orders
        const promise = new Promise((resolve, reject) => {
            fetch('/api/checkout', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    address,
                    cartProducts,
                }),
            }).then(async (response) => {
                if (response.ok) {
                    resolve();
                    window.location = await response.json()
                } else {
                    reject();
                }
            });
        });

        // // redirect to stripe payment
        await toast.promise(promise, {
            loading: 'Preparing your order...',
            success: 'Redirecting to payment...',
            error: 'Failed to process your order, please try again later',
        })

    }
    if(cartProducts?.length === 0) {
        return (
            <section className="mt-8 text-center">
                <SectionHeaders mainHeader={"Cart"}/>
                <p className="mt-4">Your Shopping Cart is empty </p>
            </section>
        )
    }
    return (
        <section className="mt-8">
            <div className="text-center">
                <SectionHeaders mainHeader="Cart" />
            </div>
            <div className="mt-8 grid gap-8 grid-cols-2">
                <div>
                    {cartProducts?.length === 0 && (
                        <div>Your cart is empty </div>
                    )}
                    {cartProducts?.length > 0 && cartProducts.map((product, index) => (
                        <CartProduct 
                        key={index}
                        index={index}
                        product={product} onRemove={removeCartProduct}/>
                    ))}
                    <div className="py-2  justify-end flex border rounded items-center bg-slate-500  mt-4  text-right pr-16">
                        <div className="">
                            Subtotal:<br />
                            Delivery:<br />
                            Total:
                        </div>
                        <div className=" font-semibold pl-2 text-right">
                            ${subtotal} <br />
                            $5<br />
                            ${subtotal + 5}
                        </div>

                    </div>

                </div>
                <div className="bg-gray-100 p-4 rounded-lg">
                    <h2>Checkout</h2>
                    <form onSubmit={proceedToCheckout}>
                        <AddressInputs
                            addressProps={address}
                            setAddressProp={handleAddressChange} />
                        <button type="submit">Pay ${subtotal+5}</button>
                    </form>
                </div>
            </div>
        </section>
    )
}