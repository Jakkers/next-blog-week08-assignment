import Link from "next/link";

export default function Header() {
  return (
    <>
      <Link href="/">Home</Link> | <Link href="/posts">Posts</Link> |{" "}
      <Link href="/newPost">New Post</Link>
    </>
  );
}
