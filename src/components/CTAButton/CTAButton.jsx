import React from "react";
import './CTAButton.css'
import {  ArrowRightIcon } from '@heroicons/react/24/solid'

export const CTAButton = (props) => {

    const demoBtn = props.demo;
    const classNameValue = demoBtn ? 'cta-button-default   ' : 'cta-button-outline  items-end'
    const type = props.type;

    return (
        <button type={type} className={`px-5 py-3 rounded flex flex-gap ${classNameValue}` } >
            <strong>{props.label} </strong> 
             <ArrowRightIcon className="size-6"/>     
        </button>
    )
}
