import React from "react";

const Button = (props) => {
  const { style, event, children } = props;
  return (
    <button className={style} onClick={event}>
      {children}
    </button>
  );
};

export default Button;
