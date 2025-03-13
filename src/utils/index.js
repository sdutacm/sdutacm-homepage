/**
 * 防抖函数：在一定时间内多次触发同一事件，只执行最后一次
 * @param {Function} func - 需要防抖的函数
 * @param {number} delay - 延迟执行的时间(ms)
 * @returns {Function} - 返回防抖处理后的函数
 */
export const debounce = (func, delay) => {
  let timeout
  return () => {
    // 如果定时器存在则清除,重新开始计时
    if(timeout) clearTimeout(timeout)
    // 设置新的定时器
    timeout = setTimeout(() => {
      func.apply(this)
    }, delay)
  }
}

/**
 * 节流函数：在一定时间内只执行一次函数
 * @param {Function} func - 需要节流的函数
 * @param {number} delay - 执行间隔时间(ms)
 * @returns {Function} - 返回节流处理后的函数
 */
export const throttle = (func, delay) => {
  let timeout
  return () => {
    // 如果没有定时器才执行
    if (!timeout) {
      timeout = setTimeout(function () {
        func.apply(this)
        // 执行完毕后清空定时器
        timeout = null
      }, delay)
    }
  }
}
