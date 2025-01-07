import './App.css';
// import ProgressBar from './components/progressBar';
import ProjectCard from './components/projectCard'


const projects = [
  {
    name: "Test Project",
    description: "This is a test project card.",
    tools: ["React", "JavaScript", "CSS"]
  },
  {
    name: "Another Project",
    description: "This is another test project card.",
    tools: ["Python", "Flask", "SQLite"]
  }
];

function App() {
  return (
    <div className="App">
      <h1> 100 Shitty Projects </h1>
      <p className='intro'> I think the original idea for 100 shitty projects came from @visakanv. I like repetition, so here we are. </p>
      <div className="project-list">
        <ol>
        {projects.map((project, index) => (
          <li> <ProjectCard
            key={index}
            name={project.name}
            description={project.description}
            tools={project.tools}
          /> </li>
        ))}
      </ol>
      </div>
    </div>
  );
}

export default App;
