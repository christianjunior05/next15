import { notFound} from "next/navigation";



export default function Reviews({params} :{params: {
    productId: string;
    reviewsId: string;
}
}) {


    if (parseInt(params.reviewsId) > 1000) {
        notFound();
    }






    return (
     <div className="w-full h-screen flex justify-center items-center">
      <h1 className="text-center text-gray-400 text-4xl my-6">
      Reviews  -- {params.reviewsId}  du  PRODUIT -- {params.productId}
      </h1>
     </div>
    );
  }
  