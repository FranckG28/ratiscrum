import { MemberLink } from "./member-link";

export interface Member {
    name: string;
    role: string;
    avatar: string;
    links: MemberLink[];
}