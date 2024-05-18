import AddToCartButton from "./AddToCartButton";

export default function MenuItemTile({onAddToCart, ...item}){
    const {image, description, name, basePrice,sizes,extra} = item;
    const hasSizesOrExtras = sizes.length > 0 || extra > 0;
    return(
        <div className='bg-gray-200 p-4 rounded-lg text-center
            roup hover:bg-white hover:shadow-md  hover:shadow-black/25 transition-all'>
                <div className='text-center'>
                    <img src={image}
                        className='w-80% h-28  rounded-lg block mx-auto ' alt='pizza' />
                </div>
                <h4 className='font-semibold text-xl my-3'>
                    {name}
                </h4>
                <p className='text-gray-500 text-sm line-clamp-3'>
                    {description}
                </p>
                <AddToCartButton 
                image={image}
                hasSizesOrExtras={hasSizesOrExtras}
                onClick={onAddToCart}
                basePrice={basePrice}
                />
            </div>
    )
}