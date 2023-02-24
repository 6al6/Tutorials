import PropTypes from "prop-types";
import Button from "./Button";
import { useLocation } from "react-router-dom";

const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation();
  return (
    <header className="header">
      <h1>{title}</h1>
      {location.pathname === "/" && (
        <Button
          color={`${showAdd ? "red" : "green"}`}
          text={`${showAdd ? "Close" : "Add"}`}
          onClick={onAdd}
          showAdd={showAdd}
        />
      )}
    </header>
  );
};

Header.defaultProps = {
  title: "Task tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

//CSS IN JS
/*
const headingStyle = {
  color: "red",
  backgroundColor: "black",
};
*/

export default Header;
