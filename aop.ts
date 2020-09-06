/**
 * Aspect Oriented Programming 面向切面编程
 */
Function.prototype.before = function (cb: Function) {
    let self = this
    return function() {
        cb.apply(this, arguments)
        return self.apply(this, arguments)
    }
}

Function.prototype.after = function (cb: Function) {
    let self = this
    return function() {
        let ret = self.apply(this, arguments)
        cb.apply(this, arguments)
        return ret
    } 
}

let fn = function() {
    console.log(2)
}

fn = fn.before(() => {console.log(1)}).after(() => {console.log(3)})
fn()