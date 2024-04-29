import React, { useState } from "react";
import { TextInput, SelectInput, Checkbox } from "./FormComponents";
import { CTAButton } from "../CTAButton/CTAButton";
import './Form.css'

export const DeafaultForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "male",
    newsletter: {
      clientStories: false,
      businessInsights: false,
    },
    language: "english"
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData({
        ...formData,
        newsletter: {
          ...formData.newsletter,
          [name]: checked
        }
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    //  form submission logic .....
  };

  return (
    <div className="max-w-md mx-auto">
      <form className="main-form" onSubmit={handleSubmit}>
        <TextInput
          label="Name"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <TextInput
          label="Email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <SelectInput
          label="Gender"
          id="gender"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          options={[
            { label: "Male", value: "male" },
            { label: "Female", value: "female" },
            { label: "Other", value: "other" }
          ]}
        />
        <div className="mb-4">
          <span className="block text-gray-700 font-bold mb-2">Opt for Newsletter?</span>
          <div className="flex gap-5 ">
          <Checkbox
            label="Client Stories"
            name="clientStories"
            checked={formData.newsletter.clientStories}
            onChange={handleChange}
          />
          <Checkbox
            label="Business Insights"
            name="businessInsights"
            checked={formData.newsletter.businessInsights}
            onChange={handleChange}
          />
          </div>
        </div>
        {/* <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button> */}
        < CTAButton primary={false} demo={false} label="Sign up for free" type="submit"/>
      </form>
    </div>
  );
};