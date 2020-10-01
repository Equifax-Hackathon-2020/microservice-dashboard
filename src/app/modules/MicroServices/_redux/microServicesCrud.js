import axios from "axios";

export const CATALOGUE = "http://192.168.1.1/catalogue/v1";

export function catalogues() {
  return axios.get(CATALOGUE, {
    headers: {
      'Content-Type' : 'application/json',
      'Accept' : 'application/json'
    }
  });
}

export function catalogue(docId) {
  return axios.get(`${CATALOGUE}/${docId}`, {
    headers: {
      'Content-Type' : 'application/json',
      'Accept' : 'application/json'
    }
  });
}
