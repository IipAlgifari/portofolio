import { Link } from "react-router-dom";
import "./style.scss";

const Button = (props) => {
  const { variant, link, children } = props;

  const classNames = variant !== undefined ? `btn btn--${variant}` : "btn btn--primary";

  if (link) {
    return (
      <Link {...props} className={classNames}>
        {children}
      </Link>
    );
  }

  return (
    <button {...props} className={classNames}>
      {children}
    </button>
  );
};

export default Button;
