import { NextRequest, NextResponse } from "next/server";
import img1 from "../../../../public/landingpage_template/architect_imgaes/left1.webp";

export async function GET(_request: NextRequest, { params }: any) {
  const baseUrl = `${process.env.NEXT_PUBLIC_PUBLIC_URL}`; // Update this based on your base URL

  const data = [
    {
      category: "architect",
      hero_text: [
        { word: "Great" },
        { word: "Architects" },
        { word: "Design", color: "blue" },
        { word: "Great" },
        { word: "Buildings", color: "blue" },
        { word: "Not" },
        { word: "Great Websites", color: "red" },
      ],
      caption:
        "Let us create an online portfolio that reflects the amount of care and commitment you put into every building.",
      writing_one:
        "Great architects design buildings that inspire but let's be honest, most architect websites leave a lot to be desired. We get it. You're passionate about creating spaces that amaze, but wrestling with website builders isn't exactly your dream project. That's where we come in.",
      writing_two:
        "We're a web design firm obsessed with crafting beautiful and functional websites for architects like you. We translate your vision into stunning online portfolios that showcase your work with the same care and commitment you put into every building.",
      scroll_left_img: [
        { img: `${baseUrl}/landingpage_template/architect_imgaes/left1.webp` },
        { img: `${baseUrl}/landingpage_template/architect_imgaes/left2.webp` },
        { img: `${baseUrl}/landingpage_template/architect_imgaes/left3.webp` },
        { img: `${baseUrl}/landingpage_template/architect_imgaes/left4.webp` },
      ],
      scroll_right_img: [
        { img: `${baseUrl}/landingpage_template/architect_imgaes/right1.webp` },
        { img: `${baseUrl}/landingpage_template/architect_imgaes/right2.webp` },
        { img: `${baseUrl}/landingpage_template/architect_imgaes/right3.webp` },
        { img: `${baseUrl}/landingpage_template/architect_imgaes/right4.webp` },
      ],
      mob_scroll_left_img: [
        { img: `${baseUrl}/landingpage_template/architect_imgaes/left2.webp` },
        { img: `${baseUrl}/landingpage_template/architect_imgaes/left4.webp` },
      ],
      mob_scroll_right_img: [
        { img: `${baseUrl}/landingpage_template/architect_imgaes/right2.webp` },
        { img: `${baseUrl}/landingpage_template/architect_imgaes/right4.webp` },
      ],
      pastwork: {
        heading: "We Don't Just Talk The Talk We Walk The Walk",
        works: [
          {
            img: `${baseUrl}/landingpage_template/port1.webp`,
            text: "Smartsweets - expanding the candy universe with smartsweets.",
          },
          {
            img: `${baseUrl}/landingpage_template/port2.webp`,
            text: "Health-ade - we helped health-ade follow their gut",
          },
          {
            img: `${baseUrl}/landingpage_template/port1.webp`,
            text: "Nylon - redesigning an iconic magazine for the internet age .",
          },
          {
            img: `${baseUrl}/landingpage_template/port2.webp`,
            text: "Nylon - redesigning an iconic magazine for the internet age .",
          },
          {
            img: `${baseUrl}/landingpage_template/port1.webp`,
            text: "Maev - the wellness brand for city dogs and their humans.",
          },
          {
            img: `${baseUrl}/landingpage_template/port2.webp`,
            text: "Petfolk - reshaping pet care for today",
          },
        ],
      },
    },
  ];

  const template_slug = params.template;

  if (!template_slug) {
    return NextResponse.json(
      { error: true, message: "Missing template_slug parameter" },
      { status: 400 },
    );
  }

  // Find the category that matches the template_slug
  const matchingCategory = data.find((item) => item.category === template_slug);

  if (!matchingCategory) {
    return NextResponse.json(
      { error: true, message: "Category not found" },
      { status: 404 },
    );
  }

  return NextResponse.json(
    { error: false, category: matchingCategory },
    { status: 200 },
  );
}
