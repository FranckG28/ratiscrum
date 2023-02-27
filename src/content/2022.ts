import { Event } from "@/models/event";
import Rts2022 from "@/assets/rts2022.jpg";
import Rts2021 from "@/assets/rts2021.jpg";

export const event2022: Event = {
    slug: "ndli-2022",
    name: "Nuit de l'info 2022",
    date: new Date("2022/12/01"),
    location: "UFR Math-Info, Strasbourg",
    description: "Ratisexe",
    technologies: ["React", "TailwindCSS", "Daisy UI"],
    projectLink: "https://ratiscrum.tgimenez.fr/",
    eventLink: "https://www.nuitdelinfo.com/nuitinfo/start",
    sourceLink: "https://github.com/Ratiscrum-V2/rts-app",
    videoLink: "https://youtu.be/W8-KJPoo4uw",
    members: [
        {
            name: "Franck GUTMANN",
            role: "Front end et vidéo",
            avatar: Rts2022,
            links: [
                {
                    name: "GitHub",
                    icon: "github",
                    url: "https://github.com/FranckG28",
                },
            ],
        }
    ],
    rewards: [
        {
            rank: 1,
            title: "VEGA CS GROUP",
            description: "1500€",
            url: "https://www.nuitdelinfo.com/inscription/defis/176",
        }
    ],
    projectCarousel: [
        Rts2021, Rts2022
    ],
    album: [
        Rts2021, Rts2022
    ]
};