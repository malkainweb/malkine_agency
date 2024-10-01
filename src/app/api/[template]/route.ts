// import { NextRequest, NextResponse } from "next/server";

// // the is for the assessts of the architext landing page
// import architect_left1 from "../../../../public/landingpage_template/architect_imgaes/left1.webp";
// import architect_left2 from "../../../../public/landingpage_template/architect_imgaes/left2.webp";
// import architect_left3 from "../../../../public/landingpage_template/architect_imgaes/left3.webp";
// import architect_left4 from "../../../../public/landingpage_template/architect_imgaes/left4.webp";
// import architect_right1 from "../../../../public/landingpage_template/architect_imgaes/right1.webp";
// import architect_right2 from "../../../../public/landingpage_template/architect_imgaes/right2.webp";
// import architect_right3 from "../../../../public/landingpage_template/architect_imgaes/right3.webp";
// import architect_right4 from "../../../../public/landingpage_template/architect_imgaes/right4.webp";
// import academy_left1 from "../../../../public/landingpage_template/academia_images/left1.webp";
// import academy_left2 from "../../../../public/landingpage_template/academia_images/left2.webp";
// import academy_left3 from "../../../../public/landingpage_template/academia_images/left3.webp";
// import academy_left4 from "../../../../public/landingpage_template/academia_images/left4.webp";
// import academy_right1 from "../../../../public/landingpage_template/academia_images/right1.webp";
// import academy_right2 from "../../../../public/landingpage_template/academia_images/right2.webp";
// import academy_right3 from "../../../../public/landingpage_template/academia_images/right3.webp";
// import academy_right4 from "../../../../public/landingpage_template/academia_images/right4.webp";
// import practices_left_1 from "../../../../public/landingpage_template/practice_images/left1.webp";
// import practices_left_2 from "../../../../public/landingpage_template/practice_images/left2.webp";
// import practices_left_3 from "../../../../public/landingpage_template/practice_images/left3.webp";
// import practices_left_4 from "../../../../public/landingpage_template/practice_images/left4.webp";
// import practices_right_1 from "../../../../public/landingpage_template/practice_images/right1.webp";
// import practices_right_2 from "../../../../public/landingpage_template/practice_images/right2.webp";
// import practices_right_3 from "../../../../public/landingpage_template/practice_images/right3.webp";
// import practices_right_4 from "../../../../public/landingpage_template/practice_images/right4.webp";

// import pastwork1 from "../../../../public/landingpage_template/architect_imgaes/past_work1.webp";
// import pastwork2 from "../../../../public/landingpage_template/architect_imgaes/past_work2.webp";
// import pastwork3 from "../../../../public/landingpage_template/architect_imgaes/past_work3.webp";
// import pastwork4 from "../../../../public/landingpage_template/architect_imgaes/past_work4.webp";
// import pastwork5 from "../../../../public/landingpage_template/architect_imgaes/past_work5.webp";
// import pastwork6 from "../../../../public/landingpage_template/architect_imgaes/past_work6.webp";

// // EXTRA WORKS
// import extra_pastwork1 from "../../../../public/landingpage_template/academy_pastworks_images/img1.webp";
// import extra_pastwork2 from "../../../../public/landingpage_template/academy_pastworks_images/img2.webp";
// import extra_pastwork3 from "../../../../public/landingpage_template/academy_pastworks_images/img3.webp";

// import academy_pastwork6 from "../../../../public/landingpage_template/academy_pastworks_images/past_work6.webp";
// import academy_pastwork5 from "../../../../public/landingpage_template/academy_pastworks_images/past_work5.webp";
// import academy_pastwork4 from "../../../../public/landingpage_template/academy_pastworks_images/past_work4.webp";
// import academy_pastwork2 from "../../../../public/landingpage_template/academy_pastworks_images/past_work2.webp";
// import academy_pastwork1 from "../../../../public/landingpage_template/academy_pastworks_images/past_work1.webp";

