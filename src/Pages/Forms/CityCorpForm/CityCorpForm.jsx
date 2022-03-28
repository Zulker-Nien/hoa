import "./citycorp.scss";
import BackBtn from "../../../components/BackBtn";
import arrow from "../HoaForm/arrow-right.png";
import FormFields from "../../../components/FormFields";
import Button from "../../../components/Button";
const CityCorpForm = () => {
  return (
    <>
      <div className="formContainer">
        <div className="formHeader">
          <BackBtn link="/home" />
          <div className="formTitle">
            <h1>City Corporation Information</h1>
          </div>
        </div>
        <form className="forms">
          <FormFields label="City Corporation Name" />
          <FormFields label="Division" />
          <FormFields label="Mayor" />
          <FormFields label="Office Address" />
          <FormFields label="Website" />
          <FormFields label="Email" />
          <FormFields label="Contact Number" />
          <div className="formButton">
            <Button
              link="/home"
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
