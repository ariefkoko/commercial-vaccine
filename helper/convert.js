function convertEfficacy(value) {
    return value + ' %';
}

function convertPrice(value) {
    return `IDR ${value.toLocaleString('id')}`
}

module.exports = { 
    convertEfficacy,
    convertPrice
};