// import practice_pastwork6 from "../../../../public/landingpage_template/practice_past_work_images/past_work6.webp";
// import practice_pastwork5 from "../../../../public/landingpage_template/practice_past_work_images/past_work5.webp";
// import practice_pastwork4 from "../../../../public/landingpage_template/practice_past_work_images/past_work4.webp";
// import practice_pastwork3 from "../../../../public/landingpage_template/practice_past_work_images/past_work3.webp";
// import practice_pastwork2 from "../../../../public/landingpage_template/practice_past_work_images/past_work2.webp";
// import practice_pastwork1 from "../../../../public/landingpage_template/practice_past_work_images/past_work1.webp";
// // SERVICES IMAGE
// import architect_services_img_1 from "../../../../public/landingpage_template/services/1.webp";
// import architect_services_img_2 from "../../../../public/landingpage_template/services/2.webp";
// import architect_services_img_3 from "../../../../public/landingpage_template/services/3.webp";

// import academy_services_img_1 from "../../../../public/landingpage_template/academy_services_images/img_1.webp";
// import academy_services_img_2 from "../../../../public/landingpage_template/academy_services_images/img2.webp";
// import academy_services_img_3 from "../../../../public/landingpage_template/academy_services_images/img3.webp";

// import practice_services_img_2 from "../../../../public/landingpage_template/practice_services/img2.webp";
// import practice_services_img_3 from "../../../../public/landingpage_template/practice_services/img3.webp";

// // ABOUT IMAGES
// import architect_about_image from "../../../../public/landingpage_template/architect_imgaes/what_we_do.webp";
// import practice_about_image from "../../../../public/landingpage_template/practice_services/what_we_do.webp";

// // THE MAIN IMAGE IN SCROLLING
// import architect_hand_middle from "../../../../public/home/hand_middle.webp";
// import academic_hand_middle from "../../../../public/landingpage_template/academic_hand_middle.png";

// // PROCESS IMAGES
// import academy_process_1 from "../../../../public/landingpage_template/academy_process/example1.webp";
// import academy_process_2 from "../../../../public/landingpage_template/academy_process/example2.webp";
// import academy_process_3 from "../../../../public/landingpage_template/academy_process/example3.webp";

// import architect_one from "../../../../public/landingpage_template/example1.webp";
// import architect_two from "../../../../public/landingpage_template/example2.webp";
// import architect_three from "../../../../public/landingpage_template/example3.webp";

// // PROCESS ARROW ICON
// import practice_blue_icon from "../../../../public/landingpage_template/practice_services/blue_icon.png";

// // PROCESS LINE IMAGE
// import practice_blue_line_img from "../../../../public/landingpage_template/blue_line.png";

// // MOBILE PROCESS LINE IMAGE
// import mobile_practice_blue_line_img from "../../../../public/landingpage_template/blue_mob_line.png";

// // MOBILE ARROWS FOR SERVICES
// import mobile_black_arrow_prev from "../../../../public/landingpage_template/black_prev_works.png";
// import mobile_black_arrow_next from "../../../../public/landingpage_template/black_next_works.png";
// export async function GET(_request: NextRequest, { params }: any) {
//   const baseUrl = `${process.env.NEXT_PUBLIC_PUBLIC_URL}`; // Update this based on your base URL

