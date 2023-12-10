import { EventPreview } from "./event-preview";
import { Member } from "./member";
import { Reward } from "./reward";

export interface Event extends EventPreview {
    location: string;
    excerpt: string;
    tags: string[];
    technologies: string[];
    projectLink: string;
    eventLink: string;
    sourceLink: string;
    videoId: string;
    members: Member[];
    rewards: Reward[];
    galleryImages: string[];
    projectImages: string[];
}