import React from "react";

const Button = (props) => {
  const { styles, event, children } = props;
  return (
    <button className={styles} onClick={event}>
      {children}
    </button>
  );
};

export default Button;
