// take the array of data passed as a prop and map over it returning a card component for each entry
import React from 'react';
import Card from '../Card/Card.js';
import "./table.css";
import Arrow from './myArrow.png'
function Table(props) {
    return (
        <table>
            <tbody className ='table'>
                <tr>
                    <th>Mugshot</th>
                    <th>Name<img className="sortMeh" data-value='name' onClick={props.handleButtonClick} src={Arrow} alt='sort meh'></img></th>
                    <th>Phone<img className="sortMeh" data-value='phone' onClick={props.handleButtonClick} src={Arrow} alt='sort meh'></img></th>
                    <th>Email<img className="sortMeh" data-value='email' onClick={props.handleButtonClick} src={Arrow} alt='sort meh'></img></th>
                    <th>DOB<img className="sortMeh" data-value='dob' onClick={props.handleButtonClick} src={Arrow} alt='sort meh'></img></th>
                </tr>
                <Card data = {props.data}/>
            </tbody>
        </table>
    )
}

export default Table;