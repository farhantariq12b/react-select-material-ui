"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var FormControl_1 = require("@material-ui/core/FormControl/FormControl");
var SelectDropdown_1 = require("./SelectDropdown");
var SelectHelperText_1 = require("./SelectHelperText");
var SelectLabel_1 = require("./SelectLabel");
var lodash_1 = require("lodash");
var ReactSelectMaterialUi = (function (_super) {
    __extends(ReactSelectMaterialUi, _super);
    function ReactSelectMaterialUi(props) {
        var _this = _super.call(this, props) || this;
        _this.getFinalValue = function (isMulti, value, values, defaultValue, defaultValues) {
            return isMulti
                ? _this.getFirstNonUndefined(values, defaultValues)
                : _this.getFirstNonUndefined(value, defaultValue);
        };
        _this.getFirstNonUndefined = function (a, b) {
            return lodash_1.isNil(a) === false
                ? a
                : lodash_1.isNil(b) === false
                    ? b
                    : undefined;
        };
        _this.getSelectedOption = function (options, value) {
            return lodash_1.isNil(value)
                ? undefined
                : _this.getOneOrMoreSelectOptions(options, value);
        };
        _this.getOptionForValue = function (options) { return function (value) {
            var option = lodash_1.find(options, _this.matchOptionValue(value));
            if (lodash_1.isNil(option) === false) {
                return _this.getSelectOption(option);
            }
            var subOptions = lodash_1.filter(options, _this.hasSubOptions);
            if (lodash_1.isEmpty(subOptions)) {
                return;
            }
            return _this.getOptionForValue(lodash_1.flatMap(subOptions, _this.getSubOption))(value);
        }; };
        _this.matchOptionValue = function (value) { return function (option) {
            if (lodash_1.isString(option)) {
                return value === option;
            }
            return lodash_1.isEqual(value, option.value);
        }; };
        _this.hasSubOptions = function (option) {
            return (lodash_1.isString(option) === false && lodash_1.isArray(option.options));
        };
        _this.getSubOption = function (option) {
            return option.options;
        };
        _this.handleChangeSelect = function (newValue) {
            var _a = _this.props, onChange = _a.onChange, value = _a.value, values = _a.values;
            _this.setState({
                filter: "",
                selectedOption: newValue,
            });
            if (lodash_1.isFunction(onChange)) {
                onChange(_this.getValues(newValue), newValue === null ? undefined : newValue);
            }
        };
        _this.handleGotFocus = function (event) {
            _this.setState({
                hasInputFocus: true,
            });
            var onFocus = _this.props.onFocus;
            if (lodash_1.isFunction(onFocus)) {
                onFocus(event);
            }
        };
        _this.handleLostFocus = function (event) {
            _this.setState({
                hasInputFocus: false,
            });
            var onBlur = _this.props.onBlur;
            if (lodash_1.isFunction(onBlur)) {
                onBlur(event);
            }
        };
        var defaultValue = props.defaultValue, defaultValues = props.defaultValues, SelectProps = props.SelectProps, value = props.value, values = props.values;
        var finalValue = _this.getFinalValue(SelectProps === null || SelectProps === void 0 ? void 0 : SelectProps.isMulti, value, values, defaultValue, defaultValues);
        _this.state = {
            filter: "",
            hasInputFocus: false,
            selectedOption: _this.getSelectedOption(props.options, finalValue),
        };
        return _this;
    }
    ReactSelectMaterialUi.prototype.getOneOrMoreSelectOptions = function (options, value) {
        if (lodash_1.isArray(value)) {
            var foundOptions = lodash_1.reject(lodash_1.map(value, this.getOptionForValue(options)), lodash_1.isNil);
            return foundOptions.length === 0 ? undefined : foundOptions;
        }
        return this.getOptionForValue(options)(value);
    };
    ReactSelectMaterialUi.prototype.getOptions = function (options) {
        return lodash_1.map(options, this.getSelectOption);
    };
    ReactSelectMaterialUi.prototype.getSelectOption = function (option) {
        if (lodash_1.isString(option)) {
            return {
                label: option,
                value: option,
            };
        }
        return option;
    };
    ReactSelectMaterialUi.prototype.render = function () {
        var _a = this.props, autoComplete = _a.autoComplete, autoFocus = _a.autoFocus, children = _a.children, className = _a.className, defaultValue = _a.defaultValue, defaultValues = _a.defaultValues, disabled = _a.disabled, error = _a.error, FormHelperTextProps = _a.FormHelperTextProps, fullWidth = _a.fullWidth, helperText = _a.helperText, id = _a.id, InputLabelProps = _a.InputLabelProps, inputRef = _a.inputRef, label = _a.label, multiline = _a.multiline, name = _a.name, onBlur = _a.onBlur, onChange = _a.onChange, onFocus = _a.onFocus, placeholder = _a.placeholder, required = _a.required, rows = _a.rows, rowsMax = _a.rowsMax, select = _a.select, SelectProps = _a.SelectProps, type = _a.type, value = _a.value, values = _a.values, options = _a.options, variant = _a.variant, other = __rest(_a, ["autoComplete", "autoFocus", "children", "className", "defaultValue", "defaultValues", "disabled", "error", "FormHelperTextProps", "fullWidth", "helperText", "id", "InputLabelProps", "inputRef", "label", "multiline", "name", "onBlur", "onChange", "onFocus", "placeholder", "required", "rows", "rowsMax", "select", "SelectProps", "type", "value", "values", "options", "variant"]);
        var helperTextId = id && helperText ? id + "-helper-text" : undefined;
        var _b = this.state, hasInputFocus = _b.hasInputFocus, selectedOption = _b.selectedOption;
        var propIsMulti = (SelectProps === null || SelectProps === void 0 ? void 0 : SelectProps.isMulti) === true;
        var onlyValue = propIsMulti ? values : value;
        var finalValue = this.getFinalValue(propIsMulti, value, values);
        var dropdownOption = selectedOption;
        if (onlyValue === null) {
            dropdownOption = null;
        }
        else if (lodash_1.isArray(onlyValue) && lodash_1.isEmpty(onlyValue)) {
            dropdownOption = null;
        }
        else if (finalValue !== undefined) {
            var foundOptions = this.getSelectedOption(options, finalValue);
            if (foundOptions) {
                dropdownOption = foundOptions;
            }
        }
        var propIsClearable = SelectProps === null || SelectProps === void 0 ? void 0 : SelectProps.isClearable;
        var isClearable = propIsClearable === true && this.isClearable(dropdownOption);
        var isDisabled = disabled || (!!SelectProps && SelectProps.isDisabled);
        var selectPlaceholder = label ? "" : placeholder;
        var shrink = this.isShrinked(dropdownOption);
        return (React.createElement(FormControl_1.default, __assign({ "aria-describedby": helperTextId, className: className, error: error, fullWidth: fullWidth, required: required }, other),
            React.createElement(SelectLabel_1.default, { inputId: id, label: label, shrink: shrink, hasInputFocus: hasInputFocus, inputLabelProps: InputLabelProps }),
            React.createElement(SelectDropdown_1.default, { inputId: id, value: dropdownOption, placeholder: selectPlaceholder, options: this.getOptions(options), selectProps: __assign(__assign({}, SelectProps), { isClearable: isClearable,
                    isDisabled: isDisabled }), hasInputFocus: hasInputFocus, onChange: this.handleChangeSelect, onFocus: this.handleGotFocus, onBlur: this.handleLostFocus }),
            React.createElement(SelectHelperText_1.default, { id: helperTextId, helperText: helperText, formHelperTextProps: FormHelperTextProps })));
    };
    ReactSelectMaterialUi.prototype.isShrinked = function (option) {
        if (this.isShrinkable()) {
            return true;
        }
        if (lodash_1.isArray(option)) {
            return lodash_1.isEmpty(option) === false;
        }
        return lodash_1.isEmpty(option) === false;
    };
    ReactSelectMaterialUi.prototype.isShrinkable = function () {
        return this.hasInputFocus() || this.hasFilter();
    };
    ReactSelectMaterialUi.prototype.isClearable = function (option) {
        var disabled = this.props.disabled;
        if (disabled) {
            return false;
        }
        if (lodash_1.isArray(option)) {
            return lodash_1.size(option) >= 2;
        }
        return lodash_1.isEmpty(option) === false;
    };
    ReactSelectMaterialUi.prototype.hasInputFocus = function () {
        return this.state.hasInputFocus === true;
    };
    ReactSelectMaterialUi.prototype.hasFilter = function () {
        return lodash_1.isEmpty(this.state.filter) === false;
    };
    ReactSelectMaterialUi.prototype.getValues = function (value) {
        if (lodash_1.isNil(value)) {
            return null;
        }
        if (lodash_1.isArray(value)) {
            return lodash_1.map(value, this.getValue);
        }
        return this.getValue(value);
    };
    ReactSelectMaterialUi.prototype.getValue = function (option) {
        return option.value;
    };
    return ReactSelectMaterialUi;
}(React.PureComponent));
exports.default = ReactSelectMaterialUi;
