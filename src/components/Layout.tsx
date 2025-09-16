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
            <Aside 
                aboutMe={myPortafolio.user.description}
            />
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
