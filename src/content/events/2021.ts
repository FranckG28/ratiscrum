import { Event } from "@/models/event";
import Rts2021 from "@/assets/rts2021.jpg";
import { franckG } from "../members/franck-g";
import { damienD } from "../members/damien-d";
import { julienVDM } from "../members/julien-vdm";
import { sofianeM } from "../members/sofiane-m";
import { rodrigueH } from "../members/rodrigue-h";
import { antoineT } from "../members/antoine-t";
import { erenC } from "../members/eren-c";
import { antoineV } from "../members/antoine-v";

export const event2021: Event = {
    slug: "ndli-2021",
    name: "Nuit de l'info 2021",
    date: new Date(2021, 12, 4),
    location: "IUT Robert Schuman, Illkirch Graffenstaden",
    description: `
    Cette année, le sujet a été élaboré par la station de Dunkerque de la Société Nationale de Sauvegarde en Mer (SNSM) et s’intitulait « L’informatique à l’aide de l’histoire des sauvetages en mer ». L'objectif était de créer un site communautaire repertoriant toutes les informations sur les sauvetages en mer. Les membres de la communauté pourront ajouter des informations sur les sauvetages, les bateaux, les sauvés ... 
    `,
    technologies: ["Laravel"],
    projectLink: "https://ndli.depret.net/",
    eventLink: "https://www.nuitdelinfo.com/nuitinfo/editions_precedentes:2021",
    sourceLink: "",
    videoId: "PxYjpuAVBN8",
    members: [
        damienD,
        franckG,
        julienVDM,
        sofianeM,
        rodrigueH,
        antoineT,
        erenC,
        antoineV,
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
        Rts2021
    ],
    album: [
        Rts2021
    ]
};