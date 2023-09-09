import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt} from "react-icons/hi";
import Image from "next/image";
import {Img} from "../app/images/we.jpg";
const getTopics =async()=> {
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

export default async function TopicsList(){
    const {topics}= await getTopics();


    return <>

    {topics.reverse().map((t)=> (

    <div className="p-4 m-20 h-32 w-88  bg-slate-800 border border-slate-300 my-3 flex justify-between gap-5 items-start">
        <Image
        src = "/app/images/we.jpg"
        width={200}
        height={300}
        />

        <div className="">
            <h2 className="text-white font-bold text-2xl">{t.title}</h2>
            <div className="text-white">{t.description}</div>
        </div>
        <div className="flex gap-2">
            <RemoveBtn/>
            <Link href={'/editTopic/${t._id}'}>
                <HiPencilAlt size={24} color="white"/>
            </Link>
        </div>
    </div>
    ))}
    
    </>
}