// we need navigation here
// we need to use params to render data dynamically
//!remember the metadata

import { dbConnect } from "@/utils/dbConnection";
import Image from "next/image";

// importing comment form for users to leave comments
import CommentForm from "@/components/CommentForm";
import ShowComments from "@/components/ShowComments";

export default async function PostPage({ params }) {
  //here I need to get data from the database, filtering by id.
  //here, I need to handleSubmit for the comments form
  const db = dbConnect();
  const onePost = (
    await db.query(`SELECT ui_posts.id, ui_posts.title, ui_posts.image, ui_posts.content, ui_posts.source, categories.cat_name
FROM ui_posts
JOIN categories ON ui_posts.cat_id = categories.id WHERE ui_posts.id = ${params.id}`)
  ).rows;
  console.log(onePost);

  return (
    <>
      {/* here, I will dosplay data about each individual post (map method)  */}
      {onePost.map((post) => (
        <div key={post.id}>
          <h1>{post.title}</h1>
          <h2>{post.cat_name}</h2>
          <Image src={post.image} alt={post.title} width={1000} height={800} />
          <p>{post.content}</p>
          <a href={post.source} target="blank" className="text-sky-500">
            Website link
          </a>
        </div>
      ))}
      {/* Here, I will display a form with inputs connected to the database columns by name */}
      <CommentForm params={params.id} />
      <ShowComments params={params.id} />
    </>
  );
}
