//take a single object from API returned array and render as HTML
import React from "react";

function Card(props) {
  
    return (
      props.data.map(element =>{
        return (
        <tr key={element.login.uuid}>
          <td><img src={element.picture.thumbnail} alt="Mug Shots"></img></td>
          <td>{element.name.first} {element.name.last}</td>
          <td>{element.phone}</td>
          <td>{element.email}</td>
          <td>{element.dob.date.split('T')[0]}</td>
        </tr>
      )
      }
    ))
    }

export default Card;