import React from 'react';

export const Button = (props) => {
    const primaryTrue = props.primary
    const label = props.label
    const buttonClasses = primaryTrue ?  'bg-blue-500 hover:bg-blue-600 text-white' : 'bg-gray-200 hover:bg-gray-300 text-black';
    const type = props.type;
    
    return (<button type={type} className={`px-5 py-3 rounded ${buttonClasses}`} > {label}  </button>)
}