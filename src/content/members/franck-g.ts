import franckGAvatar from "@/assets/avatar/franckG.jpg";
import { Member } from "@/models/member";

export const franckG: Member = {
    name: "Franck Gutmann",
    role: "Front end et vidéo",
    avatar: franckGAvatar,
    links: [
        {
            name: "GitHub",
            icon: "github",
            url: "https://github.com/FranckG28",
        },
        {
            name: "Linkedin",
            icon: "linkedin",
            url: "https://www.linkedin.com/in/franck-g/",
        },
    ],
}