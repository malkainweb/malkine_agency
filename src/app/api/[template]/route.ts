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
import academy_left1 from "../../../../public/landingpage_template/academia_images/left1.webp";
import academy_left2 from "../../../../public/landingpage_template/academia_images/left2.webp";
import academy_left3 from "../../../../public/landingpage_template/academia_images/left3.webp";
import academy_left4 from "../../../../public/landingpage_template/academia_images/left4.webp";
import academy_right1 from "../../../../public/landingpage_template/academia_images/right1.webp";
import academy_right2 from "../../../../public/landingpage_template/academia_images/right2.webp";
import academy_right3 from "../../../../public/landingpage_template/academia_images/right3.webp";
import academy_right4 from "../../../../public/landingpage_template/academia_images/right4.webp";

import pastwork1 from "../../../../public/landingpage_template/architect_imgaes/past_work1.webp";
import pastwork2 from "../../../../public/landingpage_template/architect_imgaes/past_work2.webp";
import pastwork3 from "../../../../public/landingpage_template/architect_imgaes/past_work3.webp";
import pastwork4 from "../../../../public/landingpage_template/architect_imgaes/past_work4.webp";
import pastwork5 from "../../../../public/landingpage_template/architect_imgaes/past_work5.webp";
import pastwork6 from "../../../../public/landingpage_template/architect_imgaes/past_work6.webp";

// EXTRA WORKS
import extra_pastwork1 from "../../../../public/landingpage_template/academy_pastworks_images/img1.webp";
import extra_pastwork2 from "../../../../public/landingpage_template/academy_pastworks_images/img2.webp";
import extra_pastwork3 from "../../../../public/landingpage_template/academy_pastworks_images/img3.webp";

// SERVICES IMAGE
import architect_services_img_1 from "../../../../public/landingpage_template/services/1.webp";
import architect_services_img_2 from "../../../../public/landingpage_template/services/2.webp";
import architect_services_img_3 from "../../../../public/landingpage_template/services/3.webp";

import academy_services_img_1 from "../../../../public/landingpage_template/academy_services_images/img_1.webp";
import academy_services_img_2 from "../../../../public/landingpage_template/academy_services_images/img2.webp";
import academy_services_img_3 from "../../../../public/landingpage_template/academy_services_images/img3.webp";
// ABOUT IMAGES
import architect_about_image from "../../../../public/landingpage_template/architect_imgaes/what_we_do.webp";

// THE MAIN IMAGE IN SCROLLING
import architect_hand_middle from "../../../../public/home/hand_middle.webp";
import academic_hand_middle from "../../../../public/landingpage_template/academic_hand_middle.png";

// PROCESS IMAGES
import academy_process_1 from "../../../../public/landingpage_template/academy_process/example1.webp";
import academy_process_2 from "../../../../public/landingpage_template/academy_process/example2.webp";
import academy_process_3 from "../../../../public/landingpage_template/academy_process/example3.webp";

