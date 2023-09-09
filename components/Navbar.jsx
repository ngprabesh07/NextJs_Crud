import Link from "next/link";

export default function Navbar(){
    return (
        <nav className="flex justify-between items-center bg-slate-800 px-10 py-10">
            <Link className="text-white font-bold" href ={"/"}> Lama Samdi Crud app</Link>
            <Link className="bg-white font-bold p-2"  href ={"/addTopic"}> add topic</Link>
        </nav>
    );
}