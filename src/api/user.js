import request from "../utils/request";

export function get_user_list(data) {
  return request.get("/member/user/", data, { login: false });
}
export function get_user(data) {
  return request.get("/member/user/", data, { login: false });
}
export function post_post(data) {
  return request.post("/member/post/", data, { login: false });
}