import React from "react";
import { Badge } from "../Badge/Badge";
import './Card.css'

export const Card = ({heading, textData, impressions, color, label}) => {
    return (<div class="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-72">
    <div class="p-6 ">
      <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 ">
        {heading}
        <hr style={{marginBottom:"1em", width:"50%"}}/>
      </h5>
      <p class="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
        {textData}
      </p>
      <div className="flex gap-5 badge-impression">
      <p className="text-2xl font-bold	 ">{impressions}</p> 
      <Badge className={'metric-badge'} color = {color} label ={label}/>
      </div>
    </div>
  </div>)
}