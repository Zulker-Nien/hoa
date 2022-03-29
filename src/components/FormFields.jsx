import "./component.scss";
const FormFields = (props) => {
  const { label, type, required } = props;

  return (
    <div className="formItemContainer">
      <h3>{label}</h3>
      <input type={type} required={required} />
    </div>
  );
};

export default FormFields;
