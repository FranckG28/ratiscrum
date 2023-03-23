import erenCAvatar from "@/assets/avatar/erenC.jpg";
import { Member } from "@/models/member";

export const erenC: Member = {
  name: "Eren Ceylan",
  role: "Développeur Fullstack",
  avatar: erenCAvatar,
  links: [
    {
      name: "GitHub",
      icon: "github",
      url: "https://github.com/ErenMustafaGit",
    },
    {
      name: "Linkedin",
      icon: "linkedin",
      url: "https://www.linkedin.com/in/erenm-ceylan/",
    },
  ],
};
