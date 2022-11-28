import { useLoaderData } from "react-router-dom";

const Products = () => {
  const products = useLoaderData();


  return (
<div  className="grid lg:grid-cols-2 mt-5 mb-5 place-items-center">
{
  products.map(product=>
  
  {
    return (
      <>
      <div  className="card lg:w-[80%]  bg-base-100 shadow-xl">
 
 <figure className="px-10 pt-10">
   <img src={product.img} alt="Shoes" className="rounded-xl" />
 </figure>
 <div className="card-body items-center text-center">
   <h2 className="card-title">{product.name}</h2>
   <h2 className="card-title">location :{product.location}</h2>
   <div className="flex  ">
    <div className="mr-5" >
      <h2>Orginal Price : {product.resale_price}</h2>
    </div>
    <div>
    <h2>Resale Price : {product.orginal_price}</h2>
    </div>
   </div>
   <div className="card-actions">
     <button className="btn btn-primary">Book Now</button>
   </div>
 </div>
</div>
      </>
    )
  })
}
</div>
  );
};

export default Products;
