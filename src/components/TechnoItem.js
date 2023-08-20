export default function TechnoItem(props) {
  const { techno, handleDelete } = props;
  return (
    <div className="card" key={techno.technoId}>
      <h2>{techno.name}</h2>
      <h3>{techno.category}</h3>
      <p>{techno.description}</p>
      <div className="footer">
        <button
          className="btn-delete"
          onClick={() => handleDelete(techno.technoId)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
