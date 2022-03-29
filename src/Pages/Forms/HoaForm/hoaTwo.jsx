import React from "react";
import FormFields from "../../../components/FormFields";
import Button from "../../../components/Button";
import "./hoaform.scss";

const hoaTwo = (props) => {
    const { progress, back,arrowR ,arrowL } = props;
  return (
    <>
    <form onSubmit={progress} >
      <FormFields label="PROPERTY MANAGEMENT COMPANY/ INDIVIDUAL" required="required" type="text"/>
      <FormFields label="PROPERTY MANAGEMENT COMPANY WEBSITE" />
      <FormFields label="PROPERTY MANAGEMENT COMPANY EMAIL" />
      <FormFields label="PROPERTY MANAGEMENT COMPANY NUMBER" />
      <FormFields label="CC&R" />
      <FormFields label="RULES & REGULATIONS" />
      <FormFields label="OTHER DOCUMENT" />
      <div className="formButton">
        <div onClick={back}>
          <Button title="Prev" iconColor="#fff" icon={arrowL} />
        </div>
        <div>
          <Button title="Next" iconColor="#fff" icon={arrowR} />
        </div>
      </div>
      </form>
    </>
  );
};

export default hoaTwo;
