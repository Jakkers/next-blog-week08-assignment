import { dbConnect } from "@/utils/dbConnection";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import FormStyles from "@/styles/Form.module.css";
import ButtonStyles from "@/styles/Button.module.css";

export default function Form() {
  async function handleSubmit(formData) {
    "use server";

    const title = formData.get("title");
    const content = formData.get("content");
    const image = formData.get("image");
    const source = formData.get("source");
    const cat_id = formData.get("category");

    //put data in database
    const db = dbConnect();
    await db.query(
      `INSERT INTO ui_posts(title, content, image, source, cat_id) VALUES ($1, $2, $3, $4, $5)`,
      [title, content, image, source, cat_id]
    );
    revalidatePath("/posts");
    redirect("/posts");
  }

  return (
    <form
      action={handleSubmit}
      className="flex flex-col w-96 content-center p-4 gap-4 text-left"
    >
      <label htmlFor="title">Title </label>
      <input name="title" id={FormStyles.inputText} type="text"></input>
      <label htmlFor="content">Description </label>
      <textarea name="content" id={FormStyles.inputText} />
      <label htmlFor="image">Image URL </label>
      <input name="image" id={FormStyles.inputText} type="url" />
      <label htmlFor="source">Website/source URL </label>
      <input name="source" id={FormStyles.inputText} type="url" />
      <label htmlFor="category">Choose your industry from the list </label>
      <input list="categories" name="category" id={FormStyles.inputText} />
      <datalist id="categories">
        <option value="1">Accommodation and Food Service Activities</option>
        <option value="2">Construction</option>
        <option value="3">Agriculture, Forestry and Fishing</option>
        <option value="4">Other Service Activities</option>
        <option value="5">Transportation and Storage</option>
        <option value="6">
          Water Supply; Sewerage, Waste Management and Remediation Activities
        </option>
        <option value="7">Administrative and Support Service Activities</option>
        <option value="8">Financial and Insurance Activities</option>
        <option value="9">Arts, Entertainment and Recreation</option>
        <option value="10">
          Electricity, Gas, Steam and Air Conditioning Supply
        </option>
        <option value="11">Mining and Quarrying</option>
        <option value="12">
          Professional, Scientific and Technical Activities
        </option>
        <option value="13">Wholesale and Retail Trade</option>
        <option value="14">Human Health and Social Work Activities</option>
        <option value="15">Real Estate Activities</option>
        <option value="16">Information and Communication</option>
        <option value="17">Manufacturing</option>
        <option value="18">Life Sciences</option>
        <option value="19">
          Specialist Engineering, Infrastructure & Contractors
        </option>
        <option value="20">Business Franchises</option>
        <option value="21">Advisory & Financial Services</option>
        <option value="22">Technology</option>
        <option value="23">Online Retail</option>
        <option value="24">Consumer Goods & Services</option>
      </datalist>
      <button id={ButtonStyles.button} type="submit">
        Submit
      </button>
    </form>
  );
}
