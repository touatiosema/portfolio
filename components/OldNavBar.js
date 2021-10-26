import Link from "next/link";
import styles from "../styles/NavBar.module.scss";
import { useRouter } from "next/router";

export default () => {
  const router = useRouter(null);
  return (
    <div className={styles.navbar_desktop}>
      <nav>
        <Link href="/" as="/">
          <a
            className={router.asPath === "/" ? styles.selected : null}
            href="/"
          >
            <span className={styles.cool_underline}>Home</span>
          </a>
        </Link>
        <Link href="/about" as="/about">
          <a
            className={router.asPath === "/about" ? styles.selected : null}
            href="/about"
          >
            <span className={styles.cool_underline}>About</span>
          </a>
        </Link>
        <Link href="/projects" as="/projects">
          <a
            className={router.asPath === "/projects" ? styles.selected : null}
            href="/projects"
          >
            <span className={styles.cool_underline}>Projects</span>
          </a>
        </Link>
        <Link href="/studies" as="/studies">
          <a
            className={router.asPath === "/studies" ? styles.selected : null}
            href="/studies"
          >
            <span className={styles.cool_underline}>Studies</span>
          </a>
        </Link>
        <Link href="/contact" as="/contact">
          <a
            className={router.asPath === "/contact" ? styles.selected : null}
            href="/contact"
            data-value="contact"
          >
            <span className={styles.cool_underline}>Contact</span>
          </a>
        </Link>
      </nav>
    </div>
  );
};
