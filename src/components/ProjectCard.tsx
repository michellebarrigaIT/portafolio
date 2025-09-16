import "./ProjectCard.scss";
import { type Project } from "../data/myPortafolio";
import type { FC } from "react";

type ProjectCardProps = {
    project: Project;
};

const ProjectCard: FC <ProjectCardProps> = ({project}) => {
  return (
    <div className="project-card">
        <div className="info">
            <h2>{project.name}</h2>
            <p className="description">{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
            <p className="technologies">Technologies: {project.technologies.join(", ")}</p>
            <img src={project.imageUrl} alt={project.name} className="project-image"/>
            <p className="status">{project.completed ? "Completed" : "In Progress"}</p>
        </div>
    </div>
  );
};

export default ProjectCard;
