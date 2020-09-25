/*
 * @Author: yangjie
 * @Date: 2020-09-04 15:19:29
 * @Last Modified by: yangjie
 * @Last Modified time: 2020-09-25 10:48:45
 * 加密方法
 */
import CryptoJS from "crypto-js";

/**
 * aes加密,密钥在.env文件内设置
 * @param {*} word
 */
export const encrypt = word => {
  const key = CryptoJS.enc.Utf8.parse(`${process.env.VUE_APP_CRYPTO_KEY}`);
  const srcs = CryptoJS.enc.Utf8.parse(word);
  const encrypted = CryptoJS.AES.encrypt(srcs, key, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  });
  return encrypted.toString();
};
/**
 * aes解密,密钥在.env文件内设置
 * @param {*} word
 */
export const decrypt = word => {
  const key = CryptoJS.enc.Utf8.parse(`${process.env.VUE_APP_CRYPTO_KEY}`);
  const decrypt = CryptoJS.AES.decrypt(word, key, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  });
  return CryptoJS.enc.Utf8.stringify(decrypt).toString();
};
