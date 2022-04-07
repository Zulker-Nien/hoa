import "./login.scss";
import icon from "./icon/open-account-login.png";
import Button from "../../components/Button";
import { useRef, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Navigate } from "react-router-dom";
const Login = () => {
  const { login, isAuthenticated } = useAuth();

  const [loading, setLoading] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();

  async function handleSubmit(e) {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    setLoading(true);
    try {
      await login(email, password);
    } catch (error) {
      alert(error.message);
    }
    setLoading(false);
  }

  if (isAuthenticated) {
    return <Navigate to="/" />;
  } else
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
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              id="fname"
              name="fname"
              placeholder="EMAIL"
              ref={emailRef}
            />
            <br />
            <input
              type="text"
              id="lname"
              name="password"
              placeholder="PASSWORD"
              ref={passwordRef}
            />
            <br />
            <br />

            <Button
              disabled={loading}
              type="submit"
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
