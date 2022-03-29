import FormFields from "../../../components/FormFields";
import Button from "../../../components/Button";
import "./hoaform.scss";
const hoaOne = (props) => {
  const { progress, arrowR } = props;
  
  return (
    <>
      <form onSubmit={progress}>
        <FormFields label="HOA Name" required="required" type="text" />
        <FormFields
          label="HOA Street Address"
          required="required"
          type="text"
        />
        <FormFields label="Coordinates" required="required" type="text" />
        <FormFields label="HOA Portal" required="required" type="text" />
        <FormFields label="HOA Fees" required="required" type="number" />
        <FormFields label="Payment Frequency" required="required" type="text" />
        <FormFields label="HOA Email" required="required" type="email" />
        <FormFields
          label="HOA Contact Number"
          required="required"
          type="text"
        />
        <FormFields label="City Corporation" required="required" type="text" />
        <FormFields label="Property Codes" required="required" type="text" />
        <div className="formButton">
          <Button title="Next" iconColor="#fff" icon={arrowR} />
        </div>
      </form>
    </>
  );
};

export default hoaOne;
