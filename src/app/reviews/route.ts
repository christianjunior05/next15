import { reviewsTabs } from "./data";

export async function GET(){
    return Response.json(reviewsTabs)
}

export async function POST(request:Request){
    const review= await request.json()
    const newReview ={
        id:reviewsTabs.length+1, 
        text: review.text()
    }

     reviewsTabs.push(newReview)

     return new Response(JSON.stringify(newReview),{
        headers :{
            "Content-Type":"application/json"
        },
        status:201
     })
}