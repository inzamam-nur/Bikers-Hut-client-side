import React, { useContext } from "react";
import { toast, ToastContainer } from "react-toastify";
import { AuthContext } from "../../Context/AuthProvider/AUthProvider";
import 'react-toastify/dist/ReactToastify.css';

const BookingModal = ({ product, setModal }) => {
  const { user } = useContext(AuthContext);

  const submitBook = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const product = form.product.value;
    const price = form.price.value;
    const number = form.number.value;
    const location = form.location.value;

    const booking = {
      name,
      email,
      product,
      price,
      number,
      location,
      seller: product?.email,
    };

    if (user) {
      fetch(`https://assignment-12-server-sdie.vercel.app/booking`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(booking),
      })
        .then((res) => res.json())
        .then((data) => {
          toast("Booked");
          setModal(false);
        });
    } else {
    }
  };

  return (
    <div>
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal bg-white modal-bottom sm:modal-middle">
        <div className="modal-box">
          <div className="modal-action">
            <label htmlFor="my-modal-6" className="btn btn-outline">
              <button> X </button>
            </label>
          </div>
          <h3 className="font-bold text-2xl mb-3 text-center">
            Book Your Products
          </h3>

          <form
            onSubmit={submitBook}
            action=""
            className="flex flex-col gap-5 mt-3"
          >
            <input
              type="text "
              name="name"
              className="input w-full"
              placeholder="type here"
              defaultValue={user?.displayName}
              readOnly
            />
            <input
              type="email"
              name="email"
              defaultValue={user?.email}
              className="input w-full"
              placeholder="type here"
              readOnly
            />
            <input
              type="text "
              name="product"
              defaultValue={product?.name}
              className="input w-full"
              placeholder="type here"
              readOnly
            />
            <input
              type="text "
              name="price"
              defaultValue={product?.resale_price}
              className="input w-full"
              placeholder="type here"
              readOnly
            />
            <input
              type="number"
              name="number"
              className="input w-full"
              placeholder="Enter your Number"
              required
            />
            <input
              type="text"
              name="location"
              className="input w-full"
              placeholder="Enter Meeting Location"
              required
            />

            <input
              htmlFor="my-modal-6"
              type="submit"
              className="btn btn-outline"
              value="Submit "
            />
              <ToastContainer />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
