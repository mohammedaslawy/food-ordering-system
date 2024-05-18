import { useEffect, useState } from "react";
import EditableImage from "@/components/layout/EditableImage";
import MenuItemPriceProps from "@/components/layout/MeniItemPriceProps";


export default function MenuItemForm({ onSubmit, menuItem }) {
    const [image, setImage] = useState(menuItem?.image || '');
    const [name, setName] = useState(menuItem?.name || '');
    const [description, setDescription] = useState(menuItem?.description || '');
    const [basePrice, setBasePrice] = useState(menuItem?.basePrice || '');
    const [sizes, setSizes] = useState(menuItem?.sizes || []);
    const [extra, setExtra] = useState(menuItem?.extra || []);
    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState(menuItem?.category || '')

    useEffect(() => {
        fetch('/api/categories').then(res => {
            res.json().then(categories => {
                setCategories(categories);
            });
        });
    },[]);

    return (
        <form
            className="mt-9 max-w-md mx-auto"
            onSubmit={ev => 
            onSubmit(ev, { image, name, description, basePrice,sizes,extra,category})}>
            <div className="md:grid items-start gap-4"
                style={{ gridTemplateColumns: '.3fr .7fr' }}>
                <div>
                    <EditableImage link={image} setLink={setImage} />
                </div>
                <div className="grow">
                    <label>Item Name</label>
                    <input type="text"
                        value={name}
                        onChange={ev => setName(ev.target.value)} />
                    <label>Description</label>
                    <input type="text"
                        value={description}
                        onChange={ev => setDescription(ev.target.value)} />
                        <label>Category</label>
                        <select value={category} onChange={ev => setCategory(ev.target.value)}>
                            {categories?.length > 0 && categories.map(c => (
                                <option value={c._id} key={c._id}>{c.name}</option>
                            ))}
                        </select>
                    <label>Base Price</label>
                    <input type="text"
                        value={basePrice}
                        onChange={ev => setBasePrice(ev.target.value)} />
                    <MenuItemPriceProps props={sizes}
                                        name={'Sizes'}
                                        addLabel={'Add item size'}
                                        setProps={setSizes} />
                    <MenuItemPriceProps name={'Extra ingredients'}
                                        addLabel={'Add ingredients price'}
                                        props={extra}
                                        setProps={setExtra} />

                    <button type="submit">Save</button>
                </div>

            </div>
        </form>
    )
}