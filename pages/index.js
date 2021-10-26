import styles from "../styles/Home.module.scss";
import Link from "next/link";
export default function Home() {
  return (
    <div className="content text-2xl md:text-4xl">
      <div className="fading-in">
        <h2 className="mb-10">Hi, I'm Osema.</h2>
        <h1 className="text-4xl md:text-6xl">
          I freshly graduated as a software engineer at{" "}
          <a
            className="text-yellow-600 hover:text-yellow-500"
            href="https://enseirb-matmeca.bordeaux-inp.fr/fr"
            target="_black"
          >
            ENSEIRB-MATMECA{" "}
          </a>
          , and{" "}
          <a
            href="http://www.esi.dz"
            target="_blank"
            className="text-blue-600 hover:text-blue-500"
          >
            ESI
          </a>{" "}
          before that.
        </h1>
        <div>
          <h3>
            I like <span className="javascript">javascript</span> frameworks and solutions, I'm a <span className="text-blue-600">React </span>
            enthousiaste, <span className="next">Nextjs</span> lover.
          </h3>
          <h3>
            Passionate about efficient app development, architectural solutions
            and design patterns.
          </h3>
          <h3 className="mt-6">
            I always enjoy a challenge.
            <div className={styles.quotes}>
              Accept the challenges so that you can feel the exhilaration of
              victory
            </div>
          </h3>
          <h3 className="mt-5">
            <Link href="/about">
              <a
                className="text-yellow-600 hover:text-yellow-500"
                href="/about"
              >
                Learn more about me {">"}
              </a>
            </Link>
          </h3>
        </div>
      </div>
    </div>
  );
}
