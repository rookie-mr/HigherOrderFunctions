/**
 * 反柯里化（提取 泛化this的过程）
 */
Function.prototype.uncurring = function () {
    let self = this
    return function () {
        // 遵循call、apply、bind设计规则，取出第一个参数作为当前的执行环境（this）
        // 取出参数中的第一个参数，其余参数遵循被反柯里化方法的原始入参规则
        const o = Array.prototype.shift.call(arguments)
        return self.apply(o, arguments)
        // 另一种实现方式
        // return Function.prototype.call.apply(self, arguments)
    }
}

let push = Array.prototype.push.uncurring();

(function () {
    push(arguments, 4)
})(1, 2, 3)