import { Event } from "@/models/event";
import { franckG } from "../members/franck-g";
import { damienD } from "../members/damien-d";
import { julienVDM } from "../members/julien-vdm";
import { sofianeM } from "../members/sofiane-m";
import { rodrigueH } from "../members/rodrigue-h";
import { antoineT } from "../members/antoine-t";
import { erenC } from "../members/eren-c";
import { antoineV } from "../members/antoine-v";

import IMG1 from "@/assets/2021/gallery/1.JPG";
import IMG2 from "@/assets/2021/gallery/2.JPG";
import IMG3 from "@/assets/2021/gallery/3.JPG";
import IMG4 from "@/assets/2021/gallery/4.JPG";
import IMG5 from "@/assets/2021/gallery/5.JPG";
import IMG6 from "@/assets/2021/gallery/6.JPG";
import IMG7 from "@/assets/2021/gallery/7.JPG";
import IMG8 from "@/assets/2021/gallery/8.JPG";
import IMG9 from "@/assets/2021/gallery/9.JPG";
import IMG10 from "@/assets/2021/gallery/10.JPG";
import IMG11 from "@/assets/2021/gallery/11.JPG";
import IMG12 from "@/assets/2021/gallery/12.JPG";
import IMG13 from "@/assets/2021/gallery/13.JPG";
import IMG14 from "@/assets/2021/gallery/14.JPG";
import IMG15 from "@/assets/2021/gallery/15.JPG";
import IMG16 from "@/assets/2021/gallery/16.JPG";

import Project1 from "@/assets/2021/project/1.png";
import Project2 from "@/assets/2021/project/2.png";
import Project3 from "@/assets/2021/project/3.png";
import Project4 from "@/assets/2021/project/4.png";

export const event2021: Event = {
    slug: "ndli-2021",
    name: "Nuit de l'info 2021",
    date: new Date(2021, 12, 4),
    location: "IUT Robert Schuman, Illkirch Graffenstaden",
    description: `
    Cette année, le sujet a été élaboré par la station de Dunkerque de la Société Nationale de Sauvegarde en Mer (SNSM) et s'intitule « L’informatique à l’aide de l’histoire des sauvetages en mer ». L'objectif est de créer un site communautaire repertoriant toutes les informations sur les sauvetages en mer. Les membres de la communauté peuvent ensuite y ajouter de nouvelles informations sur les sauvetages, les bateaux, les sauvés, le tout avec un système de modération. 
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
        Project1,
        Project2,
        Project3,
        Project4,
    ],
    album: [
        IMG1,
        IMG2,
        IMG3,
        IMG4,
        IMG5,
        IMG6,
        IMG7,
        IMG8,
        IMG9,
        IMG10,
        IMG11,
        IMG12,
        IMG13,
        IMG14,
        IMG15,
        IMG16,
    ]
};