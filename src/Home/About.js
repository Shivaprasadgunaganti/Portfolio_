import "./About.css";
const About = () => {
  return (
    <div className="container">
      <div className="container-head">
        <h3>ABOUT</h3>
        {/* <p>little info </p> */}
        <img
          src="https://i.pinimg.com/736x/dd/35/43/dd35436d369eb0efb564ecf545d491b1.jpg"
          height={80}
          width={100}
          alt=""
        />
      </div>

      <div className="div">
        <div className="div-div">
          <div className="div-child1">
            <i class="fa-solid fa-user" style={{color:"#34495E"}}></i>
          </div>

          <div className="div-details">
            <h4 style={{ color: "	#2C3E50" }}>Who I Am?</h4>

            <p style={{color:"	#555555"}}>
              Passionate about leveraging coding skills to create innovative web
              applications that enhance user experience
            </p>
          </div>
        </div>
        <div className="div-div">
          <div className="div-child1">
            <i class="fa-regular fa-gem" style={{color:"#1ABC9C"}}></i>
          </div>

          <div className="div-details">
            <h4 style={{ color: "	#16A085" }}>What I Do</h4>
            <p style={{color:"	#666666"}}>
              I design and build responsive websites using modern tools to
              deliver fast, user-friendly experiences
            </p>
          </div>
        </div>
        <div className="div-div">
          <div className="div-child1">
            <i class="fa-solid fa-heart" style={{color:"	#C0392B"}}></i>
          </div>

          <div className="div-details">
            <h4 style={{color:"	#E74C3C"}}>How I Work</h4>
            <p style={{color:"#7F1E1E"}}>
              I approach each project with care, writing clean code and focusing
              on both function and design
            </p>
          </div>
        </div>
        <div className="div-div">
          <div className="div-child1">
            <i class="fa-solid fa-clock" style={{color:"#D68910"}}></i>
          </div>

          <div className="div-details">
            <h4 style={{color:"#F39C12"}}>Why Work With Me</h4>
            <p style={{color:"#87530F"}}>
              I’m reliable, deadline-driven, and committed to delivering
              high-quality results every time
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
