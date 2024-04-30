"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Notification = void 0;
var _react = _interopRequireWildcard(require("react"));
require("./Notification.css");
require("../index.css");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const TrashIcon = () => {
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    className: "w-5 h-5"
  }, /*#__PURE__*/_react.default.createElement("path", {
    fillRule: "evenodd",
    d: "M8.75 1A2.75 2.75 0 0 0 6 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 1 0 .23 1.482l.149-.022.841 10.518A2.75 2.75 0 0 0 7.596 19h4.807a2.75 2.75 0 0 0 2.742-2.53l.841-10.52.149.023a.75.75 0 0 0 .23-1.482A41.03 41.03 0 0 0 14 4.193V3.75A2.75 2.75 0 0 0 11.25 1h-2.5ZM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4ZM8.58 7.72a.75.75 0 0 0-1.5.06l.3 7.5a.75.75 0 1 0 1.5-.06l-.3-7.5Zm4.34.06a.75.75 0 1 0-1.5-.06l-.3 7.5a.75.75 0 1 0 1.5.06l.3-7.5Z",
    clipRule: "evenodd"
  }));
};
const Notification = _ref => {
  let {
    id,
    type,
    message,
    onClose
  } = _ref;
  const [isVisible, setIsVisible] = (0, _react.useState)(true);
  (0, _react.useEffect)(() => {
    if (!isVisible) {
      const timer = setTimeout(() => {
        //   onClose(id);
      }, 1000); // Delay before removing the notification (1 second)

      return () => clearTimeout(timer);
    }
  }, [isVisible, id, onClose]);
  let bgColorClass = "";
  let textColorClass = "";
  switch (type) {
    case "success":
      bgColorClass = "bg-green-500";
      textColorClass = "text-white";
      break;
    case "error":
      bgColorClass = "bg-red-500";
      textColorClass = "text-white";
      break;
    case "warning":
      bgColorClass = "bg-yellow-500";
      textColorClass = "text-black";
      break;
    default:
      bgColorClass = "bg-blue-500";
      textColorClass = "text-white";
  }
  const handleClose = () => {
    setIsVisible(false);
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, isVisible && /*#__PURE__*/_react.default.createElement("div", {
    className: "notification-badge w-56 gap-4  flex  m-2 p-2 ".concat(bgColorClass, " ").concat(textColorClass, " rounded shadow-md"),
    style: {
      transition: "transform 0.5s ease-out, opacity 0.5s ease-out",
      transform: "translateX(0)",
      opacity: "1"
    }
  }, /*#__PURE__*/_react.default.createElement("div", null, message), /*#__PURE__*/_react.default.createElement("button", {
    onClick: handleClose
  }, /*#__PURE__*/_react.default.createElement(TrashIcon, null))), !isVisible && /*#__PURE__*/_react.default.createElement("div", {
    className: "notification-badge w-56 gap4  flex  m-2 p-2 ".concat(bgColorClass, " ").concat(textColorClass, " rounded shadow-md"),
    style: {
      transition: "transform 0.5s ease-out, opacity 0.5s ease-out",
      transform: "translateX(100%)",
      opacity: "0"
    }
  }, /*#__PURE__*/_react.default.createElement("div", null, message), /*#__PURE__*/_react.default.createElement("button", {
    onClick: handleClose
  }, /*#__PURE__*/_react.default.createElement(TrashIcon, null))));
};
exports.Notification = Notification;