//   const data = [
//     {
//       category: "academia",
//       title:
//         "Malkain Academia - Empowering Scholars with Exceptional Online Presence",
//       description:
//         "Malkain Academia is dedicated to elevating the online presence of professors and researchers. We craft stunning online portfolios that showcase your work with precision, sophistication, and attention to detail, igniting scholarly engagement and empowering you to share your research with the world.",
//       hero_text: [
//         { word: "Unleash " },
//         { word: "Your " },
//         { word: "Research ", color: "lightgreen" },
//         { word: " Powerhouse : " },
//         { word: "Craft " },
//         { word: " a " },
//         { word: " Website " },
//         { word: " That " },
//         { word: " Ignites " },
//         { word: " Scholarly Engagement ", color: "lightred" },
//       ],
//       size: true,
//       mobile_size: 8,
//       desktop_size: 4,
//       caption:
//         "Let us create an online website that reflects the amount of care and commitment you put into student and research. ",
//       writing_one:
//         "Academic minds develop research that shapes our world, but let's face it, most professor websites leave a lot to be desired. We get you. You're passionate about groundbreaking ideas, but wrestling with website builders isn't exactly your forte. That's where we come in. ",
//       about_image: architect_about_image,
//       writing_two:
//         "We're a web design firm obsessed with crafting beautiful and functional websites for professors like you. We translate your vision into stunning online portfolios that showcase your work with the same care and commitment you put into every paper.",
//       scroll_left_img: [
//         { img: academy_left1 },
//         { img: academy_left2 },
//         { img: academy_left3 },
//         { img: academy_left4 },
//       ],
//       scroll_right_img: [
//         { img: academy_right1 },
//         { img: academy_right2 },
//         { img: academy_right3 },
//         { img: academy_right4 },
//       ],
//       main_img: academic_hand_middle,
//       mob_scroll_left_img: [{ img: academy_left2 }, { img: academy_left4 }],
//       mob_scroll_right_img: [{ img: academy_right2 }, { img: academy_right4 }],
//       extra_pastwork: {
//         heading: "Past Work - Personal Websites",
//         works: [
//           {
//             img: extra_pastwork1,
//             text: "Gus Cooney ",
//             link: "https://guscooney.com",
//           },
//           {
//             img: extra_pastwork2,
//             text: "Echo and Nate",
//             link: "https://echoandnate.com",
//           },

//           {
//             img: extra_pastwork3,
//             text: "Hovn Studios",
//             link: "https://hovnstudios.com",
//           },
//         ],
//       },
//       pastwork: {
//         heading: "Past Work - Other Sectors",
//         works: [
//           {
//             img: academy_pastwork1,
//             text: "Q Department ",
//             link: "https://www.qdepartment.com/",
//             video: true,
//             video_link: "/showcase/q.mp4",
//             scale: true,
//           },
//           {
//             img: academy_pastwork2,
//             text: "Spoiled Child",
//             link: "https://spoiledchild.com/",
//             video_link: "/showcase/s.mp4",
//             video: true,
//           },

//           {
//             img: pastwork3,
//             text: "Atella Studios",
//             link: "https://www.atellastudios.com/",
//           },
//           {
//             img: academy_pastwork4,
//             text: "Harc ",
//             link: "https://harc.casa/",
//           },
//           {
//             img: academy_pastwork5,
//             text: "Good Juju",
//             link: "https://heygoodjuju.com/",
//           },
//           {
//             img: academy_pastwork6,
//             text: "Atella",
//             link: "https://www.atella.ca/",
//           },
//         ],
//       },
//       service_text_color: "white",
//       services: [
//         {
//           heading: "Web Design",
//           body: "Enhance your portfolio online with our specialized web design services for architecture firms.From intuitive navigation to visually striking elements, our comprehensive approach aims to elevate your brand's visibility and credibility in the competitive online landscape",
//           deg: 30,

//           img: academy_services_img_1,
//         },

//         {
//           heading: "Get your Research to Rank top on Google",
//           body: "Optimizes your research for search engines, ensuring your findings reach the researchers, students, and collaborators who need them most. Dominate scholarly searches, boost citations, and elevate your academic impact.",
//           img: academy_services_img_2,
//           deg: -30,
//         },
//         {
//           heading: "Personal Branding",
//           body: "Build a Personal Brand That Commands Attention - Go beyond the syllabus. Our personal branding service helps professors like you craft a powerful online presence. ",
//           img: academy_services_img_3,
//           deg: 10,
//         },
//       ],
//       process: [
//         {
//           step_text: "STEP 01: GET STARTED",
//           heading: "Onboarding",
//           top: "1vw",
//           body: "After conducting a compressive assessment to understand project requirement, a tailored on-boarding plan would be created to obtain relevant information poignant to the successful completion of the project.",
//           img: academy_process_1,
//           //   reverse: true,
//         },
//         {
//           step_text: "STEP 02: DESIGN",
//           heading: "Designing",
//           top: "2vw",