import architect_one from "../../../../public/landingpage_template/example1.webp";
import architect_two from "../../../../public/landingpage_template/example2.webp";
import architect_three from "../../../../public/landingpage_template/example3.webp";
import academy_about_images from "../../../../public/landingpage_template/academy_services_images/what_we_do.webp";
export async function GET(_request: NextRequest, { params }: any) {
  const baseUrl = `${process.env.NEXT_PUBLIC_PUBLIC_URL}`; // Update this based on your base URL

  const data = [
    {
      category: "academia",
      title: "Malkain - Crafting Stunning Online Portfolios for Architects",
      description:
        "Malkain understands that great architects create inspirational buildings, not websites. That is why we are committed to developing online portfolios that reflect the effort and dedication you put into each job. Our skilled web design agency specialises in creating stunning, practical websites that reflect your architectural ideas. Let us take care of your digital presence so you can focus on what you do best: creating remarkable venues.",
      hero_text: [
        { word: "Unleash " },
        { word: "Your " },
        { word: "Research ", color: "lightgreen" },
        { word: " Powerhouse : " },
        { word: "Craft " },
        { word: " a " },
        { word: " Website " },
        { word: " That " },
        { word: " Ignites " },
        { word: " Scholarly Engagement ", color: "lightred" },
      ],
      size: true,
      mobile_size: "8vw",
      desktop_size: "4vw",
      caption:
        "Let us create an online website that reflects the amount of care and commitment you put into student and research. ",
      writing_one:
        "Academic minds develop research that shapes our world, but let's face it, most professor websites leave a lot to be desired. We get you. You're passionate about groundbreaking ideas, but wrestling with website builders isn't exactly your forte. That's where we come in. ",
      about_image: academy_about_images,
      writing_two:
        "We're a web design firm obsessed with crafting beautiful and functional websites for professors like you. We translate your vision into stunning online portfolios that showcase your work with the same care and commitment you put into every paper.",
      scroll_left_img: [
        { img: academy_left1 },
        { img: academy_left2 },
        { img: academy_left3 },
        { img: academy_left4 },
      ],
      scroll_right_img: [
        { img: academy_right1 },
        { img: academy_right2 },
        { img: academy_right3 },
        { img: academy_right4 },
      ],
      main_img: academic_hand_middle,
      mob_scroll_left_img: [{ img: academy_left2 }, { img: academy_left4 }],
      mob_scroll_right_img: [{ img: academy_right2 }, { img: academy_right4 }],
      extra_pastwork: {
        heading: "Past Work - Personal Websites",
        works: [
          {
            img: extra_pastwork1,
            text: "Modamu Village- Childcare Services. ",
            link: "https://www.mitrex.com/",
          },
          {
            img: extra_pastwork2,
            text: "Modamu Village- Childcare Services.",
            link: "https://www.modscape.com.au/",
          },

          {
            img: extra_pastwork3,
            text: "Modamu Village- Childcare Services.",
            link: "https://www.atella.ca/",
          },
        ],
      },
      pastwork: {
        heading: "Past Work - Other Sectors",
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
      service_text_color: "white",
      services: [
        {
          heading: "Web Design",
          body: "Enhance your portfolio online with our specialized web design services for architecture firms.From intuitive navigation to visually striking elements, our comprehensive approach aims to elevate your brand's visibility and credibility in the competitive online landscape",
          deg: 30,

          img: academy_services_img_1,
        },

        {
          heading: "Get your Research to Rank top on Google",
          body: "Optimizes your research for search engines, ensuring your findings reach the researchers, students, and collaborators who need them most. Dominate scholarly searches, boost citations, and elevate your academic impact.",
          img: academy_services_img_2,
          deg: -30,
        },
        {
          heading: "Personal Branding",
          body: "Build a Personal Brand That Commands Attention - Go beyond the syllabus. Our personal branding service helps professors like you craft a powerful online presence. ",
          img: academy_services_img_3,
          deg: 10,
        },
      ],
      process: [
        {
          step_text: "STEP 01: GET STARTED",
          heading: "Onboarding",
          top: "1vw",
          body: "After conducting a compressive assessment to understand project requirement, a tailored on-boarding plan would be created to obtain relevant information poignant to the successful completion of the project.",
          img: academy_process_1,
          //   reverse: true,
        },
        {
          step_text: "STEP 02: DESIGN",
          heading: "Designing",
          top: "2vw",

          body: "Here we'll design wireframes, lo-fi and hi-fi user interface emphasizing intuitive navigation and compliance with industry regulations. Collaborating closely with all stakeholders involved, ensures that the final UI design prioritizes usability, accessibility, and a seamless user experience.",
          img: academy_process_2,
          reverse: true,
        },
        {
          step_text: "STEP 03: PROTOTYPING",
          heading: "Prototyping",
          top: "1vw",

          body: "Gradually we'll evolve wireframes into interactive, high-fidelity prototypes, to achieve an appropriate user journey as customers navigate across the platform.",
          center: true,
        },
        {
          step_text: "STEP 04: DEVELOPMENT",
          heading: "Developing",
          top: "vw",

          body: "While implementing modular and scalable development stacks, we collaborate to build out backend functionality of the desired outcome and implement front end engineering design structures while maintaining agile development methodology and prioritizing platform security.",
          img: academy_process_3,
          //   reverse: true,
        },
        {
          step_text: "STEP 05: LONG TERM",
          heading: "Maintenance",

          body: "Gradually we'll evolve wireframes into interactive, high-fidelity prototypes, to achieve an appropriate user journey as customers navigate across the platform.",
          //   img: four,
          center: true,
        },
      ],
    },
    {
      category: "architects",
      title: "Malkain - Crafting Stunning Online Portfolios for Architects",
      description:
        "Malkain understands that great architects create inspirational buildings, not websites. That is why we are committed to developing online portfolios that reflect the effort and dedication you put into each job. Our skilled web design agency specialises in creating stunning, practical websites that reflect your architectural ideas. Let us take care of your digital presence so you can focus on what you do best: creating remarkable venues.",
      hero_text: [
        { word: "Great " },
        { word: "Architects " },
        { word: "Design " },
        { word: " Great " },
        { word: "Buildings " },
        { word: " Not " },
        { word: "Great Websites", color: "blue" },
      ],
      size: false,
      caption:
        "Let us create an online portfolio that reflects the amount of care and commitment you put into every building.",
      writing_one:
        "You design buildings that inspire but let's be honest, most architect websites leave a lot to be desired. We get it. You're passionate about creating spaces that amaze, but wrestling with website builders isn't exactly your dream project. That's where we come in. ",
      about_image: architect_about_image,
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
      main_img: architect_hand_middle,

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
      services: [
        {
          heading: "Web Design",
          body: "Enhance your portfolio online with our specialized web design services for architecture firms.From intuitive navigation to visually striking elements, our comprehensive approach aims to elevate your brand's visibility and credibility in the competitive online landscape",
          deg: 30,

          img: architect_services_img_1,
        },

        {
          heading: "Website SEO",
          body: "When clients turn to Google for architectural services, they should find you. Our specialized approach is meticulously crafted to propel your firm to higher rankings, ensuring that your digital footprint stands out amidst the vast online landscape.",
          img: architect_services_img_2,
          deg: -30,
        },
        {
          heading: "Custom Software",
          body: "From seamlessly intuitive client management systems to the creation of secure, highly scalable mobile applications, our commitment is to provide unparalleled solutions catering to the diverse needs of both internal and external client relations tools to enhance growth and scale systemically. ",
          img: architect_services_img_3,
          deg: 10,
        },
      ],
      process: [
        {
          step_text: "STEP 01: GET STARTED",
          heading: "Onboarding",
          top: "1vw",
          body: "After conducting a compressive assessment to understand project requirement, a tailored on-boarding plan would be created to obtain relevant information poignant to the successful completion of the project.",
          img: architect_one,
          //   reverse: true,
        },
        {
          step_text: "STEP 02: DESIGN",
          heading: "Designing",
          top: "2vw",

          body: "Here we'll design wireframes, lo-fi and hi-fi user interface emphasizing intuitive navigation and compliance with industry regulations. Collaborating closely with all stakeholders involved, ensures that the final UI design prioritizes usability, accessibility, and a seamless user experience.",
          img: architect_two,
          reverse: true,
        },
        {
          step_text: "STEP 03: PROTOTYPING",
          heading: "Prototyping",
          top: "1vw",

          body: "Gradually we'll evolve wireframes into interactive, high-fidelity prototypes, to achieve an appropriate user journey as customers navigate across the platform.",
          center: true,
        },
        {
          step_text: "STEP 04: DEVELOPMENT",
          heading: "Developing",
          top: "vw",

          body: "While implementing modular and scalable development stacks, we collaborate to build out backend functionality of the desired outcome and implement front end engineering design structures while maintaining agile development methodology and prioritizing platform security.",
          img: architect_three,
          //   reverse: true,
        },
        {
          step_text: "STEP 05: LONG TERM",
          heading: "Maintenance",

          body: "Gradually we'll evolve wireframes into interactive, high-fidelity prototypes, to achieve an appropriate user journey as customers navigate across the platform.",
          //   img: four,
          center: true,
        },
      ],
    },
    // {
    //   category: "architecture",
    //   title: "Malkain - Crafting Stunning Online Portfolios for Architects",
    //   description:
    //     "Malkain understands that great architects create inspirational buildings, not websites. That is why we are committed to developing online portfolios that reflect the effort and dedication you put into each job. Our skilled web design agency specialises in creating stunning, practical websites that reflect your architectural ideas. Let us take care of your digital presence so you can focus on what you do best: creating remarkable venues.",
    //   hero_text: [
    //     { word: "Great " },
    //     { word: "Architects " },
    //     { word: "Design ", color: "blue" },
    //     { word: " Great " },
    //     { word: "Buildings ", color: "blue" },
    //     { word: " Not " },
    //     { word: "Great Websites", color: "red" },
    //   ],
    //   caption:
    //     "Let us create an online portfolio that reflects the amount of care and commitment you put into every building.",
    //   writing_one:
    //     "Great architects design buildings that inspire but let's be honest, most architect websites leave a lot to be desired. We get it. You're passionate about creating spaces that amaze, but wrestling with website builders isn't exactly your dream project. That's where we come in.",
    //   writing_two:
    //     "We're a web design firm obsessed with crafting beautiful and functional websites for architects like you. We translate your vision into stunning online portfolios that showcase your work with the same care and commitment you put into every building.",
    //   scroll_left_img: [
    //     { img: architect_left1 },
    //     { img: architect_left2 },
    //     { img: architect_left3 },
    //     { img: architect_left4 },
    //   ],
    //   scroll_right_img: [
    //     { img: architect_right1 },
    //     { img: architect_right2 },
    //     { img: architect_right3 },
    //     { img: architect_right4 },
    //   ],
    //   mob_scroll_left_img: [{ img: architect_left2 }, { img: architect_left4 }],
    //   mob_scroll_right_img: [
    //     { img: architect_right2 },
    //     { img: architect_right4 },
    //   ],
    //   pastwork: {
    //     heading: "Projects",
    //     works: [
    //       {
    //         img: pastwork1,
    //         text: "Mitrex ",
    //         link: "https://www.mitrex.com/",
    //       },
    //       {
    //         img: pastwork2,
    //         text: "Modscape",
    //         link: "https://www.modscape.com.au/",
    //       },

    //       {
    //         img: pastwork3,
    //         text: "Atella",
    //         link: "https://www.atella.ca/",
    //       },
    //       {
    //         img: pastwork4,
    //         text: "gow hastings ",
    //         link: "https://gowhastings.com/",
    //       },
    //       {
    //         img: pastwork5,
    //         text: "Novumc",
    //         link: "https://www.novum.com.au/",
    //       },
    //       {
    //         img: pastwork6,
    //         text: "Archier",
    //         link: "https://archier.com.au/",
    //       },
    //     ],
    //   },
    // },
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
