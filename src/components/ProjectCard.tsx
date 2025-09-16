import "./ProjectCard.scss";
import { type Project } from "../data/myPortafolio";
import type { FC } from "react";
import { TbProgressCheck } from 'react-icons/tb'; 
import { FaCircleCheck } from 'react-icons/fa6';

type ProjectCardProps = {
    project: Project;
};

const ProjectCard: FC <ProjectCardProps> = ({project}) => {
  return (
    <div className="project-card">
        <div className="info">
            <h2>{project.name}</h2>
            <img src={project.imageUrl} alt={project.name} className="project-image"/>
            <p className="description">{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
            <p className="technologies">Technologies: {project.technologies.join(", ")}</p>
            <p className="status">{project.completed ? 
            (
              <FaCircleCheck />
            ) : <TbProgressCheck/>}</p>
        </div>
    </div>
  );
};

export default ProjectCard;
