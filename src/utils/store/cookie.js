import { trim, isType } from "../../utils/index";

const doc = window.document;

function get(key) {
  if (!key || !_has(key)) {
    return null;
  }
  let regexpStr =
    "(?:^|.*;\\s*)" +
    escape(key).replace(/[-.+*]/g, "\\$&") +
    "\\s*\\=\\s*((?:[^;](?!;))*[^;]?).*";
    let parse_str=unescape(doc.cookie.replace(new RegExp(regexpStr), "$1"));
   // console.log(parse_str=="undefined")
    if ( parse_str=="undefined")
      parse_str=null;
  return JSON.parse(parse_str);
}

function all() {
  let cookies = doc.cookie.split(/; ?/g),
    data = {};
  for (let i = cookies.length - 1; i >= 0; i--) {
    if (!trim(cookies[i])) {
      continue;
    }
    let kvp = cookies[i].split("=");
    let key = unescape(kvp[0]);
    data[key] = unescape(kvp[1]);
  }
  return data;
}

function set(key, data, time) {
  if (!key) {
    return;
  }
  let expires = "Tue, 19 Jan 2038 03:14:07 GMT";
  if (time) {
    let date;
    if (isType(time, "Date")) {
      date = time;
    } else {
      date = new Date();
      date.setTime(date.getTime() + time * 60000);
    }
   // console.log(new Date().getTime())
    //console.log(new Date().getTime().setTime(date.getTime() +  60000))
    //console.log(date.getTime() + time * 60000)
    expires = date.toGMTString();
  }
  //console.log(expires)
  data = JSON.stringify(data);
  doc.cookie =
    escape(key) + "=" + escape(data) + "; expires=" + expires + "; path=/";
}

function remove(key) {
  if (!key || !_has(key)) {
    return;
  }
  doc.cookie = escape(key) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
}

function clearAll() {
  Object.keys(all()).forEach(function(key) {
    remove(key);
  });
}

function _has(key) {
  return new RegExp(
    "(?:^|;\\s*)" + escape(key).replace(/[-.+*]/g, "\\$&") + "\\s*\\="
  ).test(doc.cookie);
}

export default {
  get,
  all,
  set,
  remove,
  clearAll,
  has: _has
};
