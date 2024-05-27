import { notFound } from "next/navigation";
import Scrolling_hands from "../component/landing_template/scrolling_hand";
import Landing_template from "./landing_template";

async function getProjects(template_title: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_PUBLIC_URL}/api/${template_title}`,
    // { cache: "no-store" },
  );
  // console.log("this is working");
  if (!res.ok) {
    notFound();
  }
  const projects = await res.json();
  // console.log(projects.category.pastwork.works);
  return projects;
}

export async function generateMetadata({ params }: any, parent: any) {
  const id = params.slug;
  // console.log("this is the id off", id);
  // const blog = BlogData.find((item) => item.id === id);
  const projects = await getProjects(params.slug);

  // excerpt;
  return {
    title: projects.category.title,
    description: projects.category.description,
    // openGraph: {
    //   // title: " SG Technofab: Blogs",
    //   // description:
    //   //   "Explore the world of heating, ventilation, and air conditioning with SG Technofab's informative blog. Stay current with the latest industry news, exclusive interviews, cutting-edge innovations, and helpful resources selected to keep you informed and empowered. Whether you're a homeowner, a company owner, or an industry professional, our blog is your go-to resource for anything HVAC. Explore important issues and stay ahead of the curve with SG Technofab.",
    //   // url: "https://sgtechnofab.com",
    //   siteName: "SG Technofab",
    //   images: [
    //     {
    //       url: blogData.data.featuredImage.url,
    //       width: 800,
    //       height: 600,
    //     },
    //     {
    //       url: blogData.data.featuredImage.url,
    //       width: 1800,
    //       height: 1600,
    //     },
    //   ],
    //   locale: "en_US",
    //   type: "website",
    // },
  };
}
export default async function Home({ params }: { params: { slug: string } }) {
  const projects = await getProjects(params.slug);
  return (
    <>
      <Landing_template data={projects.category} />{" "}
    </>
  );
}
