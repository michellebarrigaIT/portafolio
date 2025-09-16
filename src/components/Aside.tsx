import "./Aside.scss";
import type { FC, ReactNode } from "react";

type AsideProps = {
    title: string;
    children: ReactNode;
};

const ProjectCard: FC <AsideProps> = ({title, children}) => {
  return (
    <aside className="aside">
      <h2 className="aside-title">{title}</h2>
      <div className="aside-content">{children}</div>
    </aside>
  );
};

export default ProjectCard;
