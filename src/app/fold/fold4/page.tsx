import Link from "next/link"

export default function Fold4(){
    return (
        <div className="w-full h-screen flex items-center justify-center">

            <h1 className="text-center text-slate text-4xl my-6">Page fold4</h1>
            <Link href="/fold/fold3">Fold 3</Link>
        </div>
    )
}