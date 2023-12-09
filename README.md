![Ratiscrum Logo](https://raw.githubusercontent.com/FranckG28/Ratiscrum/main/public/rts-logo.png)

Homepage for the Ratiscrum team, with projects, members, videos, rewards and gallery. [Visit >](https://ratiscrum.vercel.app)

## Getting Started

First, install packages
```bash
pnpm install
```

Then, to run the development server:

```bash
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Editing content

### Events 

Events are located in `src/content/events`. The slug of an event is its filename.

e.g. : `src/content/events/2021.mdx`

Take at look at the existing events to see how to write it.

To add images to an event, simple put images files into `src/public/events/<slug>/project/` & `src/public/events/<slug>/gallery/`.

Supported images types are `.jpg`, `.jpeg` and `.png`.


### Members

Members are located in `src/content/members`. Each member has his own .mdx file.
To reference a member in an event, use his mdx file name (without the extension). 
The slug of a member is its filename.

The avatar of the member should be located in `public/members/<slug>.jpg`.
