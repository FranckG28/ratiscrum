"use client";

import { MDXRemote } from "next-mdx-remote";

export default function Content({ mdx }: { mdx: any }): JSX.Element {
  return (
    <div className="text-slate-300">
      <MDXRemote {...mdx} />;
    </div>
  );
}
