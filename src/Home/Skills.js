import { ProgressBar } from "react-bootstrap";
import file from "../files/Shiva_Prasad.pdf";
import "./Skills.css";
const Skills = () => {
  const buttonHandler = () => {
    const link = document.createElement("a");
    link.href = file;

    link.setAttribute("download", "shiva_prasad_resume");
    document.body.appendChild(link);
    link.click();
    // document.body.removeChild(link)
  };

  return (
    <div className="skills-head">
      <h3>Skills</h3>
      <div className="skills-main">
        <div className="skills-div1">
          <p>Html & Css</p>

          <ProgressBar now={90} animated={35} />
          <br />
          <p>Java Script</p>
          <ProgressBar now={85} animated={50} variant="success" />
        </div>
        <div className="skills-div2">
          <p>React</p>
          <ProgressBar now={90} variant="info" animated={100} />
          <br />
          <p>Bootstrap</p>
          <ProgressBar now={80} variant="warning" animated={20} />
        </div>
      </div>
      <div className="skills-children">
        <div className="skills-children-main">
          <h4>Download Resume</h4>
          <p>
            Transforming ideas into sleek, functional websites—where creativity
            meets cutting-edge technology
          </p>
        </div>
        <button onClick={buttonHandler} className="skills-btn">Download</button>
      </div>
    </div>
  );
};
export default Skills;