//           body: "Here we'll design wireframes, lo-fi and hi-fi user interface emphasizing intuitive navigation and compliance with industry regulations. Collaborating closely with all stakeholders involved, ensures that the final UI design prioritizes usability, accessibility, and a seamless user experience.",
//           img: academy_process_2,
//           reverse: true,
//         },
//         {
//           step_text: "STEP 03: PROTOTYPING",
//           heading: "Prototyping",
//           top: "1vw",

//           body: "Gradually we'll evolve wireframes into interactive, high-fidelity prototypes, to achieve an appropriate user journey as customers navigate across the platform.",
//           center: true,
//         },
//         {
//           step_text: "STEP 04: DEVELOPMENT",
//           heading: "Developing",
//           top: "vw",

//           body: "While implementing modular and scalable development stacks, we collaborate to build out backend functionality of the desired outcome and implement front end engineering design structures while maintaining agile development methodology and prioritizing platform security.",
//           img: academy_process_3,
//           //   reverse: true,
//         },
//         {
//           step_text: "STEP 05: LONG TERM",
//           heading: "Maintenance",

//           body: "Gradually we'll evolve wireframes into interactive, high-fidelity prototypes, to achieve an appropriate user journey as customers navigate across the platform.",
//           //   img: four,
//           center: true,
//         },
//       ],
//     },
//     {
//       category: "practices",
//       background_color: "white",
//       prealoader_bg: "#226DFF",
//       btn_bg_color: "#226DFF",
//       writing_text_color: "elementor-blue-title",
//       header_text_color: "black",
//       title:
//         "Malkain Healthcare -  Where Patient Care Meets Digital Excellence",
//       description:
//         "Malkain is a web design firm obsessed with crafting beautiful and functional websites for healthcare providers like you. We translate your vision into stunning and functional online websites that showcase your services with the same care and commitment you put in with every patient.",
//       hero_text: [
//         { word: "Focus " },
//         { word: "on " },
//         { word: "Patient " },
//         { word: " Care,  " },
//         { word: " Not " },
//         { word: "Web Design", normal: true, color: "#0057FF" },
//         { word: " : " },
//         { word: " We " },
//         { word: " Create " },
//         { word: " Websites " },
//         { word: " That " },
//         { word: " Deliver Results", normal: true, color: "#D80F0F" },
//       ],
//       size: true,
//       mobile_size: 7.5,
//       desktop_size: 4.3,

//       caption:
//         "Let us create an online website that reflects the amount of care and commitment you give ever patient. ",
//       writing_one:
//         "You dedicate your expertise to changing lives, but let's be honest, most healthcare websites leave a lot to be desired. We get it. You're passionate about patient care, but wrestling with website builders isn't exactly your dream outcome. ",
//       about_image: practice_about_image,
//       writing_two:
//         "We're a web design firm obsessed with crafting beautiful and functional websites for healthcare providers like you. We translate your vision into stunning and functional online websites that showcase your services with the same care and commitment you put in with every patient.",
//       scroll_left_img: [
//         { img: practices_left_1 },
//         { img: practices_left_2 },
//         { img: practices_left_3 },
//         { img: practices_left_4 },
//       ],
//       scroll_right_img: [
//         { img: practices_right_1 },
//         { img: practices_right_2 },
//         { img: practices_right_3 },
//         { img: practices_right_4 },
//       ],
//       main_img: architect_hand_middle,

//       mob_scroll_left_img: [
//         { img: practices_left_1 },
//         { img: practices_left_4 },
//       ],
//       mob_scroll_right_img: [
//         { img: practices_right_2 },
//         { img: practices_right_4 },
//       ],
//       extra_pastwork: {
//         heading: "Past Work - Healthcare",
//         works: [
//           {
//             img: practice_pastwork1,
//             text: "Exo ",
//             link: "https://www.exo.inc/",
//           },
//           {
//             img: practice_pastwork2,
//             text: "Pico",
//             link: "https://www.picoclinics.com/",
//           },

