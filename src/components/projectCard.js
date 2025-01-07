const ProjectCard = ({ name, description, tools }) => {
  return (
    <div className="project-card">
      <h3>{name} ⬈</h3>
      <p>{description}</p>
      {tools && tools.length > 0 && (
        <div className="project-tags">
          {tools.map((tool, index) => (
            <span key={index} className="project-tag">
              {tool}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
