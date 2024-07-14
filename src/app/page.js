//!remember the metadata
export const metadata = {
  title: "UI Reviews – HomePage",
  description: "A place to view and post UI inspiration",
};

import ButtonStyles from "@/styles/Button.module.css";

import Link from "next/link";

import Image from "next/image";

export default function Home() {
  return (
    <main>
      <h1>A place to post UI inspiration</h1>
      <Image
        src="https://cdn.dribbble.com/userupload/14920979/file/original-89136ceb867ea5b70115690a3e2713a5.png?resize=1024x768"
        alt="Ui preview"
        width={1000}
        height={800}
      />
      <div className="flex flex-row items-center justify-between p-24">
        <Link id={ButtonStyles.button} href="/posts">
          View posts
        </Link>
        <Link id={ButtonStyles.button} href="/newPost">
          Add a post
        </Link>
      </div>
    </main>
  );
}
