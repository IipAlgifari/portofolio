import React from "react";
import Button from "../Button";

const BurgerMenu = () => {
  const bars = Array.from({ length: 3 }, (_, index) => <span key={index} className="burger-menu__baer"></span>);

  return (
    <div className="burger-menu">
      <Button variant="burger-menu" type="button">
        {bars}
      </Button>
    </div>
  );
};

export default BurgerMenu;
