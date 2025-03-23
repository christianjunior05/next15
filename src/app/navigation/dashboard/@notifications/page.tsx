import Card from "../../../components/Card";
import Link from "next/link";

export default function Notifications(){
    return (
        <Card><h5>Composant Notification </h5>
                    <Link href="/dashboard/archived">Archived </Link>
        </Card>
    )
}