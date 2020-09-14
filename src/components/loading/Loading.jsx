import React from "react";
import HashLoader from "react-spinners/HashLoader";

const Loading = (props) => {
  const { loading, color, size } = props;
  return (
    <div className="center">
      <HashLoader size={size} color={color} loading={loading} />
    </div>
  );
};

export default Loading;
