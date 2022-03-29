import React from "react";
import FormFields from "../../../components/FormFields";
import Button from "../../../components/Button";
import "./hoaform.scss";
import AmenityBtn from "./amenityBtn";
const hoaFour = (props) => {
  const { progress, back, arrowR, arrowL } = props;
  return (
    <>
      <form onSubmit={progress}>
        <div className="amenityContainer">
          <h3>Available Amenities</h3>
          <AmenityBtn />
        </div>

        <FormFields label="Amenity Street Address" required="required" />
        <FormFields
          label="Procedure available to access amenities"
          required="required"
        />
        <FormFields
          label="Rules and regulations for usage of amenities"
          required={"required"}
        />
        <FormFields
          label="Additional fees to access amenities"
          required="required"
        />
        <div className="formButton">
          <div onClick={back}>
            <Button link="" title="Prev" iconColor="#fff" icon={arrowL} />
          </div>
          <div onClick={progress}>
            <Button
              title="Submit"
              iconColor="#fff"
              icon={arrowR}
              color="#aa0000"
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default hoaFour;
