// "use client";

// export default function DeleteComment({ delPost }) {
//   return <button onClick={delPost}>Del</button>;
// }
// // }
// import { dbConnect } from "@/utils/dbConnection";

// export default function deleteButton() {
//   async function getData() {
//     const db = dbConnect();
//     const commentsData = (await db.query(`SELECT id FROM comments`)).rows;
//     return commentsData;
//   }
//   const id = getData();
//   console.log(id);

//   async function handleSubmit(deleteData) {
//     "use server";
//     const id = deleteData.get("id");

//     //put data in database
//     const db = dbConnect();
//     await db.query(`DELETE FROM comments WHERE id = ${id} RETURNING *`, [id]);
//   }
//   return (
//     <>
//       <form action={handleSubmit}>
//         <input id="id"></input>
//         <button type="submit">del</button>
//       </form>
//     </>
//   );
// }
