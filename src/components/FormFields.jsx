import "./component.scss";
import { observer } from "mobx-react-lite";
import Store from "../store";
import { useContext } from "react";
const FormFields = (props) => {

  const store = useContext(Store);
  const {setValue} = store;
  const { label, type, required } = props;

  return (
    <div className="formItemContainer">
      <h3>{label}</h3>
      <input
        type={type}
        required={required}
        onChange={(e)=>{setValue(e.target.value)}}
       
      />
    </div>
  );
};

export default observer(FormFields);
