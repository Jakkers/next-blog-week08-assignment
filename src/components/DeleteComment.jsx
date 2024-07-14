import { dbConnect } from "@/utils/dbConnection";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default function deleteButton({ data, params }) {
  async function handleSubmit() {
    "use server";
    console.log(data);

    //put data in database
    const db = dbConnect();
    await db.query(`DELETE FROM comments WHERE id = ${data} RETURNING *`);
    revalidatePath(`/posts/${params}`);
    redirect(`/posts/${params}`);
  }
  return (
    <>
      <form action={handleSubmit}>
        <button
          className=" hover:bg-white h-8 rounded text-white items-center p-1"
          type="submit"
        >
          ❌
        </button>
      </form>
    </>
  );
}
