import React from "react";

const Table = (props) => {
  const { children } = props;
  return <table className="characters-table">{props.children}</table>;
};

export default Table;
