import "./citycorp.scss";
import { useContext } from "react";
import { observer } from "mobx-react-lite";
import BackBtn from "../../../components/BackBtn";
import arrow from "../HoaForm/arrow-right.png";
import FormFields from "../../../components/FormFields";
import Button from "../../../components/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Store from "../../../store";

const CityCorpForm = () => {
  const store = useContext(Store);
  const { division, mayor, phonenumber} = store;
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/home");
  };

  const handleCityClick = () => {
    axios
      .post("api/create/city-corporation", {
        division,
        mayor,
        phonenumber,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error.response.data);
      });
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
          <FormFields
            label="Division"
            required="required"
            type="text"
            // value={division}
          />
          <FormFields
            label="Mayor"
            required="required"
            type="text"
            // value={mayor}
          />
          <FormFields label="Office Address" required="required" type="text" />
          <FormFields label="Website" required="required" type="text" />
          <FormFields label="Email" required="required" type="email" />
          <FormFields
            label="Contact Number"
            required="required"
            type="text"
            // value={phonenumber}
          />
          <div className="formButtonC">
            <Button
              clicked={handleCityClick}
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

export default observer(CityCorpForm);
