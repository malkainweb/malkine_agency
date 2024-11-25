"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  getFirestore,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const All_pages = () => {
  const [products, setProducts] = useState<any>([]);
  const [error, setError] = useState<any>(null);
  const [btn_text, setBtnText] = useState("Add page");
  const [pageName, setPageName] = useState(""); // State for page name input
  const db = getFirestore();
  useEffect(() => {
    const q = query(collection(db, "pages"), orderBy("created_at", "desc"));

    const unsubscribe = onSnapshot(
      q,
      (querySnapshot) => {
        const pages = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(pages);
      },
      (error) => {
        setError(error.message);
      },
    );

    // Cleanup function to unsubscribe from the listener when the component unmounts
    return () => unsubscribe();
  }, []);

  if (error) {
    return <div>Error loading products.</div>;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!pageName) {
      alert("Please enter a page name");
      return;
    }

    // Format pageName by replacing spaces with hyphens
    const formattedPageName = pageName.trim().replace(/\s+/g, "-");

    setBtnText("Adding...");

    try {
      await addDoc(collection(db, "pages"), {
        page_name: formattedPageName, // Use formatted page name
        form_link: "Edit form link here",
        created_at: new Date(), // Firestore timestamp
      });
      // window.location.reload(); // Refresh the page
    } catch (err: any) {
      setError(err.message);
      setBtnText("Add page");
    }

    setPageName(""); // Clear input
    setBtnText("Add page");
  };

  const deletePage = async (id: string) => {
    try {
      await deleteDoc(doc(db, "pages", id));
      setProducts((prev: any) =>
        prev.filter((product: any) => product.id !== id),
      );
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <>
      <div
        style={{ whiteSpace: "nowrap" }}
        className="w-full flex  flex-col gap-[3rem]"
      >
        <h4 className="text-center text-4xl">All pages here</h4>
        <div className="w-full flex flex-col gap-[1rem]">
          {products.map((e: any, index: any) => {
            return (
              <div
                key={index}
                className="w-full md:flex-row flex-col flex md:gap-0 gap-[0.4rem] border-b border-b-black pb-[1rem] md:justify-between"
              >
                <div className="gap-[0.3rem] flex flex-col">
                  <div
                    style={{
                      whiteSpace: "nowrap",
                      transition: "0.9s ease",
                    }}
                    className={`flex w-fit  overflow-hidden p-[0.3rem] rounded-[1.4rem] bg-[#440C0C] backdrop-blur-2xl bg-opacity-[20%] `}
                  >
                    <div className="w-full h-full bg-[#FEF6F6] rounded-[1.7rem] flex justify-center items-center py-[0.5rem] px-[2rem]">
                      <p className="inline-block text-[#440C0C] group-hover:text-white">
                        {e.page_name}
                      </p>
                    </div>
                  </div>

                  {/* Delete button with deletePage function */}
                  <button
                    onClick={() => deletePage(e.id)}
                    className="underline w-fit text-red-500"
                  >
                    Delete
                  </button>
                </div>
                <Link
                  href={`/${e.page_name}`}
                  className="underline uppercase flex items-center underline-offset-4"
                >
                  view & edit
                </Link>
              </div>
            );
          })}
        </div>
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col gap-[1rem]"
        >
          <input
            type="text"
            value={pageName}
            onChange={(e) => setPageName(e.target.value)}
            className="w-full h-[3rem] bg-white rounded-[1rem] outline-none border-none px-[3%]"
            placeholder="Input page name here"
          />
          <button
            type="submit"
            className="w-full h-[4rem] rounded-[1rem] bg-black text-white text-center"
          >
            {btn_text}
          </button>
        </form>
      </div>
    </>
  );
};

export default All_pages;
