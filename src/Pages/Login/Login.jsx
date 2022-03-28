import "./login.scss";
import icon from "./icon/open-account-login.png";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="loginContainer">
      <div>
        <div className="loginTitle">
          <h1>HOA DATA</h1>
          <h3>MANAGEMENT</h3>
          <h1>PORTAL</h1>
        </div>
      </div>
      <div className="form">
        <form>
          <input type="text" id="fname" name="fname" placeholder="USERNAME" />
          <br />
          <input type="text" id="lname" name="lname" placeholder="PASSWORD" />
          <br />
          <br />

          <Button
            link="/home"
            icon={icon}
            title={"Login"}
            color="#154c8b"
            iconColor="#f0f8ff"
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
