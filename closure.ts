/**
 * 闭包
 * @param option 
 */
function closure() {
    let static = null
    return function() {
        return static
    }
}