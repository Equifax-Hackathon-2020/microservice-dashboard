import {
  CATALOGUE
} from "../_redux/microServicesCrud";
import microServicesTableMock from "./microServicesTableMock";

export default function mockMicroServices(mock) {
  mock.onGet(CATALOGUE).reply(() => {

    return [200, { ...microServicesTableMock }];
  });

  mock.onGet(CATALOGUE + '/aLFFtwa5aEh2yNMrfG2y').reply(() => {

    const catalogue = microServicesTableMock.find(x => x.docId === 'aLFFtwa5aEh2yNMrfG2y');

    if (catalogue) {
      return [200, { ...catalogue }];
    }

    return [400];
  });


  mock.onGet(CATALOGUE + '/1234567890').reply(() => {

    const catalogue = microServicesTableMock.find(x => x.docId === '1234567890');

    if (catalogue) {
      return [200, { ...catalogue }];
    }

    return [400];
  });
  mock.onGet(CATALOGUE + '/2234567890').reply(() => {

    const catalogue = microServicesTableMock.find(x => x.docId === '2234567890');

    if (catalogue) {
      return [200, { ...catalogue }];
    }

    return [400];
  });
  mock.onGet(CATALOGUE + '/3234567890').reply(() => {

    const catalogue = microServicesTableMock.find(x => x.docId === '3234567890');

    if (catalogue) {
      return [200, { ...catalogue }];
    }

    return [400];
  });
  mock.onGet(CATALOGUE + '/4234567890').reply(() => {

    const catalogue = microServicesTableMock.find(x => x.docId === '4234567890');

    if (catalogue) {
      return [200, { ...catalogue }];
    }

    return [400];
  });
  mock.onGet(CATALOGUE + '/5234567890').reply(() => {

    const catalogue = microServicesTableMock.find(x => x.docId === '5234567890');

    if (catalogue) {
      return [200, { ...catalogue }];
    }

    return [400];
  });
  mock.onGet(CATALOGUE + '/6234567890').reply(() => {

    const catalogue = microServicesTableMock.find(x => x.docId === '6234567890');

    if (catalogue) {
      return [200, { ...catalogue }];
    }

    return [400];
  });
  mock.onGet(CATALOGUE + '/7234567890').reply(() => {

    const catalogue = microServicesTableMock.find(x => x.docId === '7234567890');

    if (catalogue) {
      return [200, { ...catalogue }];
    }

    return [400];
  });
}
