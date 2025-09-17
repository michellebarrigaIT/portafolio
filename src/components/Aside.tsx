import "./Aside.scss";

type AsideProps = {
  title: string;
  onSelect: (section: "about" | "skills" | "projects") => void;
  selectedSection: "about" | "skills" | "projects";
};

const Aside = ({ title, onSelect, selectedSection }: AsideProps) => {
  return (
    <aside className="aside">
      <h2>{title}</h2>
      <nav>
        <ul>
          <li 
            className={selectedSection === "about" ? "active" : ""} 
            onClick={() => onSelect("about")}
          >
            About Me
          </li>
          <li 
            className={selectedSection === "skills" ? "active" : ""} 
            onClick={() => onSelect("skills")}
          >
            Skills
          </li>
          <li 
            className={selectedSection === "projects" ? "active" : ""} 
            onClick={() => onSelect("projects")}
          >
            Projects
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Aside;
