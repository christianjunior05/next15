import Link from "next/link";

import Card from "@/app/components/Card";

export default function Archived(){
    return(
        <Card>
            <h5>Composant archived Card </h5>
            <Link href="/dashboard/archived">Archived default </Link>
        </Card>
    )
}