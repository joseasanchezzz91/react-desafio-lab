import React from "react";

const Thead = (props) => {
  const { children, styles } = props;
  return <thead className={styles}>{children}</thead>;
};

export default Thead;
