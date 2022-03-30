import "./component.scss";

const Button = (props) => {
  const { icon, title, color, iconColor, margin, clicked } = props;

  return (
    <>
      <button
        onClick={clicked}
        type="submit"
        className="mainButton"
        style={{
          backgroundColor: `${color}`,
          color: `${iconColor}`,
          margin: `${margin}`,
        }}
      >
        <p>{title}</p>
        <img alt="" src={icon} />
      </button>
    </>
  );
};

export default Button;
