import { Member } from "@/models/member";
import getMember from "./getMember";

export default function getEventMembers(members: {
    slug: string;
    role?: string;
}[]): Promise<Member[]> {

    if (members?.length === 0) {
        return Promise.resolve([]);
    }

    return Promise.all(members.map(async (member) => {
        const m = await getMember(member.slug);
        return {
            ...m,
            role: member.role,
        } as Member;
    }));
}