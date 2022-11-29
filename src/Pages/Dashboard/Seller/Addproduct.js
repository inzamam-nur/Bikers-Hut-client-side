import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { AuthContext } from "../../../Context/AuthProvider/AUthProvider";
import 'react-toastify/dist/ReactToastify.css';


const AddProducts = () => {
  const { user } = useContext(AuthContext);
  // console.log(user);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const addProducts = (data) => {
    // console.log(data);
    const name = data.name;
    const img = data.img;
    const orginal_price = data.orginal_price;
    const resale_price = data.resale_price;

    const location = data.location;
    const mobile = data.mobile;
    const used = data.usedTime;
    const category = data.category;
    const descriptions = data.descriptions;

    const products = {
      name,
      category,
      img,
      email: user?.email,
      seller: user?.displayName,
      posted: new Date().toLocaleDateString(),
      orginal_price,
      descriptions,
      resale_price,
      location,
      mobile,
      used,
    };

    fetch(`http://localhost:5000/products`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(products),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast("Product Added Successfully!");
        }
        reset();
      });
  };

  return (
    <div className="max-w-lg mx-auto my-5 rounded">
      <h1> Add Your Products </h1>

      <form onSubmit={handleSubmit(addProducts)} className="">
        {/* <Header /> */}

        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text-alt">Products Name</span>
          </label>
          <input
            {...register("name", { required: "Fill up ,please" })}
            aria-invalid={errors.name ? "true" : "false"}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full "
          />
          {errors.name && (
            <p className="text-red-400 text-sm" role="alert">
              {errors.name?.message}
            </p>
          )}
        </div>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text-alt">Photo Url</span>
          </label>
          <input
            {...register("img", { required: "img is Required" })}
            aria-invalid={errors.img ? "true" : "false"}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full "
          />
          {errors.img && (
            <p className="text-red-400 text-sm" role="alert">
              {errors.name?.message}
            </p>
          )}
        </div>

        <div className="grid-cols-2  py-5">
          <input
            {...register("orginal_price", {
              required: "orginal_price is Required",
            })}
            aria-invalid={errors.reselPrice ? "true" : "false"}
            type="text"
            placeholder="Original Price"
            className="input my-2 mx-1"
          />
          <input
            {...register("resale_price", {
              required: "resale_price is Required",
            })}
            aria-invalid={errors.discount ? "true" : "false"}
            type="text"
            placeholder="resale_price "
            className="input my-2 mx-1"
          />
          <input
            {...register("usedTime", { required: "usedTime is Required" })}
            aria-invalid={errors.usedTime ? "true" : "false"}
            type="text"
            placeholder="Used Timed"
            className="input my-2 mx-1"
          />

          <input
            {...register("mobile", { required: "mobile is Required" })}
            aria-invalid={errors.mobile ? "true" : "false"}
            type="text"
            placeholder="Your Mobile"
            className="input my-2 mx-1"
          />
          <input
            {...register("descriptions", {
              required: "descriptions is Required",
            })}
            aria-invalid={errors.descriptions ? "true" : "false"}
            type="text"
            placeholder="descriptions"
            className="input my-2 mx-1"
          />

          {errors.name && (
            <p className="text-red-400 text-sm" role="alert">
              {errors.name?.message}
            </p>
          )}
        </div>

        <select
          {...register("location", { required: true })}
          className="w-full py-3 my-2"
        >
          <option value="Dhaka">Dhaka</option>
          <option value="Chittagang">Chittagang</option>
        </select>

        <select
          {...register("category", { required: true })}
          className="w-full py-3 my-2"
        >
          <option value="Yamaha">Yamaha</option>
          <option value="Honda">Honda</option>
          <option value="Bajaj">Bajaj</option>
          <option value="Suzuki">Suzuki</option>
          <option value="Royalenfield">Royalenfield</option>
          <option value="Tvs">Tvs</option>
        </select>

        <input
          type="submit"
          value="Add product"
          className="btn btn-active btn-primary w-full my-5"
        />
        <ToastContainer />
      </form>
    </div>
  );
};

export default AddProducts;
