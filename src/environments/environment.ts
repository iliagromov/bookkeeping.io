// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  hmr: false,
    firebase: {
      apiKey: "AIzaSyBqIfHaECZCS0lK2MtVjRE-d1na_LagMmg",
      authDomain: "bookkeeping-42039.firebaseapp.com",
      databaseURL: "https://bookkeeping-42039.firebaseio.com",
      projectId: "bookkeeping-42039",
      storageBucket: "bookkeeping-42039.appspot.com",
      messagingSenderId: "958794694597",
      appId: "1:958794694597:web:7c7c10e47924a11f72d5ac",
      measurementId: "G-W8ZRXJJ8R2"
    },
    database: 'firebase',
    socialAuthEnabled: true
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
