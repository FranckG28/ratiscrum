import { StaticImageData } from "next/image";
import { Member } from "./member";
import { Reward } from "./reward";

export interface Event {
    name: string;
    date: Date;
    location: string;
    description: string;
    technologies: string[];
    projectLink: string;
    eventLink: string;
    sourceLink: string;
    videoLink: string;
    members: Member[];
    rewards: Reward[];
    projectCarousel: StaticImageData[];
    album: StaticImageData[];
}