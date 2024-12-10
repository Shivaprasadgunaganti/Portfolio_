import "./About.css";
const About = () => {
  return (
    <div className="container">
      <div className="container-head">
        <h3>ABOUT</h3>
        {/* <p>little info </p> */}
       <img src="https://i.pinimg.com/736x/dd/35/43/dd35436d369eb0efb564ecf545d491b1.jpg" height={80} width={100} alt="" />
      </div>

      <div className="div">
        <div className="div-div">
          <div className="div-child1">
            <i class="fa-solid fa-user"></i>
          </div>

          <div className="div-details">
          <h4>Who We Are ?</h4>
          <p>Passionate about leveraging coding skills to create innovative web applications that enhance user experience</p>
          </div>
        </div>
        <div className="div-div">
          <div className="div-child1">
          <i class="fa-regular fa-gem"></i>
          </div>

          <div className="div-details">
          <h4>Who We Are ?</h4>
          <p>Passionate about leveraging coding skills to create innovative web applications that enhance user experience</p>
          </div>
        </div>
        <div className="div-div">
          <div className="div-child1">
          <i class="fa-solid fa-heart"></i>
          </div>

          <div className="div-details">
          <h4>Who We Are ?</h4>
          <p>Passionate about leveraging coding skills to create innovative web applications that enhance user experience</p>
          </div>
        </div>
        <div className="div-div">
          <div className="div-child1">
          <i class="fa-solid fa-clock"></i>
          </div>

          <div className="div-details">
          <h4>Who We Are ?</h4>
          <p>Passionate about leveraging coding skills to create innovative web applications that enhance user experience</p>
          </div>
        </div>
        
      </div>
    </div>
  );
};
export default About;
