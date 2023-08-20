import { useState } from "react";

export default function TechnoAdd(props) {
  const [techno, setTechno] = useState({
    name: "",
    category: "",
    description: "",
  });

  const { handleAddTechno } = props;

  function handleSubmit(evt) {
    evt.preventDefault();
    handleAddTechno(techno);
    setTechno({ name: "", category: "", description: "" });
  }

  function handleChange(evt) {
    const { name, value } = evt.target;
    setTechno({ ...techno, [name]: value });
    //setTechno({ ...techno, [evt.target.name]: evt.target.value });
  }

  return (
    <div className="techno-add">
      <h1>Add Techno</h1>
      <div>
        <form onSubmit={(evt) => handleSubmit(evt)}>
          <label htmlFor="name">Name:</label>
          <br />
          <input
            type="text"
            id="name"
            name="name"
            value={techno.name}
            onChange={(evt) => handleChange(evt)}
          />
          <br />
          <label htmlFor="category">Category:</label>
          <br />
          <select
            name="category"
            id="category"
            value={techno.category}
            onChange={(evt) => handleChange(evt)}
          >
            <option value="">Select a category</option>
            <option value="frontend">Frontend</option>
            <option value="backend">Backend</option>
            <option value="devops">Devops</option>
            <option value="other">Other</option>
          </select>
          <br />
          <label htmlFor="description">Description:</label>
          <br />
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="10"
            value={techno.description}
            onChange={(evt) => handleChange(evt)}
          ></textarea>
          <br />
          <input className="btn" type="submit" value="Add Techno" />
        </form>
      </div>
    </div>
  );
}
