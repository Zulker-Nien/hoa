import React from "react";
import FormFields from "../../../components/FormFields";
import Button from "../../../components/Button";
import "./hoaform.scss";

const hoaOne = (props) => {
  const { progress, arrowR } = props;
  return (
    <>
      <FormFields label="HOA Name" />
      <FormFields label="HOA Street Address" />
      <FormFields label="Coordinates" />
      <FormFields label="HOA Portal" />
      <FormFields label="HOA Fees" />
      <FormFields label="Payment Frequency" />
      <FormFields label="HOA Email" />
      <FormFields label="HOA Contact Number" />
      <FormFields label="City Corporation" />
      <FormFields label="Property Codes" />
      <div className="formButton" onClick={progress}>
        <Button link="/hoaform" title="Next" iconColor="#fff" icon={arrowR} />
      </div>
    </>
  );
};

export default hoaOne;
