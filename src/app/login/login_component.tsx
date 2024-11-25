"use client";

import { useEffect, useState } from "react";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { firebaseConfig } from "../utils/fire_base_config";
import { NeueHaasDisplay_medium, NeueHaasDisplay_roman } from "../utils/fonts";

const Login_component = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [active, setactive] = useState(false);
  const [errfirebase, seterrfirebase] = useState("");
  const [signin, setsignin] = useState("  Sign in");
  const [showPassword, setshowPassword] = useState(false);

  // Initialize the data base connection
  initializeApp(firebaseConfig);
  const auth = getAuth();
  const router = useRouter();
  // Use useEffect to check if the user is already authenticated
  //   useEffect(() => {
  //     const unsubscribe = onAuthStateChanged(auth, (user) => {
  //       if (user) {
  //         // router.push("/");
  //         // Replace with your protected route
  //       } else {
  //         console.log("logged out");
  //       }
  //     });

  //     // Clean up the listener when the component unmounts
  //     return () => unsubscribe();
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, []);

  const handleFirebaseError = (error: any) => {
    let errorMessage = "An error occurred. Please try again later."; // Default error message

    switch (error.code) {
      case "auth/user-not-found":
        errorMessage = "User not found. Please check your email and try again.";
        break;

      case "auth/wrong-password":
        errorMessage =
          "Incorrect password or username. Please check your credentials and try again.";
        break;

      case "auth/invalid-email":
        errorMessage = "Invalid email address. Please enter a valid email.";
        break;

      case "auth/user-disabled":
        errorMessage =
          "Your account has been disabled. Please contact support.";
        break;

      case "auth/too-many-requests":
        errorMessage = "Too many login attempts. Please try again later.";
        break;

      default:
        errorMessage = "An error occurred. Please try again later.";
    }

    seterrfirebase(errorMessage);
  };

  const handleclick = (e: any) => {
    e.preventDefault();
    console.log(email, password);
    // Example sign-in with email and password
    if (!email || !password) {
      return seterrfirebase("kindly fill out the login form & try again");
    }
    setsignin("Signing In");
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // The userCredential object contains information about the signed-in user.
        const user = userCredential.user;
        setsignin("Sign In");
        seterrfirebase("Success. Redirecting to dashboard ");
        router.push("/");

        // window.location.href = "/";
      })
      .catch((error) => {
        handleFirebaseError(error);
        // Handle any errors that occur during sign-in.
      });
  };

  useEffect(() => {
    seterrfirebase("");
  }, [email, password]);

  return (
    <>
      <div className="w-full mx-auto  bg-[#F7F5F6] min-h-[100vh] md:pt-[5rem] lg:pt-[1rem] flex md:w-[100rem] md:max-w-full ">
        <div
          className={`${NeueHaasDisplay_roman.className} lg:w-[50%] md:w-[50%]  justify-center w-full  md:pt-0 py-[3rem] lg:pb-0 md:pb-[3rem] flex items-center `}
        >
          <div className="bg-white md:px-[5%] px-[5%] gap-[3rem] w-[94%] py-[4rem] lg:py-[7rem] md:w-[35rem] flex flex-col md:max-w-[90%]">
            {/* logo and heading */}
            <div className="flex flex-col  gap-[1rem] items-center">
              <h3 className={` text-3xl lg:text-5xl`}>welcome admin</h3>
            </div>

            {/* input field and signin button */}
            <form
              onSubmit={handleclick}
              className="w-full  flex flex-col gap-[1.4rem]"
            >
              <input
                type="email"
                autoComplete="email"
                placeholder="Email *"
                onChange={(e) => {
                  setemail(e.target.value);
                }}
                value={email || ""}
                className={` md:text-sm md:px-[2%] border-opacity-[20%] focus:border-opacity-[100%] transition duration-[0.5s] border-b h-[3rem] outline-none md:placeholder:text-black  border-b-black`}
              />
              <div className="w-full flex flex-col gap-[0.7rem] ">
                <div className="w-full flex  relative flex-col gap-[0.7rem] ">
                  <input
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    placeholder="Password"
                    onChange={(e) => {
                      setpassword(e.target.value);
                    }}
                    value={password || ""}
                    className={`  md:text-sm md:px-[2%] border-opacity-[20%] focus:border-opacity-[100%] transition duration-[0.5s] border-b h-[3rem] outline-none md:placeholder:text-black pr-[2.3rem] border-b-black`}
                  />
                  <div
                    onClick={() => {
                      setshowPassword(!showPassword);
                    }}
                    className="absolute cursor-pointer top-[50%] text-2xl z-[10] translate-y-[-50%] right-0"
                  >
                    {" "}
                    {showPassword ? (
                      <i className="bi bi-eye-slash-fill"></i>
                    ) : (
                      <i className="bi bi-eye-fill"></i>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-[0.4rem]">
                  <div
                    style={{ backgroundColor: active ? "black" : "" }}
                    onClick={() => {
                      setactive(!active);
                    }}
                    className="w-[1rem] h-[1rem] border border-black"
                  ></div>

                  <p className={` md:text-sm`}>Remember me</p>
                </div>
              </div>
              <p className={` text-sm`}>{errfirebase}</p>
              <div className="w-full flex md:mt-[1rem] gap-[0.5rem] flex-col ">
                <button
                  type="submit"
                  className={`${NeueHaasDisplay_medium.className} hover:bg-opacity-[80%] h-[3.5rem] md:text-base bg-black w-full text-white`}
                >
                  {signin}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login_component;
