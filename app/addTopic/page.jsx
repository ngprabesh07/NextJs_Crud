"use client"
import { useState } from "react";
import {useRouter} from "next/navigation";
export default function AddTopic() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!title || !description) {
            alert("Title and description must be filled ");
            return;
        }

        try {
          const res=  await fetch('http://localhost:3000/api/topics',
                {

                    method: "POST",
                    headers:{
                        "Content-type":"application/json",
                    },
                    body:JSON.stringify({title,description}),
                }
            );
            if(res.ok){
                router.push('/');
            }else{
                throw new Error('Failed to create ');
            }

        } catch (e) {
            console.log("error is here where are you loking for ",e);

        }
    };
    return <form onSubmit={handleSubmit}
        className="flex flex-col gap-3"> <h1>Add Topic</h1>
        <input
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            type="text" placeholder="add topic" className="border border-slate-500 px-8 py-3 " />
        <input
            onChange={(e) => setDescription(e.target.value)}
            valye={description}
            type="text" placeholder="add description" className="border border-slate-500 px-8 py-3 " />
        <button
            type="submit"
            className="bg-green-600 font-bold text-white py-3 px-6 w-fit justify-center">Add Topic</button>
    </form>
}