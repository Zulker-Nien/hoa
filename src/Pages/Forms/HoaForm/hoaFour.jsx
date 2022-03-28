import React from "react";
import FormFields from "../../../components/FormFields";
import Button from "../../../components/Button";
import "./hoaform.scss";
import AmenityBtn from "./amenityBtn";
const hoaFour = (props) => {
  const { progress, back, arrowR, arrowL } = props;
  return (
    <>
      <div className="amenityContainer">
         <h3>Available Amenities</h3> 
        <AmenityBtn/>
      </div>
      <FormFields label="Amenity Street Address" />
      <FormFields label="Procedure available to access amenities" />
      <FormFields label="Rules and regulations for usage of amenities" />
      <FormFields label="Additional fees to access amenities" />
      <div className="formButton">
        <div onClick={back}>
          <Button link="" title="Prev" iconColor="#fff" icon={arrowL} />
        </div>
        <div onClick={progress}>
          <Button
            link="/home"
            title="Submit"
            iconColor="#fff"
            icon={arrowR}
            color="#aa0000"
          />
        </div>
      </div>
    </>
  );
};

export default hoaFour;
