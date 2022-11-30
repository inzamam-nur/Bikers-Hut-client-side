import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BookingModal from "../BookingModal/BookingModal";

const Products = () => {
  const products = useLoaderData();
  const [product, setproducts] = useState({});
  const [isModal ,setModal] = useState(true)
  const productData = (data) => {
    setproducts(data);
    // console.log(data);
  };
  return (
    <div className="grid lg:grid-cols-2 mt-5 mb-5 place-items-center">
      {products.map((product) => {
        return (
          <>
            <div className="card lg:w-[80%]  bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img src={product.img} alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Bike : {product.name}</h2>
                <h2 className="card-title">Seller : {product?.seller}</h2>
                <h2 className="card-title">location :{product.location}</h2>
                <div className="flex  ">
                  <div className="mr-5">
                    <h2>Orginal Price : {product.resale_price}</h2>
                  </div>
                  <div>
                    <h2>Resale Price : {product.orginal_price}</h2>
                  </div>
                </div>
                <div className="flex  ">
                  <div className="mr-5">
                    <h2>Years Of Used : {product.used}</h2>
                  </div>
                  <div>
                    <h2>Posted: {product?.posted}</h2>
                  </div>
                </div>
                <div className="card-actions">
                <label
                    onClick={() => productData(product)}
                    htmlFor="my-modal-6"
                    className="btn btn-outline btn-error"
                  >
                    Book Now
                  </label>
                </div>
              </div>
            </div>
          </>
        );
      })}
        {
      isModal&&
      <BookingModal product={product} setModal={setModal}></BookingModal>
    }
    </div>
  );
};

export default Products;
