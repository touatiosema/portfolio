import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/NavBar.module.scss";
import { useState } from "react";

const NavLink = ({ href, as, current, text, mobile }) => (
  <Link href={href} as={as}>
    <a
      className={
        (current ? styles.selected : null) +
        (mobile
          ? " bg-gray-900 text-white block px-3 py-2 rounded-md text-xl font-medium"
          : " text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md  text-xl")
      }
    >
      <span className={styles.cool_underline}>{text}</span>
    </a>
  </Link>
);

const NavBar = () => {
  const router = useRouter(null);
  const [isOpen, setOpen] = useState(false);

  return (
    <nav className="bg-black ">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:ring-yellow-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-600"
              onClick={() => setOpen(!isOpen)}
            >
              <svg
                className={(isOpen ? "hidden" : null) + " h-6 w-6"}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={(isOpen ? null : "hidden") + " h-6 w-6"}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:block sm:ml-6 flex-grow">
              <div className="flex space-x-4">
                <NavLink
                  href="/"
                  as="/"
                  current={router.asPath === "/"}
                  text="Home"
                />
                <NavLink
                  href="/about"
                  as="/about"
                  current={router.asPath === "/about"}
                  text="About"
                />
                <NavLink
                  href="/projects"
                  as="/projects"
                  current={router.asPath === "/projects"}
                  text="Projects"
                />
                <NavLink
                  href="/studies"
                  as="/studies"
                  current={router.asPath === "/studies"}
                  text="Studies"
                />
                {/* <NavLink
                  href="/skills"
                  as="/skills"
                  current={router.asPath === "/skills"}
                  text="Skills"
                /> */}
                <NavLink
                  href="/blog"
                  as="/blog"
                  current={router.asPath === "/blog"}
                  text="Blog"
                />
                <div className="flex-grow flex flex-row-reverse">
                  <NavLink
                    href="/contact"
                    as="/contact"
                    current={router.asPath === "/contact"}
                    text="Contact"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="sm:hidden fading-in-fast">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <NavLink
              href="/"
              as="/"
              current={router.asPath === "/"}
              text="Home"
              mobile
            />
            <NavLink
              href="/about"
              as="/about"
              current={router.asPath === "/about"}
              text="About"
              mobile
            />
            <NavLink
              href="/projects"
              as="/projects"
              current={router.asPath === "/projects"}
              text="Projects"
              mobile
            />
            <NavLink
              href="/studies"
              as="/studies"
              current={router.asPath === "/studies"}
              text="Studies"
              mobile
            />
            <NavLink
              href="/blog"
              as="/blog"
              current={router.asPath === "/blog"}
              text="Blog"
              mobile
            />
            <NavLink
              href="/contact"
              as="/contact"
              current={router.asPath === "/contact"}
              text="Contact"
              mobile
            />
          </div>
        </div>
      )}
    </nav>
  );
};


export default NavBar;