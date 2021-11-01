import Link from "next/link";
const About = () => (
  <div className="content text-2xl md:text-3xl">
    <div className="fading-in">
      <h1 className="title font-semibold">
        I love <span className="react">web </span> 
        app development, but also very{" "}
        {/* and{" "}<span className="next">mobile</span>  */}
        interested in other <span className="text-yellow-600">IT</span> related
        fields, specially <span className="text-pink-500">web security.</span>
      </h1>
      <p className="mb-10 ">
        I’m Osema TOUATI, but you can just call me Osema.
      </p>
      <p className="mb-10 ">
        I was an international student, I took part of a double degree programe after being chosen for a scholarship, I graduated recently and I&apos;m looking for new opportunities. Here is{" "}
        <Link href="/studies">
          <a className="text-yellow-600 hover:text-yellow-500">
            My academic background
          </a>
        </Link>
        .
      </p>

      <p className="mb-10">
        I recently finished an internship at 
        <a href="https://www.soprasteria.com/" className="text-blue-600 hover:text-blue-500"> Sopra Steria</a> followed by a job proposition.
        I worked on the maintenance of a groupe of applications by fixing bugs and adding new features. You can find more about my professional background{" "}
        <Link href="/studies">
          <a className="text-yellow-600 hover:text-yellow-500">
            here
          </a>
        </Link>
      </p>

      <p className="mb-10">
        I try to specialize in <span className="bg-white text-black p-0.5 rounded-md font-bold">web apps developement</span>, in both backend and
        frontend, at the same time learning the best practices of software developement and how to build maintainable solutions with a clean code, 
        {/* continuous integration and developement, teamwork...  */}
        you can
        check my <span className="text-green-500">technical/soft skills</span>{" "}
        <Link href="/projects">
          <a className="text-yellow-600 hover:text-yellow-500">
            here
          </a>
        </Link>
        .
      </p>
      <p className="mb-10">
        Don't hesitate to{" "}
        <Link href="/contact">
          <a className="text-yellow-600 hover:text-yellow-500">
            contact
          </a>
        </Link>{" "}
        me, I'll be happy to hear from you.
      </p>
    </div>
  </div>
);

export default About;