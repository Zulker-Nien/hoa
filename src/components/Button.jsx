import "./component.scss";
import { Link } from "react-router-dom";
const button = (props) => {
  const { icon, title, color, iconColor, margin, link } = props;
  return (
    <>
      <Link to={link} style={{ textDecoration: "none" }}>
        <button
          style={{
            backgroundColor: `${color}`,
            color: `${iconColor}`,
            margin: `${margin}`
          }}
        >
          <p>{title}</p>
          <img alt="" src={icon} />
        </button>
      </Link>
    </>
  );
};

export default button;
