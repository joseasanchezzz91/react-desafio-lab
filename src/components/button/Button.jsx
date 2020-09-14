import React from "react";

const Button = (props) => {
  const { styles, event, children } = props;
  return (
    <button
      className={styles}
      onClick={event}
      disabled={props.disabled ? true : false}
    >
      {children}
    </button>
  );
};

export default Button;
