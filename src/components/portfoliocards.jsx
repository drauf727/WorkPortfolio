import "../portfoliocards.css";

const PortfolioCard = ({ project }) => {
  return (
    <div className="project-card" style={{ backgroundImage: `url(${project.image})` }}>
      <div className="project-card-overlay">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-links">
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
            GitHub Repo
          </a>
          <a href={project.deployed} target="_blank" rel="noopener noreferrer" className="project-link">
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;