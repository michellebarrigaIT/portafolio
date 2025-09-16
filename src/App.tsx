import ProjectCard from "./components/ProjectCard";
import { myPortafolio } from "./data/myPortafolio";

function App() {
  return (
    <div className="app">
      <h1>User Profiles</h1>
      <div className="card-list">
        {myPortafolio.projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default App;
