//!remember the metadata

import Link from "next/link";

export default function Home() {
  return (
    <main className="flex  flex-col items-center justify-between p-24">
      <h1>A place to post UI inspiration</h1>
      <Link href="/posts">View posts</Link>
      <Link href="/newPost">Add a post</Link>
    </main>
  );
}
