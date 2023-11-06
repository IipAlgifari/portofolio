import React from "react";

import Default from "presentation/component/template/Default";

// component
import SectionLogin from "presentation/component/organism/SectionLogin"
import SectionFeature from "presentation/component/organism/SectionFeature";


const Login = () => {
  return (
    <Default>
      <SectionLogin/>
      <SectionFeature/>
    </Default>
  );
};

export default Login;
