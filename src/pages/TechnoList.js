import TechnoItem from "../components/TechnoItem";

export default function TechnoList(props) {
  const { technos, handleDelete } = props;
  return (
    <div>
      <h1>All Techno</h1>
      <div>
        {technos.map((techno, index) => (
          <TechnoItem techno={techno} key={index} handleDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
}
