//we need some navigation sorted

//we need some query strings to sort data asc and desc
//!remember the metadata

import { dbConnect } from "@/utils/dbConnection";
import Image from "next/image";
import Link from "next/link";

export default async function PostsPage() {
  //here I need to get the posts from the database
  const db = dbConnect();
  const posts = (await db.query(`SELECT * FROM ui_posts`)).rows;
  console.log(posts);
  return (
    <>
      <h1>Posts</h1>
      <div className="grid grid-cols-6 gap-4 mx-6">
        {posts.map((post) => (
          <div key={post.id}>
            <Link href={`/posts/${post.id}`}>
              <Image
                src={post.image}
                alt={post.title}
                width={1000}
                height={800}
              />
            </Link>
            <h2>{post.title}</h2>
          </div>
        ))}
        {/* Here I need to map through the posts / display a list of posts */}
      </div>
    </>
  );
}
