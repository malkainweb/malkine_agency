"use client";

// import { Bt_Beau_Regualr } from "@/app/utils/fonts";
import { useEffect, useState } from "react";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { firebaseConfig } from "../utils/fire_base_config";
import All_pages from "./all_pages";
import Login_component from "./login_component";

const Login = () => {
  // const [showpassword, setshowpassword] = useState(false);
  // const [username, setusername] = useState("");
  // const [password, setpassword] = useState("");
  const [loggedin, setloggedin] = useState<any>(false);
  const [logout, setlogout] = useState<any>("log out");

  // Initialize the data base connection
  initializeApp(firebaseConfig);
  const auth = getAuth();
  const router = useRouter();
  // Use useEffect to check if the user is already authenticated
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setloggedin(true);
        // Replace with your protected route
      } else {
        // console.log("logged out");
      }
    });

    // Clean up the listener when the component unmounts
    return () => unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLogout = () => {
    setlogout("Logging out");
    signOut(auth)
      .then(() => {
        setlogout("Log out");
      })
      .catch((error) => {
        console.error("Error logging out:", error);
      });
  };

  return (
    <>
      <div className="w-full flex  flex-col items-center  min-h-[100vh]">
        {!loggedin && <Login_component />}

        {loggedin && (
          <div className="w-full  pt-[3rem] sm:flex-col gap-[2rem] flex-row px-[3%] flex ">
            <div
              style={{
                whiteSpace: "nowrap",
                transition: "0.9s ease",
              }}
              className="flex w-full   flex-col gap-[1rem]"
            >
              {/* now the link to return to webiste  */}
              <button
                onClick={() => {
                  handleLogout();
                }}
                className={`  flex w-fit uppercase overflow-hidden   p-[0.3rem] group hover:[#103210]  hover:bg-[black] hover:bg-opacity-[20%]  rounded-[1.4rem] bg-[#440C0C] backdrop-blur-2xl bg-opacity-[20%] `}
              >
                <div className="w-full h-full bg-[#FEF6F6] group-hover:bg-[#103210] rounded-[1.7rem] flex justify-center  items-center py-[0.5rem] px-[2rem]">
                  <p className="inline-block  text-[#440C0C] group-hover:text-white">
                    {logout}
                  </p>
                </div>
              </button>
              <Link
                style={{
                  whiteSpace: "nowrap",
                  transition: "0.9s ease",
                }}
                target="_blank"
                href={`/campaign`}
                className={`  flex w-fit uppercase overflow-hidden   p-[0.3rem] group hover:[#103210]  hover:bg-[black] hover:bg-opacity-[20%]  rounded-[1.4rem] bg-[#440C0C] backdrop-blur-2xl bg-opacity-[20%] `}
              >
                <div className="w-full h-full bg-[#FEF6F6] group-hover:bg-[#103210] rounded-[1.7rem] flex justify-center  items-center py-[0.5rem] px-[2rem]">
                  <p className="inline-block  text-[#440C0C] group-hover:text-white">
                    Return to webiste
                  </p>
                </div>
              </Link>
            </div>

            <All_pages />
          </div>
        )}
      </div>
    </>
  );
};

export default Login;
