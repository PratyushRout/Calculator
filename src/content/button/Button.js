import React from 'react';
import './Button.css';
import { display } from '../constant';

var Button = ({setText,text,value,classname=""}) =>{
    return <button className={"button "+ classname} onClick={()=>setText(text+value)}> {value}</button>
    }
export default Button ;