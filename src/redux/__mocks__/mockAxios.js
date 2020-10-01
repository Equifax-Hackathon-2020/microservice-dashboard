import MockAdapter from "axios-mock-adapter";
import mockAuth from "../../app/modules/Auth/__mocks__/mockAuth";
import mockMicroServices from "../../app/modules/MicroServices/__mocks__/mockMicroServices";

export default function mockAxios(axios) {
  const mock = new MockAdapter(axios, { delayResponse: 300 });

  mockAuth(mock);
  mockMicroServices(mock);
  return mock;
}
