import { useState } from "react";
import "./home.scss";
import c1 from "./imgs/Circle_1.png";
import c2 from "./imgs/Circle_2.png";
import logOut from "./imgs/logout.png";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { Navigate } from "react-router-dom";

const Home = () => {
  const { logout, currentUser, isAuthenticated } = useAuth();

  const [clicked, setClicked] = useState(false);
  const [clicked2, setClicked2] = useState(false);
  const [clickedProp, setClickedProp] = useState(false);

  const logoutClicked = async () => {
    try {
      await logout();
    } catch (error) {
      alert(error.message);
    }
  };
  const handleClickHOA = () => {
    setClicked(!clicked);
    setClickedProp(false);
    setClicked2(false);
  };
  const handleClickCorp = () => {
    setClicked2(!clicked2);
    setClicked(false);
    setClickedProp(false);
  };
  const handleClickProp = () => {
    setClicked2(false);
    setClicked(false);
    setClickedProp(!clickedProp);
  };
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  } else
  return (
    <div className="mainContainer">
      <div className="mainLeft">
        <div className="imgContainer">
          <img alt="" src={c1} />
          <img alt="" src={c2} />
        </div>
        <div className="contentWrapper">
          <div className="circle"></div>
          <h1>{currentUser.email}</h1>
          <div className="bottom">
            <Link to="/" style={{ textDecoration: "none" }}>
              <Button
                clicked={logoutClicked}
                title={"Logout"}
                icon={logOut}
                color="#f0f8ff"
                iconColor="#154c8b"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="mainRight">
        {/* Form Input Column */}
        <div className="dataColumns">
          <h1>Form Inputs</h1>
          <div className="dataButtons">
            <div onClick={handleClickHOA}>
              <Button
                link={""}
                title={"HOA Input Form"}
                // margin={"20px"}
                iconColor={"#fff"}
                margin={"20px"}
              />
            </div>
            {clicked && (
              <div className="extension">
                <Link to={"/hoaform"} style={{ textDecoration: "none" }}>
                  <Button
                    link=""
                    title="New Input"
                    margin="20px 20px 20px 20px"
                    color={"#1d1d1d"}
                    iconColor={"#fff"}
                  />
                </Link>
                <form className="update">
                  <input type="text" required placeholder="Update HOA" />
                  <button>Go</button>
                </form>
              </div>
            )}
            <div onClick={handleClickProp}>
              <Button
                title={"Property Form"}
                margin={"20px"}
                iconColor={"#fff"}
              />
            </div>
            {clickedProp && (
              <div className="extension">
                <form className="update">
                  <input type="text" required placeholder="Update Property" />
                  <button>Go</button>
                </form>
              </div>
            )}

            <div onClick={handleClickCorp}>
              <Button
                link={""}
                title={"City Corp. Form"}
                margin={"20px"}
                iconColor={"#fff"}
              />
            </div>
            {clicked2 && (
              <div className="extension">
                <Link to="/citycorpform">
                  <Button
                    link="/citycorpform"
                    title="New Input"
                    margin="20px 20px 20px 20px"
                    color={"#1d1d1d"}
                    iconColor={"#fff"}
                  />
                </Link>

                <form className="update">
                  <input type="text" required placeholder="Update City Corp" />
                  <button>Go</button>
                </form>
              </div>
            )}
          </div>
        </div>
        {/* View Data Column */}
        <div className="dataColumns">
          <h1>View Data</h1>
          <div className="dataButtons">
            <Link to="/log" style={{ textDecoration: "none" }}>
              <Button title={"Log"} margin={"20px"} iconColor={"#fff"} />
            </Link>

            <Link to="/viewCityCorp" style={{ textDecoration: "none" }}>
              <Button
                title={"City Corporation"}
                margin={"20px"}
                iconColor={"#fff"}
              />
            </Link>
            <Button
              link={"/"}
              title={"All HOAs"}
              margin={"20px"}
              iconColor={"#fff"}
            />
            <Button
              link={"/"}
              title={"All Properties"}
              margin={"20px"}
              iconColor={"#fff"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
