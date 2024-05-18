export default function ({addressProps,setAddressProp,disabled=false}) {
    const {phone, streetAddress, postalCode, city,country} = addressProps;
    return (
        <>
            <input
            disabled={disabled}
                type="tel" placeholder="Phone Number"
                value={phone || ''} onChange={ev => setAddressProp('phone', ev.target.value)} />
            <input
            disabled={disabled}
                type="text" placeholder="Street Address"
                value={streetAddress || ''} onChange={ev => setAddressProp('streetAddress', ev.target.value)} />
            <div className="flex gap-2">
                <input
                disabled={disabled}
                    style={{ 'margin': '0' }}
                    type="text" placeholder="Postal Code"
                    value={postalCode || ''} onChange={ev => setAddressProp('postalCode', ev.target.value)} />
                <input
                disabled={disabled}
                    style={{ 'margin': '0' }}
                    type="text" placeholder="City"
                    value={city || ''} onChange={ev => setAddressProp('city', ev.target.value)}
                />
            </div>
            <input
            disabled={disabled}
                type="text" placeholder="Country"
                value={country || ''} onChange={ev => setAddressProp('country', ev.target.value)} />
        </>
    )
}