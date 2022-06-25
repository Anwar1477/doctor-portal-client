// import React from "react";
// import {
//   useSignInWithGithub,
//   useSignInWithGoogle,
// } from "react-firebase-hooks/auth";
// import auth from "../../firebase.init";
// import Loading from "../Shared/Loading";

// const Social = () => {
//   const [signInWithGoogle, googleUser, googleLoading, googleError] =
//     useSignInWithGoogle(auth);
//   const [signInWithGithub, gitUser, gitLoading, gitError] =
//     useSignInWithGithub(auth);
//   let socialLoginError;

//   if (googleLoading || gitLoading) {
//     return <Loading></Loading>;
//   }
//   if (googleError || gitError) {
//     socialLoginError = (
//       <p>
//         <span>{googleError?.message || gitError?.message}</span>
//       </p>
//     );
//   }
//   if (googleUser || gitUser) {
//     console.log(googleUser, gitUser);
//   }
//   return (
//     <div className="justify-items-center">
//       <div className="py-4">
//         <button
//           onClick={() => signInWithGoogle()}
//           className="btn btn-outlin bg-secondary text-white "
//         >
//           Continue With Google
//         </button>
//       </div>
//       <div>
//         <button
//           onClick={() => signInWithGithub()}
//           className="btn btn-outlin bg-black text-white"
//         >
//           Continue With GitHub
//         </button>
//       </div>
//       {socialLoginError}
//     </div>
//   );
// };

// export default Social;
