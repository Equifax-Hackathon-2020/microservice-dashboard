import axios from "axios";

export const LOGIN_URL = "http://microservices-catalog.thecrazyplanet.com/auth/login";

export function login(email, password) {
  return axios.post(LOGIN_URL, { email, password }, {
    headers: {
      'Content-Type' : 'application/json',
      'Accept' : 'application/json'
    }
  });
}
