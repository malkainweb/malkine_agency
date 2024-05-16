import { NextRequest, NextResponse } from "next/server";

// the is for the assessts of the architext landing page
import architect_left1 from "../../../../public/landingpage_template/architect_imgaes/left1.webp";
import architect_left2 from "../../../../public/landingpage_template/architect_imgaes/left2.webp";
import architect_left3 from "../../../../public/landingpage_template/architect_imgaes/left3.webp";
import architect_left4 from "../../../../public/landingpage_template/architect_imgaes/left4.webp";
import architect_right1 from "../../../../public/landingpage_template/architect_imgaes/right1.webp";
import architect_right2 from "../../../../public/landingpage_template/architect_imgaes/right2.webp";
import architect_right3 from "../../../../public/landingpage_template/architect_imgaes/right3.webp";
import architect_right4 from "../../../../public/landingpage_template/architect_imgaes/right4.webp";
import port1 from "../../../../public/landingpage_template/port1.webp";
import port2 from "../../../../public/landingpage_template/port2.webp";

export async function GET(_request: NextRequest, { params }: any) {
  const baseUrl = `${process.env.NEXT_PUBLIC_PUBLIC_URL}`; // Update this based on your base URL

  const data = [
    {
      category: "architect",
      title: "Malkain - Crafting Stunning Online Portfolios for Architects",
      description:
        "Malkain understands that great architects create inspirational buildings, not websites. That is why we are committed to developing online portfolios that reflect the effort and dedication you put into each job. Our skilled web design agency specialises in creating stunning, practical websites that reflect your architectural ideas. Let us take care of your digital presence so you can focus on what you do best: creating remarkable venues.",
      hero_text: [
        { word: "Great " },
        { word: "Architects " },
        { word: "Design ", color: "blue" },
        { word: " Great " },
        { word: "Buildings ", color: "blue" },
        { word: " Not " },
        { word: "Great Websites", color: "red" },
      ],
      caption:
        "Let us create an online portfolio that reflects the amount of care and commitment you put into every building.",
      writing_one:
        "Great architects design buildings that inspire but let's be honest, most architect websites leave a lot to be desired. We get it. You're passionate about creating spaces that amaze, but wrestling with website builders isn't exactly your dream project. That's where we come in.",
      writing_two:
        "We're a web design firm obsessed with crafting beautiful and functional websites for architects like you. We translate your vision into stunning online portfolios that showcase your work with the same care and commitment you put into every building.",
      scroll_left_img: [
        { img: architect_left1 },
        { img: architect_left2 },
        { img: architect_left3 },
        { img: architect_left4 },
      ],
      scroll_right_img: [
        { img: architect_right1 },
        { img: architect_right2 },
        { img: architect_right3 },
        { img: architect_right4 },
      ],
      mob_scroll_left_img: [{ img: architect_left2 }, { img: architect_left4 }],
      mob_scroll_right_img: [
        { img: architect_right2 },
        { img: architect_right4 },
      ],
      pastwork: {
        heading: "We Don't Just Talk The Talk We Walk The Walk",
        works: [
          {
            img: port2,
            text: "Health-ade - we helped health-ade follow their gut",
          },
          {
            img: port1,
            text: "Smartsweets - expanding the candy universe with smartsweets.",
          },

          {
            img: port2,
            text: "Nylon - redesigning an iconic magazine for the internet age .",
          },
          {
            img: port1,
            text: "Maev - the wellness brand for city dogs and their humans.",
          },
          {
            img: port2,
            text: "Petfolk - reshaping pet care for today",
          },
          {
            img: port1,
            text: "Nylon - redesigning an iconic magazine for the internet age .",
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
