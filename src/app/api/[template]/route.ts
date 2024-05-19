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

import pastwork1 from "../../../../public/landingpage_template/architect_imgaes/past_work1.webp";
import pastwork2 from "../../../../public/landingpage_template/architect_imgaes/past_work2.webp";
import pastwork3 from "../../../../public/landingpage_template/architect_imgaes/past_work3.webp";
import pastwork4 from "../../../../public/landingpage_template/architect_imgaes/past_work4.webp";
import pastwork5 from "../../../../public/landingpage_template/architect_imgaes/past_work5.webp";
import pastwork6 from "../../../../public/landingpage_template/architect_imgaes/past_work6.webp";

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
        heading: "Projects",
        works: [
          {
            img: pastwork1,
            text: "Mitrex ",
            link: "https://www.mitrex.com/",
          },
          {
            img: pastwork2,
            text: "Modscape",
            link: "https://www.modscape.com.au/",
          },

          {
            img: pastwork3,
            text: "Atella",
            link: "https://www.atella.ca/",
          },
          {
            img: pastwork4,
            text: "gow hastings ",
            link: "https://gowhastings.com/",
          },
          {
            img: pastwork5,
            text: "Novumc",
            link: "https://www.novum.com.au/",
          },
          {
            img: pastwork6,
            text: "Archier",
            link: "https://archier.com.au/",
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
