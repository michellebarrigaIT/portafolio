import Header from "./components/Header";
import ProjectCard from "./components/ProjectCard";
import { myPortafolio } from "./data/myPortafolio";
import "./App.scss";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Header 
        userName={myPortafolio.user.name} 
        userRole={myPortafolio.user.role} 
      />
      <div className="card-list">
        {myPortafolio.projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <Footer 
        userSocialLinks={myPortafolio.socialLinks}
      />
    </div>
  );
}

export default App;
