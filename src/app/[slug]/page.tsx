import { Suspense } from "react";
import { notFound } from "next/navigation";
import Campaign_Home_wrapper from "./wrapper";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { firebaseConfig } from "../utils/fire_base_config";
import { initializeApp } from "firebase/app";

const db = getFirestore();
initializeApp(firebaseConfig);

const fetchpage_data = async (slug: any) => {
  try {
    const q = query(collection(db, "pages"), where("page_name", "==", slug));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      console.error("No matching document found.");
      return null;
    }

    const doc = querySnapshot.docs[0];
    return {
      id: doc.id,
      ...doc.data(),
    };
  } catch (error) {
    console.error("Error fetching page data:", error);
    return null;
  }
};

export default async function Home({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params; // ✅ Unwrap the promise
  const product_data: any = await fetchpage_data(slug);

  if (!product_data) {
    console.log("no data");
    return notFound();
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Campaign_Home_wrapper
        id={product_data.id}
        form_link={product_data.form_link}
      />
    </Suspense>
  );
}
