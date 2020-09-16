//! export  vs export default 
//!  export 是批量导出，导出多个 
//! export default 是默认导出，导出一个

export const setCookie = function (name, value, days) {
    let d = new Date();
    d.setDate(d.getDate() + days)
    document.cookie = `${name}=${encodeURIComponent(value)};expires=${d};path=/`;
  }
  
  
  export const getCookie = function (name) {
    let arr = decodeURIComponent(document.cookie).split('; ');
    for (let i = 0; i < arr.length; i++) {
        let newarr = arr[i].split('=');
        if (name === newarr[0]) {
            return newarr[1];
        }
    }
  }