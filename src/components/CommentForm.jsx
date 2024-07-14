import { dbConnect } from "@/utils/dbConnection";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import FormStyles from "@/styles/Form.module.css";

export default function CommentForm({ params }) {
  async function handleSubmit(formData) {
    "use server";
    const username = formData.get("username");
    const comment = formData.get("comment");
    const post_id = params;

    //put data in database
    const db = dbConnect();
    await db.query(
      `INSERT INTO comments(username, comment, post_id) VALUES ($1, $2, $3)`,
      [username, comment, post_id]
    );
    revalidatePath(`/posts/${params}`);
    redirect(`/posts/${params}`);
  }
  return (
    <form
      action={handleSubmit}
      className="flex flex-col w-96 content-center p-4"
    >
      <label htmlFor="username">Username </label>
      <input name="username" id={FormStyles.inputText} type="text"></input>
      <label htmlFor="comment">Comments </label>
      <textarea name="comment" id={FormStyles.inputText}></textarea>
      <button type="submit">Submit</button>
    </form>
  );
}
