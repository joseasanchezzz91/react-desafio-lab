import React from "react";

const Table = (props) => {
  const { children } = props;
  return <table className="characters-table">{children}</table>;
};s

export default Table;
