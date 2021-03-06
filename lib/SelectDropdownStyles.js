"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStyles = void 0;
var ColorConstants_1 = require("./ColorConstants");
var styleControl = function (hasInputFocus) {
    if (hasInputFocus === void 0) { hasInputFocus = false; }
    return ({
        background: "transparent",
        borderWidth: 0,
        borderBottom: getBorder(hasInputFocus),
        borderRadius: 0,
        boxShadow: "none",
        marginRight: 25,
        "&:hover": {
            boxShadow: "none",
            background: "linear-gradient(to bottom, " + ColorConstants_1.colorHover + " 0%, " + ColorConstants_1.colorHover + " 100%)",
            backgroundPosition: "0 100%",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 1px",
            transition: "background-size .2s"
        }
    });
};
var getBorder = function (hasInputFocus) {
    return hasInputFocus ? "solid 1px " + ColorConstants_1.colorFocus : "solid 1px " + ColorConstants_1.colorNoFocus;
};
var styleIndicatorsContainer = {
    position: "absolute",
    right: 0,
    marginLeft: 8,
    marginRight: -25,
    backgroundColor: "transparent",
    height: "100%"
};
var styleClearIndicator = function (base) { return ({
    color: ColorConstants_1.colorClearNormal,
    margin: "0 4px 0 0",
    padding: 0,
    cursor: "pointer",
    "&:hover": {
        color: ColorConstants_1.colorClearHover
    }
}); };
var styleDropdownIndicator = {
    margin: "0 0 0 4px",
    padding: 0,
    cursor: "pointer"
};
var styleMenuList = {
    padding: 0
};
var styleNoOptionsMessage = {
    textAlign: "left",
    color: "#ff8080"
};
var styleMultiValueRemove = function (isDisabled) {
    if (isDisabled === void 0) { isDisabled = false; }
    return function (base) { return (__assign(__assign({}, base), { display: isDisabled ? "none" : base.display })); };
};
var styleValueContainer = function (isClearable) {
    if (isClearable === void 0) { isClearable = false; }
    return ({
        padding: 0,
        marginRight: isClearable ? 25 : 0,
        overflow: "hidden",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis"
    });
};
exports.getStyles = function (props, hasInputFocus) {
    var customStyles = props && props.styles ? props.styles : {};
    var isDisabled = props && props.isDisabled ? true : false;
    var isClearable = props && props.isClearable ? true : false;
    return __assign(__assign({}, customStyles), { control: mixStyle(styleControl(hasInputFocus), customStyles.control), clearIndicator: mixStyle(styleClearIndicator, customStyles.clearIndicator), dropdownIndicator: mixStyle(styleDropdownIndicator, customStyles.dropdownIndicator), indicatorsContainer: mixStyle(styleIndicatorsContainer, customStyles.indicatorsContainer), menuList: mixStyle(styleMenuList, customStyles.menuList), multiValueRemove: mixStyle(styleMultiValueRemove(isDisabled), customStyles.multiValueRemove), noOptionsMessage: mixStyle(styleNoOptionsMessage, customStyles.noOptionsMessage), valueContainer: mixStyle(styleValueContainer(isClearable), customStyles.valueContainer) });
};
var mixStyle = function (customStyle, styleFn) { return function (base, state) { return (__assign(__assign(__assign({}, base), (typeof customStyle === "function"
    ? customStyle(base, state)
    : customStyle)), (styleFn ? styleFn(base, state) : {}))); }; };
