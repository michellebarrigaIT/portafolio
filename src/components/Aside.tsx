import "./Aside.scss";
import type { FC } from "react";

type AsideProps = {
    aboutMe: string;
};

const ProjectCard: FC <AsideProps> = ({aboutMe}) => {
  return (
    <aside>
        <h2>About Me</h2>
        <p>{aboutMe}</p>
    </aside>
  );
};

export default ProjectCard;
