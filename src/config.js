import FaIcons from "./components/FontAwesome";

const {
  faHome,
  faUser,
  faToolbox,
  faHardHat,
  faRocket,
  faGraduationCap,
  faPhoneAlt,
} = FaIcons;

export const sidebarItems = [
  {
    title: "Home",
    path: "/",
    icon: faHome,
  },
  {
    title: "About Me",
    path: "/about",
    icon: faUser,
  },
  {
    title: "Skills",
    path: "/skills",
    icon: faToolbox,
  },
  {
    title: "Experience",
    path: "/experience",
    icon: faHardHat,
  },
  {
    title: "Projects",
    path: "/projects",
    icon: faRocket,
  },
  {
    title: "Education",
    path: "/education",
    icon: faGraduationCap,
  },
  {
    title: "Contact",
    path: "/contact",
    icon: faPhoneAlt,
  },
];

export const myInfo = {
  fullName: "Amir Zad",
  imageUrl: "https://via.placeholder.com/150",
  jobTitle: "Full-Stack Developer",
};
