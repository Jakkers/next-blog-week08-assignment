import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import FormStyles from "@/styles/Form.module.css";

//Create a dropdown list to organise by category

export default function CategoryList() {
  async function handleSelect(formData) {
    "use server";
    console.log(formData);
    const cat_id = formData.get("category");
    revalidatePath(`/posts/categories/${cat_id}`);
    redirect(`/posts/categories/${cat_id}`);
  }
  return (
    <form action={handleSelect} className="pb-7">
      <label htmlFor="category">Filter By Industry </label>
      <select
        className="w-48"
        id={FormStyles.inputText}
        name="category"
        required
      >
        <option value="">Select Option</option>
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
      </select>
      <button type="submit">Submit</button>
    </form>
  );
}
