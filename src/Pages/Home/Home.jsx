import { Link } from "react-router-dom";
import { useState } from "react";
import "./home.scss";
import c1 from "./imgs/Circle_1.png";
import c2 from "./imgs/Circle_2.png";
import logOut from "./imgs/logout.png";
import Button from "../../components/Button";
const Home = () => {
  const [clicked, setClicked] = useState(false);
  const [clicked2, setClicked2] = useState(false);
  const [clickedProp, setClickedProp] = useState(false);

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

  return (
    <div className="mainContainer">
      <div className="mainLeft">
        <div className="imgContainer">
          <img alt="" src={c1} />
          <img alt="" src={c2} />
        </div>
        <div className="contentWrapper">
          <div className="circle"></div>
          <h1>John Doe</h1>
          <div className="bottom">
            <Button
              link={"/"}
              title={"Logout"}
              icon={logOut}
              color="#f0f8ff"
              iconColor="#154c8b"
            />
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
                <Button
                  link="/hoaform"
                  title="New Input"
                  margin="20px 20px 20px 20px"
                  color={"#1d1d1d"}
                  iconColor={"#fff"}
                />
                <Button
                  link="/hoaform"
                  title="Update HOA"
                  margin="0px 20px 20px 20px"
                  color={"#1d1d1d"}
                  iconColor={"#fff"}
                />
              </div>
            )}
            <div onClick={handleClickProp}>
              <Button
                link={""}
                title={"Property Form"}
                margin={"20px"}
                iconColor={"#fff"}
              />
            </div>
            {clickedProp && (
              <div className="extension">
                <Button
                  link="/propertyform"
                  title="Update Input"
                  margin="20px 20px 20px 20px"
                  color={"#1d1d1d"}
                  iconColor={"#fff"}
                />
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
                <Button
                  link="/citycorpform"
                  title="New Input"
                  margin="20px 20px 20px 20px"
                  color={"#1d1d1d"}
                  iconColor={"#fff"}
                />
                <Button
                  link="/citycorpform"
                  title="Update HOA"
                  margin="0px 20px 20px 20px"
                  color={"#1d1d1d"}
                  iconColor={"#fff"}
                />
              </div>
            )}
          </div>
        </div>
        {/* View Data Column */}
        <div className="dataColumns">
          <h1>View Data</h1>
          <div className="dataButtons">
            <Button
              link={"/"}
              title={"Log"}
              margin={"20px"}
              iconColor={"#fff"}
            />
            <Button
              link={"/"}
              title={"City Corporation"}
              margin={"20px"}
              iconColor={"#fff"}
            />
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
