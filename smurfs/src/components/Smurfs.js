import React from "react";

const Smurfs = props => {
  return (
    <li>
      <h1>{props.smurf.name}</h1>
      <p>{props.smurf.age}</p>
      <p>{props.smurf.height}</p>
    </li>
  );
};

export default Smurfs;
