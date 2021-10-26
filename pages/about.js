import Link from "next/link";
export default () => (
  <div className="content text-2xl md:text-3xl">
    <div className="fading-in">
      <h1 className="title font-semibold">
        I love <span className="react">web </span> and{" "}
        <span className="next">mobile</span> app development, but also very
        interested in other <span className="text-yellow-600">IT</span> related
        fields, specially web security.
      </h1>
      <p className="mb-10 ">
        I’m Osema TOUATI, but you can just call me Osema.
      </p>
      <p className="mb-10 ">
        I was an international student, I took part of a double degree programe, I graduated recently and I'm looking for new opportunities. Here is{" "}
        <Link href="/studies">
          <a className="text-yellow-600 hover:text-yellow-500" href="/studies">
            My academic background
          </a>
        </Link>
        .
      </p>

      <p className="mb-10">
        I recently finished an internship at 
        <a href="https://www.soprasteria.com/" className="text-blue-600 hover:text-blue-500"> Sopra Steria</a> followed by a job proposition.
        I worked on the maintenance of groupe of applications by fixing bugs and adding new features. You can find more about my professional background{" "}
        <Link href="/studies">
          <a className="text-yellow-600 hover:text-yellow-500" href="/studies">
            here
          </a>
        </Link>
      </p>

      <p className="mb-10">
        I try to specialize in web apps developement, in both backend and
        frontend, at the same time learning the best practices of project
        management, continuous integration and developement, teamwork... you can
        check my technical/soft skills{" "}
        <Link href="/skills">
          <a className="text-yellow-600 hover:text-yellow-500" href="/skills">
            here
          </a>
        </Link>
        .
      </p>
      <p className="mb-10">
        Don't hesitate to{" "}
        <Link href="/contact">
          <a className="text-yellow-600 hover:text-yellow-500" href="/contact">
            contact
          </a>
        </Link>{" "}
        me, I'll be happy to hear from you.
      </p>
    </div>
  </div>
);
