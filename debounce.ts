/**
 * 函数防抖
 * 如果限定的时间间隔内一直被触发，将会不停的重新计数，不再进行执行
 * 场景：提交表单用户重复点击、列表加载更多
 */
let debounce = function(fn: Function, interval: number) {
    let self = fn, timmer = null
    return function() {
        let me = this, args = arguments
        if (!timmer) {
            self.apply(me, args)
        }
        timmer && clearTimeout(timmer)
        timmer = setTimeout(() => { // 如果不停的触发，timmer将一直被赋值导致!timmer一直得不到执行
            timmer = null
        }, interval || 500)
    }
}

window.onmousemove = debounce((e) => {console.log(e)}, 500)