import Header from "./Header";
import "./Layout.scss";
import { myPortafolio } from "../data/myPortafolio";
import Aside from "./Aside";
import ProjectCard from "./ProjectCard";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="parent">
        <div className="header">
            <Header 
                userName={myPortafolio.user.name} 
                userRole={myPortafolio.user.role} 
            />    
        </div>
        <div className="about-me">
            <Aside title="About Me">
                <p>{myPortafolio.user.description}</p>
                <p><strong>I'm from:</strong> {myPortafolio.user.location}</p>
            </Aside>
        </div>

        <div className="skills">
            <Aside title="Skills">
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
            </Aside>
            </div>

        <div className="main-content">
            {myPortafolio.projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
            ))}
        </div>
        <div className="footer">
            <Footer 
                userSocialLinks={myPortafolio.socialLinks}
            />
        </div>
    </div>
  );
};

export default Layout;
