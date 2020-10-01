import axios from "axios";

export const LOGIN_URL = "http://192.168.1.1/auth/v1";

export function login(email, password) {
  return axios.post(LOGIN_URL, { email, password }, {
    headers: {
      'Content-Type' : 'application/json',
      'Accept' : 'application/json'
    }
  });
}
