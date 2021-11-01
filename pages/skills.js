import SkillCard from "../components/SkillCard";

const Skills = () => {
    return (
    <div className="fading-in">
    <div className="content ">
      <div>
        {" "}
        <h1 className="text-2xl md:text-4xl">
        I had the opportunity to work on multiple project and learn different technologies, this is a list of my technical skills and qualifications I gained throughout the projects I contributed to.{" "}
        
        <span className="text-yellow-500">Java and Javafx</span>, to Web apps
          with
          <span className="text-blue-500"> MERN</span> stack,{" "}
          <span className="text-gray-500"> Laraval-Alpine-Tailwind</span> stack,
          <span className="text-pink-500">Graphql</span> or{" "}
          <span className="text-green-400">REST</span> APIs... I had various
          experiences with different technologies and done many projects in
          which I had the opportunity to learn a lot.
        </h1>
      </div>
    </div>
    <div>
      <SkillCard/>
    </div>
    {/* {projects.map((cardInfo, i) => (
      <Card key={i} {...cardInfo}></Card>
    ))} */}
  </div>);
}

export default Skills;