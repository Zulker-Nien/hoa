import "./component.scss"

const FormFields = (props) => {
    const {label, type} = props
  return (
    <div className="formItemContainer">
        <h3>{label}</h3>
        <input type="text"></input>
    </div>
  )
}

export default FormFields