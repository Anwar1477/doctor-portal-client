import React from "react";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";

const Login = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, gitUser, gitloading, gitError] =
    useSignInWithGithub(auth);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  //   if (user) {
  //     console.log(user);
  //   } else {
  //     console.log(error);
  //   }

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl font-mono font-bold text-gray-500">
            Login
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter Your Email"
                class="input input-bordered w-full max-w-xs"
                {...register("email", {
                  pattern:{ value:/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                  message: "please input our valid email"},
                  required: {value:true,
                  message: "please input your email"}
                })}
              />
              <label class="label">
                {errors.email?.type === "pattern" && (
                  <span class="label-text-alt">{errors.email.message}</span>
                )}
                {errors.email?.type === "required" && (
                  <span class="label-text-alt">{errors.email.message}</span>
                )}
              </label>
            </div>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Enter Your Password"
                class="input input-bordered w-full max-w-xs"
                {...register("password", {
                  minLength:{
                    value:6,
                    message:"Password To short"
                  },
                  required:{
                    value:true,
                    message:"please input your password"
                  }
                })}
              />
              <label class="label">
                {errors.password?.type === "required" && (
                  <span class="label-text-alt">{errors.password.message}</span>
                )}
                {errors.password?.type === "minLength" && (
                  <span class="label-text-alt">{errors.password.message}</span>
                )}
              </label>
            </div>
            <input className="btn w-full max-w-xs" type="submit" />
          </form>

          <div className="divider">OR</div>
          <button
            onClick={() => signInWithGoogle()}
            className="btn btn-outlin bg-secondary text-white"
          >
            Continue With Google
          </button>
          <button
            onClick={() => signInWithGithub()}
            className="btn btn-outlin bg-black text-white"
          >
            Continue With GitHub
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
