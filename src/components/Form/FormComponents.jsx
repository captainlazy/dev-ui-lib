import React from "react";

const TextInput = ({ label, id, name, value, onChange }) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-gray-700 font-bold mb-2">{label}</label>
      <input
        type="text"
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-500 w-96"
      />
    </div>
  );
};

const SelectInput = ({ label, id, name, value, onChange, options }) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-gray-700 font-bold mb-2">{label}</label>
      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className="block w-96 px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-500"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  );
};

const Checkbox = ({ label, name, checked, onChange }) => {
  return (
    <label className="inline-flex items-center">
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
        className="form-checkbox text-blue-500 h-5 w-5"
      />
      <span className="ml-2">{label}</span>
    </label>
  );
};

const RadioButton = ({ label, name, value, checked, onChange }) => {
  return (
    <label className="inline-flex items-center ml-6">
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="form-radio text-blue-500 h-4 w-4"
      />
      <span className="ml-2">{label}</span>
    </label>
  );
};

export { TextInput, SelectInput, Checkbox, RadioButton };