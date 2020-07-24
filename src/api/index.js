import request from "../plugins/request";

export const post = (url, data = {}) => {
  return request.post(url, { ...data });
};

export const get = (url, data = {}) => {
  return request.get(url, { params: { ...data } });
};

export const all = (promise = []) => {
  return request.all([...promise]);
};
