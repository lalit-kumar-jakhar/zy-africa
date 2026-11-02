const kevinImage = "/static/assets/home/testimonials/Kevin.svg";
const krystianImage = "/static/assets/home/testimonials/Krystian.svg";
const jitendraImage = "/static/assets/home/testimonials/Jitendra.svg";
const sanchayitaImage = "/static/assets/home/testimonials/Sanchayita.svg";
const alejandroImage = "/static/assets/home/testimonials/Alejandro.svg";
const damianImage = "/static/assets/home/testimonials/Damian.webp";
const yogendraImage = "/static/assets/home/testimonials/Yogendra.svg";
const apoorvaImage = "/static/assets/home/testimonials/Apoorva.svg";
const haiderBaigImage = "/static/assets/home/testimonials/Haider.webp";
const debdTaylorImage = "/static/assets/home/testimonials/Debd.svg";
const dmytroShkodaImage = "/static/assets/home/testimonials/Dmytro.webp";
const rolfImage = "/static/assets/home/testimonials/Rolf.svg";
const doronHarelImage = "/static/assets/home/testimonials/Doron.svg";
const anthonySylvesterImage = "/static/assets/home/testimonials/Anthony.svg";
const brooklynFosterImage = "/static/assets/home/testimonials/Brooklyn.svg";
const paulVanAlphenImage = "/static/assets/home/testimonials/Paul.svg";

const REVIEW_WORD_LIMIT = 50;

function trimToWordLimit(text: string, limit: number): string {
  const words = text.trim().split(/\s+/);
  if (words.length <= limit) return text.trim();
  return words.slice(0, limit).join(" ");
}

export type Review = {
  author: string;
  publisher: string;
  position?: string;
  company?: string;
  country?: string;
  ratingValue: number;
  reviewBody: string;
  image: string;
  notForModal?: boolean;
};

