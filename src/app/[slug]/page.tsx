import { notFound } from "next/navigation";
import Scrolling_hands from "../component/landing_template/scrolling_hand";
import Landing_template from "./landing_template";

async function getProjects(template_title: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_PUBLIC_URL}/api/${template_title}`,
    { cache: "no-store" },
  );
  console.log("this is working");
  if (!res.ok) {
    notFound();
  }
  const projects = await res.json();
  console.log(projects.category.pastwork.works);
  return projects;
}

export default async function Home({ params }: { params: { slug: string } }) {
  const projects = await getProjects(params.slug);
  return (
    <>
      <Landing_template />{" "}
    </>
  );
}
