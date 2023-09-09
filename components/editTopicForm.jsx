// "use client"
import { useState } from "react";
import { useRouter } from "next/navigation";


const getTopics = async (e)=>{
    try{
        const res = await fetch("http://localhost:3000/api/topics",{
            cache:"no-store",
        });

        if(!res.ok){
            throw new Error("faild to load ");

        }
        return res.json();

    }catch(e){
        console.log("error ",e);

    }
}

export default async function EditTopicForm() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const router = useRouter();

    const {topics}= await getTopics();




    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!title || !description) {
            alert("Title and description must be filled ");
            return;
        }

        try {
            const res = await fetch('http://localhost:3000/api/topics',
                {

                    method: "PUT",
                    headers: {
                        "Content-type": "application/json",
                    },
                    body: JSON.stringify({ title, description }),
                }
            );
            if (res.ok) {
                router.push('/');
            } else {
                throw new Error('Failed to create ');
            }

        } catch (e) {
            console.log("error is here where are you loking for ", e);

        }
    };
    return <>
    {topics.reverse().map((t)=> (

    <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3"> <h1>Edit Topic</h1>
        <input  value = {t.title} type="text" placeholder="add topic" className="border border-slate-500 px-8 py-3 " />
        <input value = {t.description} type="text" placeholder="add description" className="border border-slate-500 px-8 py-3 " />
        <button
            type="submit"
            className="bg-green-600 font-bold text-white py-3 px-6 w-fit justify-center">Save</button>
    </form>
    ))}
    </> 
}