//           {
//             img: practice_pastwork3,
//             text: "Ysotope",
//             link: "https://www.ysotope.com/",
//           },
//           {
//             img: practice_pastwork4,
//             text: "Yuri",
//             link: "https://www.yurigravity.com/",
//           },
//           {
//             img: practice_pastwork5,
//             text: "Cabinet",
//             link: "https://www.cabinethealth.com",
//           },
//           {
//             img: practice_pastwork6,
//             text: "Decibel",
//             link: "https://www.decibelhealth.com/",
//           },
//         ],
//       },

//       pastwork: {
//         heading: "Past Work - Other Sectors",
//         works: [
//           {
//             img: academy_pastwork1,
//             text: "Q Department ",
//             link: "https://www.qdepartment.com/",
//             video: true,
//             video_link: "/showcase/q.mp4",
//             scale: true,
//           },
//           {
//             img: academy_pastwork2,
//             text: "Spoiled Child",
//             link: "https://spoiledchild.com/",
//             video_link: "/showcase/s.mp4",
//             video: true,
//           },

//           {
//             img: pastwork3,
//             text: "Atella Studios",
//             link: "https://www.atellastudios.com/",
//           },
//           {
//             img: academy_pastwork4,
//             text: "Harc ",
//             link: "https://harc.casa/",
//           },
//           {
//             img: academy_pastwork5,
//             text: "Good Juju",
//             link: "https://heygoodjuju.com/",
//           },
//           {
//             img: academy_pastwork6,
//             text: "Atella",
//             link: "https://www.atella.ca/",
//           },
//         ],
//       },
//       services: [
//         {
//           heading: "Web Design",
//           body: "Attract new patients and build trust with a user-friendly, mobile-optimized website designed specifically for healthcare providers. Our agency offers HIPAA-compliant web design services to showcase your practice and educate your patients online. Let's discuss how we can help you establish a strong online presence.",
//           deg: 30,

//           img: academy_services_img_1,
//         },

//         {
//           heading: "Website SEO",
//           body: "Get found by more patients searching for your services! We specialize in medical SEO, helping healthcare providers rank higher in search results for relevant keywords. Increase your online visibility and attract new patients organically with our proven SEO strategies.",
//           img: practice_services_img_2,
//           deg: -30,
//         },
//         {
//           heading: "Custom Software",
//           body: "Streamline workflows and elevate patient care with custom software solutions built for your practice. Our team develops HIPAA-compliant applications to meet your specific needs, from appointment scheduling to telehealth integration. Let's discuss how custom software can improve your efficiency and patient experience.",
//           img: practice_services_img_3,
//           deg: 10,
//         },
//       ],
//       service_text_color: "white",
//       arrow_icon: practice_blue_icon,
//       straight_line_image: practice_blue_line_img,
//       mobile_straight_line_image: mobile_practice_blue_line_img,

//       mobile_control_prev_arrow: mobile_black_arrow_prev,
//       mobile_control_next_arrow: mobile_black_arrow_next,
//       process: [
//         {
//           step_text: "STEP 01: GET STARTED",
//           heading: "Onboarding",
//           top: "1vw",
//           body: "After conducting a compressive assessment to understand project requirement, a tailored on-boarding plan would be created to obtain relevant information poignant to the successful completion of the project.",
//           img: architect_one,
//           //   reverse: true,
//         },
//         {
//           step_text: "STEP 02: DESIGN",
//           heading: "Designing",
//           top: "2vw",

//           body: "Here we'll design wireframes, lo-fi and hi-fi user interface emphasizing intuitive navigation and compliance with industry regulations. Collaborating closely with all stakeholders involved, ensures that the final UI design prioritizes usability, accessibility, and a seamless user experience.",
//           img: architect_two,
//           reverse: true,
//         },
//         {
//           step_text: "STEP 03: PROTOTYPING",
//           heading: "Prototyping",
//           top: "1vw",

