import Link from "next/link"

export default function Fold3(){
    return (
        <div className="w-full h-screen flex items-center justify-center">

            <h1 className="text-center text-slate text-4xl my-6">Page fold3</h1>
            <Link href="/fold/fold2">Fold 4</Link>
        </div>
    )
}