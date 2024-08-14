const closedSymbol = [')', ']', '}', '|', '2', '4', '6', '7', '8']
const symbols = {
    ')': '(',
    ']': '[',
    '}': '{',
    '|': '|',
    '2': '1',
    '4': '3',
    '6': '5',
    '7': '7',
    '8': '8'
}

module.exports = function check(str, bracketsConfig) {
    const listConfig = bracketsConfig.reduce((acc, cur) => acc.concat(cur) , [])

    const result = [];

    for(let i of str) {
        if (!listConfig.includes(i)) return `в listConfig нет текущего символа ${false}`
        if (closedSymbol.includes(i)) {
            if ((i === '|' && result[result.length - 1] != '|') || (i === '7' && result[result.length - 1] != '7') || (i === '8' && result[result.length - 1] != '8')) {
                result.push(i);
                continue
            }
            if (result.length === 0) {
                return false
            }
            if (result[result.length - 1] === symbols[i]) {
                result.pop()
            } else return false
            continue
        }
        result.push(i)
    }
    return result.length === 0 ? true : false
}
