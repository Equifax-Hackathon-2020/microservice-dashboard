import axios from "axios";

export const CATALOGUE = "http://microservices-catalog.thecrazyplanet.com/catalogue";

export function catalogues() {
  return axios.get(CATALOGUE, {
    headers: {
      'Content-Type' : 'application/json',
      'Accept' : 'application/json'
    }
  });
}

export function catalogue(docId) {
  return axios.get(`${CATALOGUE}/document/${docId}`, {
    headers: {
      'Content-Type' : 'application/json',
      'Accept' : 'application/json'
    }
  });
}
