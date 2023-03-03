import Rts2022 from "@/assets/rts2022.jpg";
import { Member } from "@/models/member";

export const julienVDM: Member = {
    name: "Julien Von Der Mark",
    role: "Back end",
    avatar: Rts2022,
    links: [
        {
            name: "GitHub",
            icon: "github",
            url: "https://github.com/jvondermarck",
        },
        {
            name: "Linkedin",
            icon: "linkedin",
            url: "https://www.linkedin.com/in/julien-von-der-marck/",
        },
    ],
}