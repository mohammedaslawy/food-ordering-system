import Image from "next/image";
import toast from "react-hot-toast";
export default function EditableImage({ link, setLink }) {
    async function handleFileChange(ev) {
        const files = ev.target.files;
        if (files.length === 1) {
            const data = new FormData;
            data.set('file', files[0]);

            const uploadPromise = fetch('/api/upload', {
                method: 'POST',
                body: data,
            }).then(response => {
                if (response.ok) {
                    return response.json().then(link => {
                        setLink(link);
                    })
                }
                throw new Error('something wrong');
            });
            await toast.promise(uploadPromise, {
                loading: 'Uploading...',
                success: 'Upload Success',
                error: 'Error',
            });
        }
    }
    return (
        <>
            {link && (
                <Image src={link} className="rounded-lg w-full h-full mb-1"
                    width={250} height={250} alt="avatar" />
            )}
            {!link && (
                <div className="bg-gray-200 text-center p-4 text-gray-500 rounded-lg mb-1">
                    No image
                </div>
            )}
            <label>
                <input type="file" className="hidden" onChange={handleFileChange} />
                <span className="block border border-gray-300 rounded-lg p-2
                            text-center cursor-pointer">Edit</span>
            </label>
        </>
    )
}