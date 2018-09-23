import React from 'react';


const person = (props)=>{
    return (
        <div>
  <p>I´m {props.name} and I am {props.age} person</p>
        <p> {props.children}</p>
    

        </div>
    )  
}

export default person;