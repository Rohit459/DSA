const eg1 = "[()]{}"
function balancedParanthesis(parenthesis) {
    const openList = ["{", "(", "["];
    const closedList = ["}", ")", "]"];
    let stack = [];
    for(let bracket of parenthesis) {
        if(openList.includes(bracket)) {
            stack.push(bracket)
        } else {
            const openBracket = stack.pop();
            if(openList.indexOf(openBracket) != closedList.indexOf(bracket)) return false
        }
    }
    if(stack.length) return false
    return true
}