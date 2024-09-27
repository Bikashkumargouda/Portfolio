
import project1 from "..//assets/p1.webp"
import project2 from "..//assets/p2.webp"
import { FaFacebook, FaWhatsapp, FaTwitter, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import html from "..//assets/html.png"
import css from "..//assets/css.png"
import javascript from "..//assets/javascript.png"
import Bootstrap from "..//assets/Bootstrap.png"
import react from "..//assets/react.png"
import tailwind from "..//assets/tailwind.png"
import github from "..//assets/github.png"
import vscode from "..//assets/Vs code.png"

export const Education = [
  {
    year: "2021-2023",
    trade: "MCA",
    percentage: "8.3 CGPA",
    college: "Gandhi Academy of Engineering & Technology - BPUT",

  },
  {
    year: "2018-2021",
    trade: "BCA",
    percentage: "74.55%",
    college: "Disha college of Management & Technology. - Berhampur University",
  },

  {
    year: "2016-2018",
    trade: "+2, Science",
    percentage: "50%",
    college: "Binayak Acharya Junior College - CHSE",
  },
  {
    year: "2016",
    trade: "Matriculation",
    percentage: "70%",
    college: "Sashi Bhusan (S.B.) High School. - BSE",
  }
];

export const WorkExperience = [
  {
    title: "Web Developer",
    Duration: "2023 - Present",
    desc: "  Worked as Front-end developer. Build the whole Front End website (siitsurada.in), design and responsiveness used tailwind CSS and custom-designed pages , gave it a ”good look and feel” with fully responsive .  "
  }
]

export const AllProject = [
  {
    image: project1,
    title: "Coffee Shop",
    desc: " Conceptualized and designed a clean, intuitive user interface for a coffee shop Website, focusing on enhancing the user experience and ensuring ease of navigation.",
  },
  {
    image: project2,
    title: "AI Landing Page",
    desc: " Conceptualized and designed a clean, intuitive user interface for a coffee shop Website, focusing on enhancing the user experience and ensuring ease of navigation.",
  },
  {
    image: project1,
    title: "University Website",
    desc: " Conceptualized and designed a clean, intuitive user interface for a coffee shop Website, focusing on enhancing the user experience and ensuring ease of navigation.",
  },
  // {
  //   image: project1,
  //   title: "Spotify UI Clone",
  //   desc: " Conceptualized and designed a clean, intuitive user interface for a coffee shop Website, focusing on enhancing the user experience and ensuring ease of navigation.",
  // }
]

export const SocialLinklogo = [
  {
    link: "https://www.facebook.com/bikashkumar.biku.77",
    logo: <FaFacebook className='text-[#1092EE]' />,
  },
  {
    link: "https://web.whatsapp.com/",
    logo: <FaWhatsapp className='text-[#27D045]' />,
  },
  {
    link: "https://x.com/BikashKumarGo15",
    logo: <FaTwitter className='text-[#1C96E8]' />,
  },
  {
    link: "https://github.com/Bikashkumargouda",
    logo: <FaGithub className='text-[#000000]' />,
  },
  {
    link: "https://www.instagram.com/i_am_biku_/",
    logo: <FaInstagram className='text-[#EF206C]' />,
  },
  {
    link: "https://www.linkedin.com/feed/",
    logo: <FaLinkedin className='text-[#0270AD]' />,
  }
]


export const skillicon = [
  {
    id: 1,
    src: html,
    title: "HTML",
    style: "shadow-orange-500"
  },
  {
    id: 2,
    src: css,
    title: "CSS",
    style: "shadow-blue-500"
  },
  {
    id: 3,
    src: javascript,
    title: "JavaScript",
    style: "shadow-yellow-500"
  },
  {
    id: 4,
    src: Bootstrap,
    title: "Bootstrap",
    style: "shadow-purple-500"

  },
  {
    id: 5,
    src: react,
    title: "React",
    style: "shadow-blue-600"
  },
  {
    id: 6,
    src: tailwind,
    title: "TailwindCSS",
    style: "shadow-sky-400"
  },
  {
    id: 7,
    src: github,
    title: "Github",
    style: "shadow-gray-400"
  },
  {
    id: 8,
    src: vscode,
    title: "Vs Code",
    style: "shadow-blue-400"
  }
]
