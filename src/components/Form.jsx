export default function Form() {
  return (
    <form>
      <label htmlFor="title">Title </label>
      <input name="title" id="title" type="text"></input>
      <label htmlFor="content">Description </label>
      <textarea name="content" id="content" />
      <label htmlFor="image">Upload image </label>
      <input name="image" id="image" type="file" accept="image/*" />
      <label htmlFor="industry">Choose your industry from the list </label>
      <input list="industrys" name="industry" id="industry" />
      <datalist id="industrys">
        <option value="Accommodation and Food Service Activities" />
        <option value="Construction" />
        <option value="Agriculture, Forestry and Fishing" />
        <option value="Other Service Activities" />
        <option value="Transportation and Storage" />
        <option value="Water Supply; Sewerage, Waste Management and Remediation Activities" />
        <option value="Administrative and Support Service Activities" />
        <option value="Financial and Insurance Activities" />
        <option value="Arts, Entertainment and Recreation" />
        <option value="Electricity, Gas, Steam and Air Conditioning Supply" />
        <option value="Mining and Quarrying" />
        <option value="Professional, Scientific and Technical Activities" />
        <option value="Wholesale and Retail Trade" />
        <option value="Human Health and Social Work Activities" />
        <option value="Real Estate Activities" />
        <option value="Information and Communication" />
        <option value="Manufacturing" />
        <option value="Life Sciences" />{" "}
        <option value="Specialist Engineering, Infrastructure & Contractors" />
        <option value="Business Franchises" />
        <option value="Advisory & Financial Services" />
        <option value="Technology" />
        <option value="Online Retail" />
        <option value="Consumer Goods & Services" />
      </datalist>
      <button type="submit">Submit</button>
    </form>
  );
}
