import React from "react";
// import styled from "styled-components"


const Smurfs = props => {
  return (
    <div className='list'>
      <h4>Name: {props.smurf.name}</h4>
      <p>Age: {props.smurf.age}</p>
      <p>Height: {props.smurf.height}</p>
    </div>
  );
};

export default Smurfs;
