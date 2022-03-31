import BackBtn from "../../../../components/BackBtn";
import Citydata from "./Citydata";
import "./cityview.scss";
const CityView = () => {
  return (
    <div className="cityViewContainer">
      <div className="cityViewLeft">
        <BackBtn link="/home" />
        <div className="listCorpContainer">
          <div className="listCorpWrapper">
            <h3>List of City Corporation</h3>
            <div className="listCorp">
              <ul>
                <li>
                  <h4>City Corporation Name 1</h4>
                </li>
                <li>
                  <h4>City Corporation Name 1</h4>
                </li>
                <li>
                  <h4>City Corporation Name 1</h4>
                </li>
                <li>
                  <h4>City Corporation Name 1</h4>
                </li>
                <li>
                  <h4>City Corporation Name 1</h4>
                </li>
                <li>
                  <h4>City Corporation Name 1</h4>
                </li>
                <li>
                  <h4>City Corporation Name 1</h4>
                </li>
                <li>
                  <h4>City Corporation Name 1</h4>
                </li>
                <li>
                  <h4>City Corporation Name 1</h4>
                </li>
                <li>
                  <h4>City Corporation Name 1</h4>
                </li>
                <li>
                  <h4>City Corporation Name 1</h4>
                </li>
                <li>
                  <h4>City Corporation Name 1</h4>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="cityViewRight">
        <div className="cityViewTop">
          <h1>City Corporation Name</h1>
        </div>
        <div className="cityViewBottom">
          <div className="cityData">
            <Citydata cityLabel="Division" cityData="Dhaka" />
            <hr style={{margin:"auto", width:"95%"}}/>
            <Citydata cityLabel="Mayor" cityData="Dhaka" />
            <hr style={{margin:"auto", width:"95%"}}/>
            <Citydata cityLabel="Office Address" cityData="Dhaka" />
            <hr style={{margin:"auto", width:"95%"}}/>
            <Citydata cityLabel="Website" cityData="Dhaka" />
            <hr style={{margin:"auto", width:"95%"}}/>
            <Citydata cityLabel="Email" cityData="Dhaka" />
            <hr style={{margin:"auto", width:"95%"}}/>
            <Citydata cityLabel="Contact Number" cityData="Dhaka" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CityView;
