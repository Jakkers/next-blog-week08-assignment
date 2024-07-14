//you need some navigation
//!remember the metadata

export const metadata = {
  title: "UI Reviews – Add Post",
  description: "Add your UI submissions here",
};

// for adding an option to upload an image
import Form from "@/components/Form";
import Link from "next/link";

export default function NewPostPage() {
  //have a function to handle the submit
  //ad the data from the inputs to the database
  return (
    <>
      <h1>New Post Form</h1>
      <Form />
      <p>If you need image hosting click the link below</p>
      <Link
        href="https://postimages.org/"
        target="blank"
        className="text-sky-500"
      >
        Create Image URL
      </Link>
      {/* <ImageUpload /> */}
      {/* add a form to collect user input  */}
    </>
  );
}
