// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  planets_url: "https://findfalcone.herokuapp.com/planets",
  vehicle_url: "https://findfalcone.herokuapp.com/vehicles",
  end_result_url: "http://localhost:3000/find",
  get_token: "http://localhost:3000/token",
  default_error_message: "An unexpected error message occured",
  token_default_value: "PlmVXHewGEQxKJIpWnKCBtNMepseniTM",
  maximum_number_steps: 8
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
