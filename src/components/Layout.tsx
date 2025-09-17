import { useState } from "react";
import Header from "./Header";
import "./Layout.scss";
import { myPortafolio } from "../data/myPortafolio";
import Aside from "./Aside";
import ProjectCard from "./ProjectCard";
import Footer from "./Footer";

const Layout = () => {
  const [selectedSection, setSelectedSection] = useState<"about" | "skills" | "projects">("about");

  return (
    <div className="parent">
      <div className="header">
        <Header 
          userName={myPortafolio.user.name} 
          userRole={myPortafolio.user.role} 
          isStudent={myPortafolio.user.isStudent}
        />    
      </div>

      <div className="aside">
        <Aside 
          title="Menu"
          onSelect={setSelectedSection}
          selectedSection={selectedSection}
        />
      </div>

      <div className="main-content">
        {selectedSection === "about" && (
          <div>
            <h2>About Me</h2>
            <p>{myPortafolio.user.description}</p>
            <p><strong>I'm from:</strong> {myPortafolio.user.location}</p>
          </div>
        )}

        {selectedSection === "skills" && (
          <div>
            <h2>Skills</h2>
            <h3>Technical Skills</h3>
            <ul>
              {myPortafolio.skills
                .filter((skill) => !skill.isSoftSkill)
                .map((skill) => (
                  <li key={skill.id}>{skill.name}</li>
                ))}
            </ul>

            <h3>Soft Skills</h3>
            <ul>
              {myPortafolio.skills
                .filter((skill) => skill.isSoftSkill)
                .map((skill) => (
                  <li key={skill.id}>{skill.name}</li>
                ))}
            </ul>
          </div>
        )}

        {selectedSection === "projects" && (
          <div >
            <h2>Projects</h2>
            <div className="projects-section">
                {myPortafolio.projects.length > 0 ? (
                    myPortafolio.projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                    ))
                ) : (
                    <p>No projects to show yet.</p>
                )}
            </div>
          </div>
        )}
      </div>

      <div className="footer">
        <Footer userSocialLinks={myPortafolio.socialLinks} />
      </div>
    </div>
  );
};

export default Layout;
