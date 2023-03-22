import { Event } from "@/models/event";
import Rts2021 from "@/assets/rts2021.jpg";
import { franckG } from "../members/franck-g";
import { damienD } from "../members/damien-d";
import { antoineT } from "../members/antoine-t";
import { julienVDM } from "../members/julien-vdm";
import { raffaelDP } from "../members/raffael-dp";
import { rodrigueH } from "../members/rodrigue-h";
import { sofianeM } from "../members/sofiane-m";
import { tanguyG } from "../members/tanguy-g";

export const event2022: Event = {
    slug: "ndli-2022",
    name: "Nuit de l'info 2022",
    date: new Date("2022/12/01"),
    location: "UFR Math-Info, Strasbourg",
    description: `
    Notre projet s'inscrit dans l'objectif de la nuit de l'info 2022. En ce 1er décembre 2022, 34ème journée
    mondiale de lutte contre le SIDA, notre mission était de développer un jeu en ligne dans le but 
    de sensibiliser les utilisateurs aux problématiques liées à la santé sexuelle.
    A travers une approche ludique et dédramatisante de la sexualité, nous avons donc réfléchi à un concept
    de jeu qui nous permettrait d'atteindre cet objectif.

    Notre jeu tire son inspiration du jeu Reigns ou le joueur doit gérer son royaume en effectuant des choix qui vont
    impacter l'un des facteurs clé du royaume (finances, armée, peuple, église).

    C'est avec cette idée en tête que nous avons créé Ratisexe. Chaque jour, le joueur va devoir faire un choix
    qui va l'impacter sur sa santé, son plaisir sexuel et sur ses finances. Le but du jeu ? Aller le plus loin possible
    sans qu'aucun de ces trois indicateurs ne finisse à zéro !
    `,
    technologies: ["React", "TailwindCSS", "Daisy UI"],
    projectLink: "https://ratiscrum.tgimenez.fr/",
    eventLink: "https://www.nuitdelinfo.com/nuitinfo/start",
    sourceLink: "https://github.com/Ratiscrum-V2/rts-app",
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
            url: "https://www.nuitdelinfo.com/inscription/defis/176",
        },
        {
            rank: 1,
            title: "THE AIRBUS X PRIZE",
            description: "500€ Illicado + visite des salles blanches d'intégration satellite à Toulouse",
            url: "https://www.nuitdelinfo.com/inscription/defis/375",
        },
        {
            rank: 2,
            title: "Nuit de l'info",
            description: "Sujet national dévoilé au lancement de la nuit",
            url: "https://www.nuitdelinfo.com/inscription/defis/174",
        }
    ],
    projectCarousel: [
        Rts2021,
    ],
    album: [
        Rts2021,
    ]
};