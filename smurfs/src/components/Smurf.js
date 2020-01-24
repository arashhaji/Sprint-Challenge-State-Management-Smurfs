import React from 'react';



function Smurf(props) {
    return (
        <div className="smurf-item">
      <h3>Name: {props.each.name}</h3>
      <p>Age: {props.each.age}</p>
      <p>Height: {props.each.height}</p>
    </div>
    )
}

export default Smurf;
