import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="div-flex">
      <h3 className="div-flex-name1">SHIVA PRASAD GUNAGANTI</h3>
      <div className="div-flex-details">
        <h5 className="div-flex-name">HOME</h5>
        <h5 className="div-flex-name">ABOUT</h5>
        {/* <h5 className="div-flex-name">SERVICES </h5> */}
<h5
  className="div-flex-name"
  style={{ cursor: 'pointer' }}
  onClick={() => window.open('https://www.linkedin.com/in/shiva-prasad-gunaganti-637048252', '_blank')}
>
  CONTACT
</h5>

      </div>
    </div>
  );
};
export default Navbar;
