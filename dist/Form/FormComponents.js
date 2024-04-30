"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextInput = exports.SelectInput = exports.RadioButton = exports.Checkbox = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const TextInput = _ref => {
  let {
    label,
    id,
    name,
    value,
    onChange
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "mb-4"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: id,
    className: "block text-gray-700 font-bold mb-2"
  }, label), /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    id: id,
    name: name,
    value: value,
    onChange: onChange,
    className: "border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-500 w-96"
  }));
};
exports.TextInput = TextInput;
const SelectInput = _ref2 => {
  let {
    label,
    id,
    name,
    value,
    onChange,
    options
  } = _ref2;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "mb-4"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: id,
    className: "block text-gray-700 font-bold mb-2"
  }, label), /*#__PURE__*/_react.default.createElement("select", {
    id: id,
    name: name,
    value: value,
    onChange: onChange,
    className: "block w-96 px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-500"
  }, options.map(option => /*#__PURE__*/_react.default.createElement("option", {
    key: option.value,
    value: option.value
  }, option.label))));
};
exports.SelectInput = SelectInput;
const Checkbox = _ref3 => {
  let {
    label,
    name,
    checked,
    onChange
  } = _ref3;
  return /*#__PURE__*/_react.default.createElement("label", {
    className: "inline-flex items-center"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "checkbox",
    name: name,
    checked: checked,
    onChange: onChange,
    className: "form-checkbox text-blue-500 h-5 w-5"
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: "ml-2"
  }, label));
};
exports.Checkbox = Checkbox;
const RadioButton = _ref4 => {
  let {
    label,
    name,
    value,
    checked,
    onChange
  } = _ref4;
  return /*#__PURE__*/_react.default.createElement("label", {
    className: "inline-flex items-center ml-6"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    onChange: onChange,
    className: "form-radio text-blue-500 h-4 w-4"
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: "ml-2"
  }, label));
};
exports.RadioButton = RadioButton;