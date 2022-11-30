import React, { useContext } from "react";
import { toast } from "react-toastify";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getAuth, updateProfile } from "firebase/auth";
import { AuthContext } from "../../Context/AuthProvider/AUthProvider";
import app from "../../Firebase/Firebase.config";
import useToken from "../../hooks/useToken";

const Signup = () => {
  const { googleSignIn, createUser } = useContext(AuthContext);
  //   console.log(user);
  const auth = getAuth(app);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const [error, setError] = useState("");
  const [show, setShow] = useState(true);
  const handleShow = () => {
    setShow(!show);
  };

  const [tokenEmail, setTokenEmail] = useState("");
  const [token] = useToken(tokenEmail);
  if (token) {
    return navigate(from, { replace: true });
  }

  const handleSignup = (data) => {
    // console.log(data);
    const name = data.name;
    const email = data.email;
    const password = data.password;
    const usertype = data.user;
    const user = { name, email, role: usertype };
    // console.log(user);
    // create user//

    createUser(email, password)
      .then((result) => {
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {
            toast.success("sign up");
            setTokenEmail(email);
            addTodb(user);
            setError("");
            reset();
          })
          .catch((e) => setError(e.message));
      })
      .catch((err) => setError(err.message));
  };

  const addTodb = (user) => {
    fetch(`https://assignment-12-server-sdie.vercel.app/users`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .catch((data) => {
        console.log(data);

        alert("Added successfully");
      });
  };

  return (
    <div className="max-w-lg mx-auto my-5 shadow-lg pb-20 pt-20 pr-10 pl-10 rounded">
      <h1 className="text-3xl my-3 text-center "> Sign In please </h1>

      <form onSubmit={handleSubmit(handleSignup)} className="">
        {/* <Header /> */}

        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text-alt">Your Name</span>
          </label>
          <input
            {...register("name", { required: "Name is Required" })}
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
            <span className="label-text-alt">Your Email</span>
          </label>
          <input
            {...register("email", {
              required: "Email is Required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Provide correct email",
              },
            })}
            aria-invalid={errors.email ? "true" : "false"}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full "
          />
          {errors.email && (
            <p className="text-red-400 text-sm" role="alert">
              {errors.email?.message}
            </p>
          )}
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text-alt">Your Password</span>
          </label>
          <input
            {...register("password", {
              required: "Please provide correct password",
              minLength: {
                value: 6,
                message: "Password must be 6 character",
              },
            })}
            type={show ? "password" : "text"}
            placeholder="type password"
            className="input input-bordered w-full"
          />
          <label className="label">
            {errors.password && (
              <p className="text-red-400 text-sm" role="alert">
                {errors.password?.message}
              </p>
            )}
          </label>
        </div>

        <select
          {...register("user", { required: true })}
          className="w-full py-3 my-2"
        >
          <option value="buyer">Buyers</option>
          <option value="seller">Seller</option>
        </select>

        <p className="text-xl text-red-500 mb-3"> {error}</p>

        <input
          type="submit"
          value="Sign In"
          className="btn btn-active btn-primary w-full my-5"
        />
      </form>
      <p>
        {" "}
        Already have an Account ?{" "}
        <Link to="/login" className="text-primary">
          {" "}
          Please Log In
        </Link>
      </p>
      <div className="divider">OR</div>
      <button
        onClick={googleSignIn}
        className="btn btn-outline w-full text-lg "
      >
        {" "}
        Continue With Google
      </button>
    </div>
  );
};

export default Signup;
