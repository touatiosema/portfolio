import styles from "../styles/Card.module.scss";

export default ({
  image,
  projectLink,
  title,
  paragraphe1,
  paragraphe2,
  cardColor,
}) => (
  <div
    className={
      cardColor || "bg-gradient-to-b from-gray-900 to-black p-10 md:p-24"
    }
  >
    {/* <div className={styles.card}> */}
    <div className={styles.body}>
      <div className={styles.left}>
        <h2 className="mb-5 text-3xl">
          <img
            className="rounded-full bg-gray-900 inline-block"
            src={image}
            alt="logo"
          ></img>
          <a
            className="text-yellow-500 hover:text-yellow-600 pl-3"
            href={projectLink}
            target="_blank"
          >
            {title}
          </a>
        </h2>
        <div className="text-2xl md:pl-10">
          <h4 className="mb-5">{paragraphe1}</h4>
          <h4 className="mb-5">{paragraphe2}</h4>
        </div>
      </div>
      {/* <div className={styles.right}>
        <img src="/2.jpg" alt="maison" />
      </div> */}
    </div>
  </div>
);
