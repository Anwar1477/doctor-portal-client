import React from 'react';
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGithub,
  useSignInWithGoogle,
  useUpdateProfile,
} from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from 'react-hook-form';
import Loading from '../Shared/Loading';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [signInWithGithub, gitUser, gitloading, gitError] =
    useSignInWithGithub(auth);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  let signInError;

  if (loading || googleLoading || updating) {
    return <Loading></Loading>;
  }
  if (error || googleError || updateError) {
    signInError = (
      <p>
        <span className="text-red-500">
          {error?.message || googleError?.message || updateError?.message}
        </span>
      </p>
    );
  }
  // if(googleUser){
  //     console.log(googleUser);
  // }

  const onSubmit = async (data) => {
    // console.log(data);
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
    navigate('/appointment');
  };
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl font-mono font-bold text-gray-500">
            Signup
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">User Name</span>
              </label>
              <input
                type="name"
                placeholder="Enter Your Name"
                class="input input-bordered w-full max-w-xs"
                {...register('text', {
                  required: { value: true, message: 'please input your name' },
                })}
              />
              <label class="label">
                {errors.text?.type === 'required' && (
                  <span class="label-text-alt text-red-600">
                    {errors.text.message}
                  </span>
                )}
              </label>
            </div>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter Your Email"
                class="input input-bordered w-full max-w-xs"
                {...register('email', {
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: 'please input our valid email',
                  },
                  required: { value: true, message: 'please input your email' },
                })}
              />
              <label class="label">
                {errors.email?.type === 'pattern' && (
                  <span class="label-text-alt text-red-600">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === 'required' && (
                  <span class="label-text-alt text-red-600">
                    {errors.email.message}
                  </span>
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
                {...register('password', {
                  minLength: {
                    value: 6,
                    message: 'Password To short',
                  },
                  required: {
                    value: true,
                    message: 'please input your password',
                  },
                })}
              />
              <label class="label">
                {errors.password?.type === 'required' && (
                  <span class="label-text-alt text-red-600">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === 'minLength' && (
                  <span class="label-text-alt text-red-600">
                    {errors.password.message}
                  </span>
                )}
              </label>
              {signInError}
            </div>
            <input
              className="btn w-full max-w-xs"
              type="submit"
              value="signup"
            />
          </form>
          <p className="text-center">
            Already have an Account?{' '}
            <Link className="text-secondary" to="/login">
              Please Login
            </Link>
          </p>

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

export default SignUp;
