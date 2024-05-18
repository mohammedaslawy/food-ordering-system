import { useContext, useState } from "react";
import { CartContext } from "@/components/AppContext";
import toast from "react-hot-toast";
import MenuItemTile from '@/components/menu/MenuItemTile';
import Image from "next/image";
import FlyingButton from 'react-flying-item';

export default function MenuItem(menuItem) {

    const {
        image, name, description, basePrice,
        sizes, extra, } = menuItem;
    const [showPopUp, setShowPopUp] = useState(false);
    const [selectedSize, setSelectedSize] = useState(sizes?.[0] || null);
    const [selectExtras, setSelectExtras] = useState([]);

    const { addTocart } = useContext(CartContext);

    async function handleAddToCartButtonClick() {
        const hasOptions = sizes.length > 0 || extra.length > 0;
        if (hasOptions && !showPopUp) {
            setShowPopUp(true);
            return;
        }

        addTocart(menuItem, selectedSize, selectExtras);
        await new Promise(resolve => setTimeout(resolve, 1000));
        setShowPopUp(false);
        toast.success("Your Order added to cart successfully", {
            position: 'top-right'
        });
    }

    function handleExtraThingClick(ev, extraThing) {
        const checked = ev.target.checked;
        if (checked) {
            setSelectExtras(prev => [...prev, extraThing]);
        } else {
            setSelectExtras(prev => {
                return prev.filter(e => e.name !== extraThing.name);
            });
        }
    }
    let selectedPrice = basePrice;
    if (selectedSize) {
        selectedPrice += selectedSize.price;
    }
    if (selectExtras?.length > 0) {
        for (const extra of selectExtras) {
            selectedPrice += extra.price;
        }
    }
    return (

        <>
            {showPopUp && (
                <div
                    onClick={() => setShowPopUp(false)}
                    className="fixed inset-0 bg-black/80 flex items-center
            justify-center">
                    <div
                        onClick={ev => ev.stopPropagation()}
                        className="my-8 bg-white p-2 rounded-lg max-w-md">
                        <div
                            className="overflow-y-scroll p-2"
                            style={{ maxHeight: 'calc(100vh - 100px)' }}>
                            <Image
                                src={image}
                                alt={name}
                                width={300}
                                height={200}
                                className="mx-auto" />
                            <h2 className="text-lg font-bold text-center mb-2">{name}</h2>
                            <p className="text-center text-gray-500 text-sm mb-2">{description}</p>
                            {sizes.length > 0 && (
                                <div className="py-2">
                                    <h3 className="text-center text-gray-700">Pick Your Size</h3>
                                    {sizes.map(size => (
                                        <label
                                            key={size._id}
                                            className="flex items-center gap-2 p-4 border rounded-md
                                    mb-1">
                                            <input
                                                type="radio"
                                                onChange={() => setSelectedSize(size)}
                                                checked={setSelectedSize?.name === size.name}
                                                name="size" />
                                            {size.name} ${basePrice + size.price}
                                        </label>
                                    ))}
                                </div>
                            )}
                            {extra?.length > 0 && (
                                <div className="py-2">
                                    <h3 className="text-center text-gray-700">Any Extras</h3>
                                    {extra.map(extraThing => (
                                        <label
                                            key={extraThing._id}
                                            checked={selectExtras.map(e => e,_id).includes(extraThing._id)}
                                            className="flex items-center gap-2 p-4 border rounded-md
                                   mb-1">
                                            <input
                                                type="checkbox"
                                                onChange={ev => handleExtraThingClick(ev, extraThing)}
                                                name={extraThing.name} />
                                            {extraThing.name}+${extraThing.price}
                                        </label>
                                    ))}
                                </div>
                            )}
                            <FlyingButton
                                targetTop={'5%'}
                                targetLeft={'95%'}
                                src={image}>
                                <div className="primary sticky bottom-2"
                                    onClick={handleAddToCartButtonClick}>
                                    Add to Cart ${selectedPrice}
                                </div>

                            </FlyingButton>
                            <button
                                className="mt-2"
                                onClick={() => setShowPopUp(false)}>Cancel</button>
                        </div
                        >
                    </div>
                </div>
            )}
            <MenuItemTile
                onAddToCart={handleAddToCartButtonClick} {...menuItem} />
        </>
    );
}