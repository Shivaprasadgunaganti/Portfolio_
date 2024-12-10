import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="div-flex">
      <h5 className="div-flex-name">NAME</h5>
      <div className="div-flex-details">
        <h5 className="div-flex-name">HOME</h5>
        <h5 className="div-flex-name">ABOUT</h5>
        <h5 className="div-flex-name">SERVICES </h5>
        <h5 className="div-flex-name">CONTACT</h5>
      </div>
    </div>
  );
};
export default Navbar;
