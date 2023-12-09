import { Member } from "@/models/member";
import getMember from "./getMember";

export default function getEventMembers(slugs: string[]): Promise<Member[]> {

    if (slugs.length === 0) {
        return Promise.resolve([]);
    }

    return Promise.all(slugs.map(slug => getMember(slug)));
}