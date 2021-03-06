import Card from "../components/Card";
import { projects } from "../data";

const Projects = () => (
  <div className="fading-in">
    <div className="content ">
      <div>
        {" "}
        <h1 className="text-2xl md:text-4xl">
          From Web applications with{" "}
          <span className="text-gray-500"> Laraval-Alpine-Tailwind</span> stack,
          <span className="text-blue-500"> MERN</span> stack with{" "} 
          <span className="text-pink-500">Graphql</span> or{" "}
          <span className="text-green-400">REST</span> APIs... 
          to Desktop apps using{" "}
          <span className="text-yellow-500">Java and Javafx</span>,
          I had various
          experiences with different technologies and done many projects in
          which I had the opportunity to learn a lot.
        </h1>
      </div>
    </div>
    {projects.map((cardInfo, i) => (
      <Card key={i} {...cardInfo}></Card>
    ))}
  </div>
);

export default Projects;