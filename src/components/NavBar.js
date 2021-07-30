import { Navbar, FormControl } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";

const NavBar = ({ title, handleChange, rate, ratingChanged }) => {
  return (
    <Navbar bg="dark" variant="dark" className="d-flex justify-content-between">
      <Navbar.Brand href="#home">
        <img
            src="https://www.freepnglogos.com/uploads/red-netflix-logo-text-png-3.png"
            alt="hbo"
            style={{ height: 70, margin: 0 }}
          /></Navbar.Brand>
      <div>
        <FormControl
          type="search"
          placeholder="Search"
          className="mr-2"
          onChange={handleChange}
          value={title}
        />
        <ReactStars
          count={5}
          onChange={ratingChanged}
          size={24}
          activeColor="#ffd700"
          isHalf={true}
          value={rate}
        />
      </div>
    </Navbar>
  );
};

export default NavBar;
