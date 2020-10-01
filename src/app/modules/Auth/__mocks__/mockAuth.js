import {
  LOGIN_URL
} from "../_redux/authCrud";
import userTableMock from "./userTableMock";

export default function mockAuth(mock) {
  mock.onPost(LOGIN_URL).reply(({ data }) => {
    const { email, password } = JSON.parse(data);

    if (email && password) {
      const user = userTableMock.find(
        x =>
          x.email.toLowerCase() === email.toLowerCase() &&
          x.password === password
      );

      if (user) {
        return [200, { ...user }];
      }
    }

    return [400];
  });

}
