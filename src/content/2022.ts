import { Event } from "@/models/event";

export const event2022: Event = {
    name: "Nuit de l'info 2022",
    date: new Date(2022, 12, 1),
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