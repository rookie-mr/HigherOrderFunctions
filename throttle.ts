/**
 * 节流函数
 * 在限定的时间间隔内又被调用，函数将被返回
 * 场景：鼠标移动、窗口缩放等
 */
let throttle = function (fn: Function, interval: number) {
    let self = fn, timmer, first = true
    // 形成闭包将延迟执行的函数引用（fn）、定时器（timmer）、是否第一次（first）存储起来
    return function () {
        let args = arguments, me = this
        if (first) {
            self.apply(me, args)
            return first = false
        }
        if (timmer) { // 超过限定的时间间隔内被触发将在此被阻止返回
            return false
        }
        timmer = setTimeout(() => {
            clearTimeout(timmer)
            timmer = null
            self.apply(me, args)
        }, interval || 500)
    }
}

window.onmousemove = throttle((e) => {console.log(e)}, 500)