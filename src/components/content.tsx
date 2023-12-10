"use client";

import { MDXRemote } from "next-mdx-remote";

export default function Content({ mdx }: { mdx: any }): JSX.Element {
  return <MDXRemote {...mdx} />;
}
