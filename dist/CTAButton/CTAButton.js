"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CTAButton = void 0;
var _react = _interopRequireDefault(require("react"));
require("./CTAButton.css");
require("../index.css");
var _solid = require("@heroicons/react/24/solid");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const CTAButton = props => {
  const demoBtn = props.demo;
  const classNameValue = demoBtn ? 'cta-button-default   ' : 'cta-button-outline  items-end';
  const type = props.type;
  return /*#__PURE__*/_react.default.createElement("button", {
    type: type,
    className: "px-5 py-3 rounded flex flex-gap ".concat(classNameValue)
  }, /*#__PURE__*/_react.default.createElement("strong", null, props.label, " "), /*#__PURE__*/_react.default.createElement(_solid.ArrowRightIcon, {
    className: "size-6"
  }));
};
exports.CTAButton = CTAButton;