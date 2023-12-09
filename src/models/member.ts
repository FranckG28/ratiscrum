import { MemberLink } from "./member-link";

export interface Member {
    name: string;
    role?: string;
    avatarUrl: string;
    links?: MemberLink[];
}