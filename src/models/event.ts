import { StaticImageData } from "next/image";
import { EventPreview } from "./event-preview";
import { Member } from "./member";
import { Reward } from "./reward";

export interface Event extends EventPreview {
    location: string;
    description?: string;
    technologies: string[];
    projectLink: string;
    eventLink: string;
    sourceLink: string;
    videoId: string;
    members: Member[];
    rewards: Reward[];
    projectCarousel: StaticImageData[];
    album: StaticImageData[];
}