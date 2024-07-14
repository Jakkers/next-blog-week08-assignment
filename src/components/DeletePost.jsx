import { dbConnect } from "@/utils/dbConnection";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function DeletePost({ data }) {
  async function handleSubmit() {
    "use server";
    const db = dbConnect();
    await db.query(`DELETE FROM comments WHERE post_id = ${data} RETURNING *`);
    await db.query(`DELETE FROM ui_posts WHERE id = ${data} RETURNING *`);
    revalidatePath("/posts");
    redirect("/posts");
  }
  console.log(data);
  return (
    <form action={handleSubmit}>
      <button
        className=" hover:bg-white h-8 rounded text-white items-center p-1"
        type="submit"
      >
        ❌
      </button>
    </form>
  );
}