//           body: "Gradually we'll evolve wireframes into interactive, high-fidelity prototypes, to achieve an appropriate user journey as customers navigate across the platform.",
//           center: true,
//         },
//         {
//           step_text: "STEP 04: DEVELOPMENT",
//           heading: "Developing",
//           top: "vw",

//           body: "While implementing modular and scalable development stacks, we collaborate to build out backend functionality of the desired outcome and implement front end engineering design structures while maintaining agile development methodology and prioritizing platform security.",
//           img: architect_three,
//           //   reverse: true,
//         },
//         {
//           step_text: "STEP 05: LONG TERM",
//           heading: "Maintenance",

//           body: "Gradually we'll evolve wireframes into interactive, high-fidelity prototypes, to achieve an appropriate user journey as customers navigate across the platform.",
//           //   img: four,
//           center: true,
//         },
//       ],
//     },
//     {
//       category: "architects",
//       title: "Malkain - Crafting Stunning Online Portfolios for Architects",
//       description:
//         "Malkain understands that great architects create inspirational buildings, not websites. That is why we are committed to developing online portfolios that reflect the effort and dedication you put into each job. Our skilled web design agency specialises in creating stunning, practical websites that reflect your architectural ideas. Let us take care of your digital presence so you can focus on what you do best: creating remarkable venues.",
//       hero_text: [
//         { word: "Great " },
//         { word: "Architects " },
//         { word: "Design " },
//         { word: " Great " },
//         { word: "Buildings " },
//         { word: " Not " },
//         { word: "Great Websites", color: "blue" },
//       ],
//       size: false,
//       caption:
//         "Let us create an online portfolio that reflects the amount of care and commitment you put into every building.",
//       writing_one:
//         "You design buildings that inspire but let's be honest, most architect websites leave a lot to be desired. We get it. You're passionate about creating spaces that amaze, but wrestling with website builders isn't exactly your dream project. That's where we come in. ",
//       about_image: architect_about_image,
//       writing_two:
//         "We're a web design firm obsessed with crafting beautiful and functional websites for architects like you. We translate your vision into stunning online portfolios that showcase your work with the same care and commitment you put into every building.",
//       scroll_left_img: [
//         { img: architect_left1 },
//         { img: architect_left2 },
//         { img: architect_left3 },
//         { img: architect_left4 },
//       ],
//       scroll_right_img: [
//         { img: architect_right1 },
//         { img: architect_right2 },
//         { img: architect_right3 },
//         { img: architect_right4 },
//       ],
//       main_img: architect_hand_middle,

//       mob_scroll_left_img: [{ img: architect_left2 }, { img: architect_left4 }],
//       mob_scroll_right_img: [
//         { img: architect_right2 },
//         { img: architect_right4 },
//       ],
//       extra_pastwork: {
//         heading: "Past Work - Architecture",
//         works: [
//           {
//             img: pastwork1,
//             text: "Mitrex ",
//             link: "https://www.mitrex.com/",
//           },
//           {
//             img: pastwork2,
//             text: "Modscape",
//             link: "https://www.modscape.com.au/",
//           },

//           {
//             img: pastwork4,
//             text: "gow hastings ",
//             link: "https://gowhastings.com/",
//           },
//           {
//             img: pastwork5,
//             text: "Novumc",
//             link: "https://www.novum.com.au/",
//           },
//           {
//             img: pastwork6,
//             text: "Archier",
//             link: "https://archier.com.au/",
//           },
//         ],
//       },

//       pastwork: {
//         heading: "Past Work - Other Sectors",
//         works: [
//           {
//             img: academy_pastwork1,
//             text: "Q Department ",
//             link: "https://www.qdepartment.com/",
//             video: true,
//             video_link: "/showcase/q.mp4",
//             scale: true,
//           },
//           {
//             img: academy_pastwork2,
//             text: "Spoiled Child",
//             link: "https://spoiledchild.com/",
//             video_link: "/showcase/s.mp4",
//             video: true,
//           },

