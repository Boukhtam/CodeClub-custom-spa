const formToJson = elements => {
    const reducerInitialValue = {};
    const formData = [].reduce.call(elements, reducer, reducerInitialValue);
    return formData
}

const reducer = (data, element) => {
    // Make sure the element has the required properties and should be added.
    if (isValidElement(element) && isValidValue(element)) {
        /*
        * Some fields allow for more than one value, so we need to check if this
        * is one of those fields and, if so, store the values as an array.
        */
        if (isCheckbox(element)) {
            data[element.name] = (data[element.name] || []).concat(element.value);
        } else if (isMultiSelect(element)) {
            data[element.name] = getSelectValues(element);
        } else {
            data[element.name] = element.value;
        }
    }
    return data
}

const isValidElement = element => {
    return element.name && element.value;
}

const isValidValue = element => {
    return (!['checkbox', 'radio'].includes(element.type) || element.checked);
};

/**
 * Checks if an input is a checkbox, because checkboxes allow multiple values.
 * @param  {Element} element  the element to check
 * @return {Boolean}          true if the element is a checkbox, false if not
 */
const isCheckbox = element => element.type === 'checkbox';

/**
 * Checks if an input is a `select` with the `multiple` attribute.
 * @param  {Element} element  the element to check
 * @return {Boolean}          true if the element is a multiselect, false if not
 */
const isMultiSelect = element => element.options && element.multiple;

/**
 * Retrieves the selected options from a multi-select as an array.
 * @param  {HTMLOptionsCollection} options  the options for the select
 * @return {Array}                          an array of selected option values
 */
const getSelectValues = options => [].reduce.call(options, (values, option) => {
    return option.selected ? values.concat(option.value) : values;
}, []);

export {formToJson}