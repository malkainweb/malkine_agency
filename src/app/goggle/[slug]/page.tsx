import { notFound } from "next/navigation";
// import Campaign_Home_wrapper from "./wrapper";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { firebaseConfig } from "../../utils/fire_base_config";
import { initializeApp } from "firebase/app";
import GoggleHomeHero from "./GoggleHomeWrapper";
// import Loader from "./loader";

// const fetchpage_data = async (slug: any) => {
//   const { data, error } = await supabase
//     .from("page_detail")
//     .select("*")
//     .eq("page_name", slug) // Filter by page_name == slug
//     .order("created_at", { ascending: false });

//   if (error) {
//     console.error("Error fetching page data:", error);
//     return null;
//   }

//   return data;
// };

const db = getFirestore();
initializeApp(firebaseConfig);

const fetchpage_data = async (slug: any) => {
  try {
    const q = query(
      collection(db, "pages"), // Replace with your actual collection name
      where("page_name", "==", slug) // Filter where page_name matches slug
    );
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      console.error("No matching document found.");
      return null;
    }

    // Get the first document from the results
    const doc = querySnapshot.docs[0];
    return {
      id: doc.id, // Include document ID if needed
      ...doc.data(),
    };
  } catch (error) {
    console.error("Error fetching page data:", error);
    return null;
  }
};
export default async function Home({ params }: { params: { slug: string } }) {
  const product_data: any = await fetchpage_data(params.slug);

  // console.log(product_data);
  // Check if data is empty
  if (!product_data) {
    console.log("now data");
    return notFound();
  }
  return (
    <>
      {" "}
      <GoggleHomeHero id={product_data.id} form_link={product_data.form_link} />
    </>
  );
}
