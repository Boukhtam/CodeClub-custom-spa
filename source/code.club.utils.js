const formToJson = elements => [].reduce.call(elements, (data, element) => {
    data[element.name] = element.value
    return data
}, {})

export {formToJson}