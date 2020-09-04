/*
 * @Author: yangjie
 * @Date: 2020-09-04 16:27:47
 * @Last Modified by:   yangjie
 * @Last Modified time: 2020-09-04 16:27:47
 * 请求方式配置
 */
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
