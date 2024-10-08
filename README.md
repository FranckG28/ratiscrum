![image](https://github.com/FranckG28/Ratiscrum/assets/19238963/f1f618bc-0b4b-4ceb-8259-69dc631f82ab)

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

Events are located in `content/events`. The slug of an event is its filename.

e.g. : `content/events/2021.mdx`

Take at look at the existing events to see how to write it.

#### Projet images

To add **images** to an event, simple put images files into `public/events/<slug>/project/` & `public/events/<slug>/gallery/`.

Supported images types are `.jpg`, `.jpeg` and `.png`.

Make sure to upload well compressed image (<5MB). Our deployement platform (Vercel) has a limit for the whole project.
You can compress medias efficiently with [Squoosh](https://squoosh.app/).

#### Metadata

The metadatas are generated automatically from the event content. However, you can set your own OG image (800x600px) by adding a `og.jpg` file in `public/events/<slug>/`.


### Members

Members are located in `content/members`. Each member has his own .mdx file.
To reference a member in an event, use his mdx file name (without the extension). 
The slug of a member is its filename.

The avatar of the member should be located in `public/members/<slug>.jpg`.
