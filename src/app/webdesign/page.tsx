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

export default async function Home({ params }: { params: { slug: string } }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Campaign_Home_wrapper id="webdesign" form_link="webdesign" />
    </Suspense>
  );
}
