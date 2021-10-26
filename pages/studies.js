import {info} from "../data";

const StudyPhase = ({
  title,
  place,
  date,
  description,
  image,
  imgbg,
  color,
  link,
}) => (
  <div className="relative  bg-gradient-to-r from-gray-900 rounded-xl my-5 p-10">
    <h2 className={"text-4xl font-bold mb-5 " + color}>{title}</h2>
    <img
      src={image}
      width="86"
      height="86"
      alt="logo"
      className={"float-right rounded-full " + imgbg}
    />
    <h5 className="text-2xl font-semibold mb-5">
      {place} <span className={color}>{date}</span>
    </h5>
    <p className="border-l-4 text-xl border-yellow-500 pl-3">
      {description}
      {link && (
        <a
          className="block mt-3 text-yellow-500 hover:text-yellow-300"
          href={link}
          target="_blank"
          rel="noreferrer" 
        >
          check here for more.
        </a>
      )}
    </p>
  </div>
);
const Studies = () => (
  <div className="p-5 md:p-24 fading-in">
    {info.map((s, i) => (
      <StudyPhase key={i} {...s} />
    ))}
  </div>
);

export default Studies;