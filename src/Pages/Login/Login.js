import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useToken from "../../hooks/useToken";
import { AuthContext } from "../../Context/AuthProvider/AUthProvider";
const Login = () => {
  const { login } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [error, setError] = useState("");
  const [show, setShow] = useState(true);
  const handleShow = () => {
    setShow(!show);
  };

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  // for jwt ////
  const [tokenEmail, setTokenEmail] = useState("");
  const [token] = useToken(tokenEmail);
  if (token) {
    return navigate(from, { replace: true });
  }

  const submitLogin = (data) => {
    const email = data.email;
    const password = data.password;
    const usertype = data.user;
    // console.log(user);
    login(email, password)
      .then((result) => {
        toast("success login ");
        setError("");
        setTokenEmail(email);
        // console.log(result.user);
      })
      .catch((err) => {
        setError(err.message);
        console.log(err);
      });
    setError("");
  };
  return (
    <div className="max-w-md mx-auto my-5 shadow-lg pb-20 pt-20 pr-10 pl-10  rounded">
      <h1 className="text-3xl my-3 text-center"> Log In please </h1>
      <form onSubmit={handleSubmit(submitLogin)} className="">
        {/* <Header /> */}

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
            <span>
              {" "}
              {show ? (
                <HiEyeOff onClick={handleShow} />
              ) : (
                <HiEye onClick={handleShow} />
              )}
            </span>
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

        <input
          type="submit"
          value="Log In"
          className="btn btn-active btn-primary w-full my-5"
        />
      </form>
      <p>
        Create an Account ?
        <Link to="/signup" className="text-primary">
          Please Sign up
        </Link>
      </p>
    </div>
  );
};

export default Login;
