/**
 * 函数柯里化（部分求值）
 */
const curring = function(fn: Function) {
    let args = []
    return function() {
        if (arguments.length === 0) {
            return fn.apply(this, args)
        } else {
            [].push.apply(args, arguments)
            return arguments.callee
        }
    }
}

let cost = (function() {
    let total = 0
    return function() {
        for(let i = 0, l = arguments.length;i<l;i++) {
            total += arguments[i]
        }
        return total
    }
})()

cost = curring(cost)
cost(100)
cost(200)
cost(300)
console.log(cost())