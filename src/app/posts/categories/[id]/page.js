//we need some navigation sorted

//we need some query strings to sort data asc and desc
//!remember the metadata
export const metadata = {
  title: "UI Reviews – Posts",
  description: "Meet the team!",
};

import { dbConnect } from "@/utils/dbConnection";
import Image from "next/image";
import Link from "next/link";

//importing delete post function to pass props
import DeletePost from "@/components/DeletePost";
import CategoryList from "@/components/CategoryList";

export default async function CategoriesPage({ searchParams, params }) {
  //here I need to get the posts from the database
  const db = dbConnect();
  const posts = (
    await db.query(`SELECT * FROM ui_posts WHERE cat_id = ${params.id}`)
  ).rows;

  //serch params for sorting content
  const postData = await posts;
  if (searchParams.sort === "desc") {
    postData.reverse();
  }

  console.log(posts);
  return (
    <>
      <h1>Posts</h1>
      <div className="pb-9">
        <Link href={"/posts?sort=asc"}>Sort Ascending</Link> |{" "}
        <Link href={"/posts?sort=desc"}>Sort Descending</Link> |{" "}
        <Link href={"/posts"}>Show All</Link>
      </div>
      <CategoryList />
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-6">
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
            <DeletePost data={post.id} />
          </div>
        ))}
        {/* Here I need to map through the posts / display a list of posts */}
      </div>
    </>
  );
}
