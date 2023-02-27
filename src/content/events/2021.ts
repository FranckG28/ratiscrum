import { Event } from "@/models/event";
import Rts2021 from "@/assets/rts2021.jpg";
import Rts2022 from "@/assets/rts2022.jpg";
import { franckG } from "../members/franck-g";

export const event2021: Event = {
    slug: "ndli-2021",
    name: "Nuit de l'info 2021",
    date: new Date(2021, 12, 4),
    location: "IUT Robert Schuman, Illkirch Graffenstaden",
    description: `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ornare massa vitae fermentum sagittis. Donec tortor massa, molestie ac nulla et, porta sagittis lacus. Donec semper risus in interdum sollicitudin. Morbi ut ipsum a metus aliquam tristique. Etiam mauris velit, condimentum a lobortis id, vestibulum nec urna. Sed quis imperdiet orci, vel feugiat mauris. Aenean tincidunt est in viverra ullamcorper. Nulla eget consequat tortor, eu volutpat mi. Curabitur consectetur rhoncus ex, id posuere velit placerat et. Etiam at varius dolor. Proin venenatis orci sed lacinia vulputate.
    `,
    technologies: ["Laravel"],
    projectLink: "https://ndli.depret.net/",
    eventLink: "https://www.nuitdelinfo.com/nuitinfo/editions_precedentes:2021",
    sourceLink: "",
    videoId: "PxYjpuAVBN8",
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