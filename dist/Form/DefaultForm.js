"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeafaultForm = void 0;
var _react = _interopRequireWildcard(require("react"));
var _FormComponents = require("./FormComponents");
var _CTAButton = require("../CTAButton/CTAButton");
require("../index.css");
require("./Form.css");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const DeafaultForm = () => {
  const [formData, setFormData] = (0, _react.useState)({
    name: "",
    email: "",
    gender: "male",
    newsletter: {
      clientStories: false,
      businessInsights: false
    },
    language: "english"
  });
  const handleChange = e => {
    const {
      name,
      value,
      type,
      checked
    } = e.target;
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
  const handleSubmit = e => {
    e.preventDefault();
    console.log(formData);
    //  form submission logic .....
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "max-w-md mx-auto"
  }, /*#__PURE__*/_react.default.createElement("form", {
    className: "main-form",
    onSubmit: handleSubmit
  }, /*#__PURE__*/_react.default.createElement(_FormComponents.TextInput, {
    label: "Name",
    id: "name",
    name: "name",
    value: formData.name,
    onChange: handleChange
  }), /*#__PURE__*/_react.default.createElement(_FormComponents.TextInput, {
    label: "Email",
    id: "email",
    name: "email",
    value: formData.email,
    onChange: handleChange
  }), /*#__PURE__*/_react.default.createElement(_FormComponents.SelectInput, {
    label: "Gender",
    id: "gender",
    name: "gender",
    value: formData.gender,
    onChange: handleChange,
    options: [{
      label: "Male",
      value: "male"
    }, {
      label: "Female",
      value: "female"
    }, {
      label: "Other",
      value: "other"
    }]
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "mb-4"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "block text-gray-700 font-bold mb-2"
  }, "Opt for Newsletter?"), /*#__PURE__*/_react.default.createElement("div", {
    className: "flex gap-5 "
  }, /*#__PURE__*/_react.default.createElement(_FormComponents.Checkbox, {
    label: "Client Stories",
    name: "clientStories",
    checked: formData.newsletter.clientStories,
    onChange: handleChange
  }), /*#__PURE__*/_react.default.createElement(_FormComponents.Checkbox, {
    label: "Business Insights",
    name: "businessInsights",
    checked: formData.newsletter.businessInsights,
    onChange: handleChange
  }))), /*#__PURE__*/_react.default.createElement(_CTAButton.CTAButton, {
    primary: false,
    demo: false,
    label: "Sign up for free",
    type: "submit"
  })));
};
exports.DeafaultForm = DeafaultForm;