const reviewsData: Review[] = [
  {
    author: "Brooklyn Foster",
    publisher: "GoodFirms",
    position: "Sales Director",
    company: "Cintas",
    country: "United States",
    image: brooklynFosterImage,
    ratingValue: 5,
    reviewBody:
      "Zyneto Global Technologies provided excellent project management and technical expertise throughout the engagement. The team was responsive, collaborative, and adaptive, ensuring the project met our expectations and set a strong foundation for future growth.",
  },
  {
    author: "Krystian Chlebek",
    publisher: "TechBehemoths",
    position: "Founder & CEO",
    company: "Moneteo",
    image: krystianImage,
    ratingValue: 5,
    reviewBody:
      "We engaged Zyneto to design and develop a custom web platform for Moneteo, aimed at improving project management, data tracking, and collaboration across internal teams and external partners. Their work included full-stack web development, custom modules for workflow automation, API integration, and comprehensive testing.",
  },
  
  {
    author: "Kevin Scott",
    publisher: "Clutch",
    position: "CEO",
    company: "E-Commerce Platform",
    image: kevinImage,
    ratingValue: 5,
    reviewBody:
      "Overall, their responsiveness and timely deliveries contributed positively to the project's success. The client achieved better data management and quality. The service provider delivered the project on time and ensured prompt responsiveness throughout the engagement. Their innovative approach was outstanding.",
  },
  {
    author: "Anthony Sylvester",
    publisher: "GoodFirms",
    position: "Director of Finance",
    company: "HireRight",
    country: "United States",
    image: anthonySylvesterImage,
    ratingValue: 5,
    reviewBody:
      "We partnered with Zyneto to design and implement a custom web platform tailored to our business needs. The engagement included full-stack development, API integration, AI-driven automation, and DevOps support. Their team was highly professional and consistently delivered milestones on schedule.",
  },
  {
    author: "Sanchayita",
    publisher: "Google",
    image: sanchayitaImage,
    notForModal: true,
    ratingValue: 5,
    reviewBody:
      "It's your go-to place for software solutions. With great client servicing and eagerness to deliver on time, Zyneto helped me grow my business. Through their help I improved my website's UX which led to huge traffic. Thanks Zyneto for helping me out! Highly recommended.",
  },
  {
    author: "Alejandro Alonso",
    publisher: "TechBehemoths",
    position: "CEO",
    company: "QVM Digital Marketing",
    image: alejandroImage,
    ratingValue: 5,
    reviewBody:
      "Zyneto helped us design and develop a custom AI platform tailored to our digital marketing workflows. The system analyses campaign data, identifies performance trends, and suggests optimization strategies. Our team can now generate reports in minutes instead of hours.",
  },
  {
    author: "Haider Baig",
    publisher: "GoodFirms",
    position: "CEO",
    company: "Future Technologies",
    image: haiderBaigImage,
    ratingValue: 5,
    reviewBody:
      "Zyneto Global Technologies exceeded our expectations by delivering a modern, fully responsive, and secure website. Their team was proactive, communicated clearly, and ensured the project was completed on schedule. Overall quality reflected their technical expertise.",
  },
  {
    author: "Damian Burke",
    publisher: "TechBehemoths",
    position: "ODM",
    company: "Corrib Oil ULC",
    country: "Ireland",
    image: damianImage,
    ratingValue: 5,
    reviewBody:
      "We hired Zyneto to build a new website and mobile application, plus a custom gift card solution. The task was large with three third-party platforms and huge databases needing merging. Zyneto made this seamless, hitting every deadline and keeping us within budget. Communication and hands-on problem-solving are exceptional.",
  },
  {
    author: "Debd Taylor",
    publisher: "TechBehemoths",
    position: "Head of Data",
    company: "Financial Edge",
    image: debdTaylorImage,
    ratingValue: 5,
    reviewBody:
      "We hired Zyneto to support development and enhancement of our training and data platform. The team used APIs for data retrieval and AI to translate data in foreign languages. They had strong technical skills and really understood our goals, so they could be proactive about problem solving and recommending improvements. Very regular, open dialogue throughout.",
  },
  {
    author: "Jitender Khatri",
    publisher: "Clutch",
    position: "Founder & CEO",
    company: "G4Girl",
    image: jitendraImage,
    ratingValue: 5,
    reviewBody:
      "Thanks to Zyneto Global Technologies, the client increased sales by fivefold, streamlined their operations, and reduced manual efforts. The project was completed within four months. Their communication and understanding approach were hallmarks of their work. A highly professional team.",
  },
  {
    author: "Rolf Magnus",
    publisher: "TechBehemoths",
    position: "CEO",
    company: "Algora AS",
    country: "Norway",
    image: rolfImage,
    ratingValue: 5,
    reviewBody:
      "Our collaboration with Zyneto spans numerous ongoing projects involving custom software, mobile and web development, UX/UI design, and digital transformation. What stands out is their proactive approach, exceptional UX/UI capabilities, and being able to deliver on time. Their designs are world-class.",
  },
  {
    author: "Yogendra Singh",
    publisher: "Google",
    notForModal: true,
    image: yogendraImage,
    ratingValue: 5,
    reviewBody:
      "I had an amazing experience with Zyneto Global Technologies. Despite an urgent request, they delivered quickly with great dedication. Their client-focused approach and cost-saving suggestions impressed me. Looking forward to collaborating again on future projects. Highly recommended team.",
  },
  {
    author: "Paul Van Alfen",
    publisher: "TechBehemoths",
    position: "MD",
    company: "Up in the Air",
    image: paulVanAlphenImage,
    ratingValue: 5,
    reviewBody:
      "Zyneto developed a reliable and user-friendly financial dashboard platform for our data analysis and reporting. The project involved a web-based application with real-time data integration and customizable reporting. The platform greatly reduced manual reporting time and boosted data accuracy.",
  },
  {
    author: "Apoorva Vasishtha",
    publisher: "Google",
    image: apoorvaImage,
    notForModal: true,
    ratingValue: 5,
    reviewBody:
      "Absolutely loved working with Zyneto! The team is polite, supportive, and always ready to help. They listen carefully to your requirements and deliver exactly what you expect, sometimes even better. The entire experience felt seamless and stress-free. I would happily recommend Zyneto to anyone looking for great service.",
  },
  {
    author: "Doron Harel",
    publisher: "GoodFirms",
    position: "CCO",
    company: "Mego Afek AC Ltd.",
    country: "Israel",
    image: doronHarelImage,
    ratingValue: 5,
    reviewBody:
      "Zyneto worked closely with our team to develop a custom web platform and software automation solutions for our medical device business. Their team was highly professional, responsive, and proactive, ensuring all deliverables were completed on time. The solutions improved operational efficiency and enhanced the user experience.",
  },
  {
    author: "Dmytro Shkoda",
    publisher: "GoodFirms",
    image: dmytroShkodaImage,
    notForModal: true,
    ratingValue: 5,
    reviewBody:
      "Zyneto Global Technologies managed the project professionally from start to finish. They handled front-end and back-end development, responsive design, and API integrations, ensuring the website met all our requirements. The final product improved user experience and data accessibility.",
  },
];

export const reviews: Review[] = reviewsData.map((r) => ({
  ...r,
  reviewBody: trimToWordLimit(r.reviewBody, REVIEW_WORD_LIMIT),
}));