//           {
//             img: pastwork3,
//             text: "Atella Studios",
//             link: "https://www.atellastudios.com/",
//           },
//           {
//             img: academy_pastwork4,
//             text: "Harc ",
//             link: "https://harc.casa/",
//           },
//           {
//             img: academy_pastwork5,
//             text: "Good Juju",
//             link: "https://heygoodjuju.com/",
//           },
//           {
//             img: academy_pastwork6,
//             text: "Atella",
//             link: "https://www.atella.ca/",
//           },
//         ],
//       },
//       services: [
//         {
//           heading: "Web Design",
//           body: "Enhance your portfolio online with our specialized web design services for architecture firms.From intuitive navigation to visually striking elements, our comprehensive approach aims to elevate your brand's visibility and credibility in the competitive online landscape",
//           deg: 30,

//           img: architect_services_img_1,
//         },

//         {
//           heading: "Website SEO",
//           body: "When clients turn to Google for architectural services, they should find you. Our specialized approach is meticulously crafted to propel your firm to higher rankings, ensuring that your digital footprint stands out amidst the vast online landscape.",
//           img: architect_services_img_2,
//           deg: -30,
//         },
//         {
//           heading: "Custom Software",
//           body: "From seamlessly intuitive client management systems to the creation of secure, highly scalable mobile applications, our commitment is to provide unparalleled solutions catering to the diverse needs of both internal and external client relations tools to enhance growth and scale systemically. ",
//           img: architect_services_img_3,
//           deg: 10,
//         },
//       ],
//       process: [
//         {
//           step_text: "STEP 01: GET STARTED",
//           heading: "Onboarding",
//           top: "1vw",
//           body: "After conducting a compressive assessment to understand project requirement, a tailored on-boarding plan would be created to obtain relevant information poignant to the successful completion of the project.",
//           img: architect_one,
//           //   reverse: true,
//         },
//         {
//           step_text: "STEP 02: DESIGN",
//           heading: "Designing",
//           top: "2vw",

//           body: "Here we'll design wireframes, lo-fi and hi-fi user interface emphasizing intuitive navigation and compliance with industry regulations. Collaborating closely with all stakeholders involved, ensures that the final UI design prioritizes usability, accessibility, and a seamless user experience.",
//           img: architect_two,
//           reverse: true,
//         },
//         {
//           step_text: "STEP 03: PROTOTYPING",
//           heading: "Prototyping",
//           top: "1vw",

//           body: "Gradually we'll evolve wireframes into interactive, high-fidelity prototypes, to achieve an appropriate user journey as customers navigate across the platform.",
//           center: true,
//         },
//         {
//           step_text: "STEP 04: DEVELOPMENT",
//           heading: "Developing",
//           top: "vw",

//           body: "While implementing modular and scalable development stacks, we collaborate to build out backend functionality of the desired outcome and implement front end engineering design structures while maintaining agile development methodology and prioritizing platform security.",
//           img: architect_three,
//           //   reverse: true,
//         },
//         {
//           step_text: "STEP 05: LONG TERM",
//           heading: "Maintenance",

//           body: "Gradually we'll evolve wireframes into interactive, high-fidelity prototypes, to achieve an appropriate user journey as customers navigate across the platform.",
//           //   img: four,
//           center: true,
//         },
//       ],
//     },
//   ];

//   const template_slug = params.template;

//   if (!template_slug) {
//     return NextResponse.json(
//       { error: true, message: "Missing template_slug parameter" },
//       { status: 400 },
//     );
//   }

//   // Find the category that matches the template_slug
//   const matchingCategory = data.find((item) => item.category === template_slug);

//   if (!matchingCategory) {
//     return NextResponse.json(
//       { error: true, message: "Category not found" },
//       { status: 404 },
//     );
//   }

//   return NextResponse.json(
//     { error: false, category: matchingCategory },
//     { status: 200 },
//   );
// }

import { NextResponse } from "next/server";
import { Resend } from "resend";
import nodemailer from "nodemailer";

export async function POST(req: Request, res: any) {
  NextResponse.json({ status: 500 });
}
