"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = void 0;
var _react = _interopRequireDefault(require("react"));
require("../index.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Button = props => {
  const primaryTrue = props.primary;
  const label = props.label;
  const buttonClasses = primaryTrue ? 'bg-blue-500 hover:bg-blue-600 text-white' : 'bg-gray-200 hover:bg-gray-300 text-black';
  const type = props.type;
  return /*#__PURE__*/_react.default.createElement("button", {
    type: type,
    className: "px-5 py-3 rounded ".concat(buttonClasses)
  }, " ", label, "  ");
};
exports.Button = Button;