import { reviewsTabs } from "./data";

export async function GET(){
    return Response.json(reviewsTabs)
}