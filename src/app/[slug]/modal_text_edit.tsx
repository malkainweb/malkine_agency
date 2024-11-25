"use client";

import { doc, getFirestore, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { firebaseConfig } from "../utils/fire_base_config";
import { initializeApp } from "firebase/app";

const Modal_text_edit = ({
  setedit_text,
  edit_text,
  record_Name,
  record_id,
  table,
}: any) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [text, settext] = useState(edit_text);

  const db = getFirestore();
  initializeApp(firebaseConfig);

  const submit_form = async () => {
    // Validation check
    const updateData = { [record_Name]: text }; // Update data structure
    if (!text) {
      setError("All fields are required.");
      return;
    }

    setLoading(true);
    setError(""); // Reset previous error

    try {
      console.log("its updating");
      // Get a reference to the document you want to update
      const docRef = doc(db, table, record_id); // `table` is your collection name, `record_id` is the document ID

      // Update the document in Firestore
      await updateDoc(docRef, updateData);

      setLoading(false);
      setedit_text(""); // Clear the input field
      window.location.reload(); // Reload the page or you can navigate if needed
    } catch (error: any) {
      setLoading(false);
      setError(error.message); // Set the error if any occurs during update
    }
  };

  return (
    <>
      <div className="w-full h-full fixed top-0 left-0  bg-black bg-opacity-[80%] md:bg-opacity-[50%] overflow-x-hidden overflow-y-scroll z-[100000] flex justify-center  items-center">
        <div className="bg-white md:px-[5%] justify-center rounded-[1rem] py-[4rem] max-w-[90%] w-[40rem] px-[3%]  flex md:gap-[1vw] capitalize flex-col gap-[2rem] ">
          {" "}
          <p className="text-2xl text-center">edit text here</p>
          {/* title and image section */}
          <div className="flex flex-col md:gap-[0.3vw] gap-[2vw]">
            <label className="capitalize " htmlFor="description">
              Type Text here
            </label>
            <textarea
              //   type="text"
              id="description"
              rows={4}
              //   rows={50}
              value={text || ""}
              onChange={(e) => {
                settext(e.target.value);
              }}
              className="border  md:rounded-[1vw] rounded-[1.5vw]  outline-none bg-[black] bg-opacity-[70%] placeholder:text-white capitalize text-white resize-none p-[2%] "
              placeholder="input text  here .."
            />
          </div>
          {/* the links for viewing */}
          {error && <p className="text-red-500 ">{error}</p>}
          <div className="w-full flex justify-center gap-[5%]  md:gap-[4vw] ">
            <button
              className="  w-full rounded-[1rem]  capitalize bg-white  hover:bg-opacity-[60%] py-[1rem]   text-center border-red-500 border"
              onClick={() => {
                setedit_text("");
              }}
            >
              Cancel
            </button>
            <button
              onClick={submit_form}
              disabled={loading}
              type="submit"
              className="  w-full rounded-[1rem] capitalize text-white  md:rounded-[0.5vw]  py-[1rem]hover:bg-opacity-[60%]  text-center bg-red-500 border"
            >
              {loading ? "Uploading..." : "Confirm Upload"}{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal_text_edit;
