export const debounce = (func, delay) => {
  let timeout
  return () => {
    if(timeout) clearTimeout(timeout)
    timeout = setTimeout(() => {
      func.apply(this)
    }, delay)
  }
}

export const throttle = (func, delay) => {
  let timeout
  return () => {
    if (!timeout) {
      timeout = setTimeout(function () {
        func.apply(this)
        timeout = null
      }, delay)
    }
  }
}
