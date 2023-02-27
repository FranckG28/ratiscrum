import { StaticImageData } from "next/image";
import { MemberLink } from "./member-link";

export interface Member {
    name: string;
    role: string;
    avatar: StaticImageData;
    links: MemberLink[];
}