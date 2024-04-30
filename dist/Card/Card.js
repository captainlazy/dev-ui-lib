"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Card = void 0;
var _react = _interopRequireDefault(require("react"));
var _Badge = require("../Badge/Badge");
require("./Card.css");
require("../index.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Card = _ref => {
  let {
    heading,
    textData,
    impressions,
    color,
    label
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    class: "relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-72"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "p-6 "
  }, /*#__PURE__*/_react.default.createElement("h5", {
    class: "block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 "
  }, heading, /*#__PURE__*/_react.default.createElement("hr", {
    style: {
      marginBottom: "1em",
      width: "50%"
    }
  })), /*#__PURE__*/_react.default.createElement("p", {
    class: "block font-sans text-base antialiased font-light leading-relaxed text-inherit"
  }, textData), /*#__PURE__*/_react.default.createElement("div", {
    className: "flex gap-5 badge-impression"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "text-2xl font-bold\t "
  }, impressions), /*#__PURE__*/_react.default.createElement(_Badge.Badge, {
    className: 'metric-badge',
    color: color,
    label: label
  }))));
};
exports.Card = Card;