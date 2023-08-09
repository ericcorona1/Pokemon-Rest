import React from "react";

const RandomBtn = ({newRandomId}) => {
  return (
    <div>
      <button onClick={newRandomId}>New Pokemon</button>
    </div>
  );
};

export default RandomBtn;
