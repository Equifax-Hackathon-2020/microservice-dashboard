import axios from "axios";

export const LOGIN_URL = "http://35.184.73.42/auth/login";

export function login(email, password) {
  return axios.post(LOGIN_URL, { email, password }, {
    headers: {
      'Content-Type' : 'application/json',
      'Accept' : 'application/json'
    }
  });
}
