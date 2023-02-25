import { Event } from "@/models/event";

export const event2021: Event = {
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
            avatar: require("@/assets/images/members/2021/franck-gutmann.jpg"),
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
        require("@/assets/images/events/2021/ndli-2021-1.jpg"),
    ],
    album: [
        require("@/assets/images/events/2021/ndli-2021-1.jpg"),
    ]
};