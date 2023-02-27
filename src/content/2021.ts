import { Event } from "@/models/event";
import Rts2021 from "@/assets/rts2021.jpg";
import Rts2022 from "@/assets/rts2022.jpg";

export const event2021: Event = {
    slug: "ndli-2021",
    name: "Nuit de l'info 2021",
    date: new Date(2021, 12, 4),
    location: "IUT Robert Schuman, Illkirch Graffenstaden",
    description: "Les sauveteurs du dinkerkois",
    technologies: ["Laravel"],
    projectLink: "https://ndli.depret.net/",
    eventLink: "https://www.nuitdelinfo.com/nuitinfo/editions_precedentes:2021",
    sourceLink: "",
    videoLink: "https://youtu.be/PxYjpuAVBN8",
    members: [
        {
            name: "Franck GUTMANN",
            role: "Front end et vidéo",
            avatar: Rts2021,
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