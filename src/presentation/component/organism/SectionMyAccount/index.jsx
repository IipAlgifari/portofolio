

//component
import Login from "presentation/component/molecule/Login";
import Register from "presentation/component/molecule/Register";

// style
import "./style.scss";

const SectionMyAccount = () => {
  return (
    <div className="my-account">
      <div className="container">
        <div className="my-account__wrapper">
          <Login/>
          <Register/>
        </div>
      </div>
    </div>
  );
};

export default SectionMyAccount;
