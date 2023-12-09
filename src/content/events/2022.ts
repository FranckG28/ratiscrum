import { Event } from "@/models/event";
import { franckG } from "../members/franck-g";
import { damienD } from "../members/damien-d";
import { antoineT } from "../members/antoine-t";
import { julienVDM } from "../members/julien-vdm";
import { raffaelDP } from "../members/raffael-dp";
import { rodrigueH } from "../members/rodrigue-h";
import { sofianeM } from "../members/sofiane-m";
import { tanguyG } from "../members/tanguy-g";

import Cheque1 from "@/assets/2022/cheque1.png";
import Cheque2 from "@/assets/2022/cheque2.png";
import Cheque3 from "@/assets/2022/cheque3.png";
import Cheque4 from "@/assets/2022/cheque4.png";
import Image1 from "@/assets/2022/1.jpg";
import Image2 from "@/assets/2022/2.jpg";
import Ratisexe1 from "@/assets/2022/project/Ratisexe1.png";
import Ratisexe2 from "@/assets/2022/project/Ratisexe2.png";
import Ratisexe3 from "@/assets/2022/project/Ratisexe3.png";

export const event2022: Event = {
    slug: "ndli-2022",
    name: "Nuit de l'info 2022",
    date: new Date("2022/12/01"),
    location: "UFR Math-Info, Strasbourg",
    technologies: ["React", "TailwindCSS", "Daisy UI"],
    projectLink: "https://ratisexe.ratiscrum.fr/",
    eventLink: "https://www.nuitdelinfo.com/nuitinfo/start",
    sourceLink: "https://github.com/Ratiscrum/rts-app",
    videoId: "W8-KJPoo4uw",
    members: [
        damienD,
        franckG,
        raffaelDP,
        julienVDM,
        tanguyG,
        antoineT,
        rodrigueH,
        sofianeM,
    ],
    rewards: [
        {
            rank: 1,
            title: "VEGA CS GROUP",
            description: "1500€",
        },
        {
            rank: 1,
            title: "THE AIRBUS X PRIZE",
            description: "500€ Illicado + visite des salles blanches d'intégration satellite à Toulouse",
        },
        {
            rank: 2,
            title: "Nuit de l'info",
            description: "Sujet national dévoilé au lancement de la nuit",
        }
    ],
    projectCarousel: [
        Ratisexe1,
        Ratisexe2,
        Ratisexe3,
    ],
    album: [
        Image1,
        Image2,
        Cheque1,
        Cheque2,
        Cheque3,
        Cheque4,
    ]
};