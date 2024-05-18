"use client"
import { useProfile } from "@/components/UseProfile";
import UserTabs from "@/components/layout/UserTabs";
import { useEffect, useState } from "react";
import UserForm from "@/components/layout/UserForm";
import { useParams } from "next/navigation";
import toast from "react-hot-toast";
import { User } from "@/app/models/User";

export default function EditUserPage(){
    const [user, setUser] = useState(null)
    const {loading, data} = useProfile();
    const {id} = useParams();

    useEffect(() => {
        fetch('/api/profile?_id='+id).then(res => {
            res.json().then(user => {
                setUser(user);
            });
        })
    },[]);
   async function handleSaveButtonClick(ev, data) {
        ev.preventDefault();
        const promise = new Promise(async( resolve,reject) => {
         const res = await fetch('/api/profile', {
                method:'PUT',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify({...data,_id:id}),
            });
            if(res.ok)
            resolve()
        else
        reject()
        });
       await toast.promise(promise, {
            loading:'Saving User...',
            success:' User added Successfully',
            error:'Error while adding user',
        })
       
    }

    if(loading) return 'loading user profile..';
    if(!data.admin) return "Not an admin";

return(
    <section className="mt-8 mx-auto max-w-2xl ">
        <UserTabs isAdmin={true}/>
        <div className="mt-8">
            <UserForm user={user} onSave={handleSaveButtonClick}/>
        </div>
    </section>
)
}