import { dbConnect } from "@/utils/dbConnection";
import DeleteComment from "./DeleteComment";

export default async function ShowComments({ params }) {
  const db = dbConnect();
  const userComment = (
    await db.query(`SELECT * FROM comments WHERE post_id = ${params}`)
  ).rows;

  console.log(params);

  return (
    <>
      {userComment.map((post) => (
        <div
          className="flex flex-col w-96 content-center p-4 gap-4 text-left"
          key={post.id}
        >
          <h1>{post.username}</h1>
          <p>{post.comment}</p>
          <DeleteComment params={params} data={post.id} />
        </div>
      ))}
    </>
  );
}
