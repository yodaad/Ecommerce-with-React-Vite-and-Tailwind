import linkedin from "../../Assets/linkedin.png";
import github from "../../Assets/github.png";

function Footer() {
  return (
    <div className="flex justify-center m-2 ">
      <p className="text-sm pt-1">Developed by Diego Arango</p>
      <a
        href="https://www.linkedin.com/in/diegoarango/"
        target="_blank"
        rel="noreferrer"
      >
        <img className="h-6 w-6 ml-3 mb-1" src={linkedin} alt="linkedin" />
      </a>
      <a href="https://github.com/yodaad" target="_blank" rel="noreferrer">
        <img className="h-6 w-6 ml-2 mb-1" src={github} alt="linkedin" />
      </a>
    </div>
  );
}

export { Footer };
