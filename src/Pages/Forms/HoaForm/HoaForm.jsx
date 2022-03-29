import "./hoaform.scss";
import { useRef, useState } from "react";
import BackBtn from "../../../components/BackBtn";
import HoaOne from "./HoaOne";
import HoaTwo from "./hoaTwo";
import HoaThree from "./hoaThree";
import HoaFour from "./hoaFour";
import arrow from "./arrow-right.png";
import arrowL from "./arrow-left.png";
import { useNavigate } from "react-router-dom";

const HoaForm = () => {
  const navigate = useNavigate();

  const ref = useRef();
  const [progress, setProgress] = useState(1);
  const handleProgress = () => {
    setProgress(progress + 1);
    window.scrollTo(0, ref.current.offsetTop);
    console.log(`prog:  ${progress}` )
  };
  const handleBack = () => {
    setProgress(progress - 1);
    window.scrollTo(0, ref.current.offsetTop);
    console.log(`back:  ${progress}` )
  };
  const handleSubmit = () => {
    setProgress(progress);
    navigate('/home')
  };
  return (
    <>
      <div className="formContainer">
        <div className="formHeader">
          <BackBtn link="/home" />
          <div className="formTitle" ref={ref}>
            {progress === 1 ? (
              <h1>HOA Information</h1>
            ) : progress === 2 ? (
              <h1>HOA Details</h1>
            ) : progress === 3 ? (
              <h1>HOA Violations and Regulations</h1>
            ) : (
              <h1>HOA Amenities</h1>
            )}
          </div>
          <div className="progress">
            {progress >= 1 && (
              <div
                className="circle"
                style={{ backgroundColor: "#154c8b" }}
              ></div>
            )}
            {progress >= 2 ? (
              <div
                className="circle"
                style={{ backgroundColor: "#154c8b" }}
              ></div>
            ) : (
              <div className="circle"></div>
            )}
            {progress >= 3 ? (
              <div
                className="circle"
                style={{ backgroundColor: "#154c8b" }}
              ></div>
            ) : (
              <div className="circle"></div>
            )}
            {progress >= 4 ? (
              <div
                className="circle"
                style={{ backgroundColor: "#154c8b" }}
              ></div>
            ) : (
              <div className="circle"></div>
            )}
          </div>
        </div>

        <div className="forms">
          {progress === 1 ? (
            <HoaOne progress={handleProgress} arrowR={arrow} navigate={navigate}/>
          ) : progress === 2 ? (
            <HoaTwo
              progress={handleProgress}
              back={handleBack}
              arrowR={arrow}
              arrowL={arrowL}
            />
          ) : progress === 3 ? (
            <HoaThree
              progress={handleProgress}
              back={handleBack}
              arrowR={arrow}
              arrowL={arrowL}
            />
          ) : (
            <HoaFour
              progress={handleSubmit}
              back={handleBack}
              arrowR={arrow}
              arrowL={arrowL}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default HoaForm;
