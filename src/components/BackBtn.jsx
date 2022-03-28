import { Link } from "react-router-dom";
import "./component.scss";

const BackBtn = (props) => {
  const { link } = props;

  return (
    <Link style={{textDecoration:"none"}} to={link}>
      <div className="backButton">
        <div className="arrow"></div>
        <p>Back</p>
      </div>
    </Link>
  );
};

export default BackBtn;
