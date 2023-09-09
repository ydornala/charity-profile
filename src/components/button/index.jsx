import React from "react";

import "./styles.css";

const Button = (props) => {
  const { children } = props;
  return <button>{children}</button>;
};

export default Button;
