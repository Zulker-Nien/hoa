import "./propertyform.scss";
import BackBtn from "../../../components/BackBtn";
import arrow from "../HoaForm/arrow-right.png";
import FormFields from "../../../components/FormFields";
import Button from "../../../components/Button";
const PropertyForm = () => {
  return (
    <>
      <div className="formContainer">
        <div className="formHeader">
          <BackBtn link="/home" />
          <div className="formTitle">
            <h1>Edit Property Information</h1>
          </div>
        </div>
        <form className="forms">
          <div className="defaultCred">
          <h3>Property Id: Property201</h3>
          <h3>HOA Name: Niribili Housing</h3></div>
          <FormFields label="Property Name" />
          <FormFields label="Property Address" />
          <FormFields label="Property Image" />
          <FormFields label="Residents Name" />
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

export default PropertyForm;
