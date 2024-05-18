export default function InfoBox({ children }) {
    return (
        <div className="text-center bg-yellow-100 p-4 rounded-lg border
                border-yellow-300">
            {children}
        </div>
    )
}