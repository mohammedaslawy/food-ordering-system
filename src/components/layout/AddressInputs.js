
export default function AddressInputs({ addressProps, setAddressProp, disabled = false }) {
    const { phone, streetAddress, postalCode, city, country } = addressProps;
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
            <div className="grid grid-cols-2 gap-2">
        <div>
          <input
            disabled={disabled}
            type="text" placeholder="Postal code"
            value={postalCode || ''} onChange={ev => setAddressProp('postalCode', ev.target.value)}
          />
        </div>
        <div>
          <input
            disabled={disabled}
            type="text" placeholder="City"
            value={city || ''} onChange={ev => setAddressProp('city', ev.target.value)}
          />
        </div>
      </div>
            <input
                disabled={disabled}
                type="text" placeholder="Country"
                value={country || ''} onChange={ev => setAddressProp('country', ev.target.value)} />
        </>
    )
}