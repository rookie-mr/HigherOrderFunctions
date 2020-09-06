/**
 * 闭包
 */
function closure() {
    let static = ''
    return function() {
        return static
    }
}