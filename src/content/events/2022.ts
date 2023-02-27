import { Event } from "@/models/event";
import Rts2022 from "@/assets/rts2022.jpg";
import Rts2021 from "@/assets/rts2021.jpg";
import { franckG } from "../members/franck-g";

export const event2022: Event = {
    slug: "ndli-2022",
    name: "Nuit de l'info 2022",
    date: new Date("2022/12/01"),
    location: "UFR Math-Info, Strasbourg",
    description: `
    Curabitur tempus, risus et accumsan congue, purus neque suscipit magna, nec aliquet purus sem ut sem. Etiam maximus odio risus, eu dignissim mi scelerisque sed. Curabitur hendrerit quam ac eleifend fringilla. Morbi aliquet in tellus in sagittis. Ut tincidunt tellus eu metus gravida interdum eu ac enim. Vestibulum vestibulum libero in ante tempor, sed consequat nisi vehicula. In egestas luctus mollis. Nunc eu imperdiet massa. Aliquam pharetra tellus sed libero lobortis, vel congue nibh feugiat. Ut a nulla id nisl imperdiet tempus. Nulla ac scelerisque ligula, et consectetur justo. In commodo augue vel tempus semper.
    `,
    technologies: ["React", "TailwindCSS", "Daisy UI"],
    projectLink: "https://ratiscrum.tgimenez.fr/",
    eventLink: "https://www.nuitdelinfo.com/nuitinfo/start",
    sourceLink: "https://github.com/Ratiscrum-V2/rts-app",
    videoId: "W8-KJPoo4uw",
    members: Array(8).fill(franckG),
    rewards: [
        {
            rank: 1,
            title: "VEGA CS GROUP",
            description: "1500€",
            url: "https://www.nuitdelinfo.com/inscription/defis/176",
        }
    ],
    projectCarousel: [
        Rts2021, Rts2022
    ],
    album: [
        Rts2021, Rts2022
    ]
};