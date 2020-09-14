import React from "react";

const Table = (props) => {
  const { children, styles } = props;
  return <table className={styles}>{children}</table>;
};

export default Table;
