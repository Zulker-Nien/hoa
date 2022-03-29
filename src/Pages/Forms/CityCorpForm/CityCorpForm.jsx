import "./citycorp.scss";
import BackBtn from "../../../components/BackBtn";
import arrow from "../HoaForm/arrow-right.png";
import FormFields from "../../../components/FormFields";
import Button from "../../../components/Button";
import { useNavigate } from "react-router-dom";

const CityCorpForm = () => {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/home");
  };

  return (
    <>
      <div className="formContainer">
        <div className="formHeaderC">
          <BackBtn link="/home" />
          <div className="formTitle">
            <h1>City Corporation Information</h1>
          </div>
        </div>
        <form
          className="forms"
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <FormFields
            label="City Corporation Name"
            required="required"
            type="text"
          />
          <FormFields label="Division" required="required" type="text" />
          <FormFields label="Mayor" required="required" type="text" />
          <FormFields label="Office Address" required="required" type="text" />
          <FormFields label="Website" required="required" type="text" />
          <FormFields label="Email" required="required" type="email" />
          <FormFields label="Contact Number" required="required" type="text" />
          <div className="formButtonC">
            <Button
              title="Submit"
              iconColor="#fff"
              icon={arrow}
              color="#aa0000"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default CityCorpForm;
