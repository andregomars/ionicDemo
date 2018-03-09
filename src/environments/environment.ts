export enum DataSourceType {
  Local,
  Firebase,
  Swagger
}

export const environment = {
  production: false,
  agm: { apiKey: 'AIzaSyC2aUGq0zuZMLTgrUG72Wb4LX6nOA_Q4VM' },
  firebase: {
    apiKey: 'AIzaSyAvlOwka2tHQ11k7cFxD0gWrv8_u19yIDc',
    authDomain: 'ioccatsdemo.firebaseapp.com',
    databaseURL: 'https://ioccatsdemo.firebaseio.com',
    projectId: 'ioccatsdemo',
    storageBucket: 'ioccatsdemo.appspot.com',
    messagingSenderId: '652898326248'
  },
  apiRootLocal: 'assets/data',
  apiRootIocCATS: 'http://localhost:8080/api/rest/v1',
  dataSource: DataSourceType.Firebase
}