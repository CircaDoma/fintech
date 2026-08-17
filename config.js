// Configuration for the budget dashboard.
// None of these values are secrets — see the note at the bottom of this file.
// This file must be committed alongside index.html or the deployed site will not load.

const CLIENT_ID = "273512296490-u6kmcdkbhsal94sa2c3nhkiahjftdggr.apps.googleusercontent.com";   // ends in .apps.googleusercontent.com
const API_KEY   = "AIzaSyBK0Tpfyvzv-AK05GpL27oCavuaSe7yv7s";     // restricted to the Google Picker API
const APP_ID    = "273512296490";   // numeric Cloud project number
const TAB       = "MOBILE";                 // tab name, must match the sheet exactly

// Why these are safe to publish:
//   CLIENT_ID  identifies the app; Google rejects it from any unregistered origin.
//   API_KEY    is restricted to the Picker API and grants no access to Drive data.
//   APP_ID     is visible in Cloud Console URLs and confers nothing on its own.
//   TAB        is a sheet tab name.
// The access token is the actual credential. It is issued at sign-in, held in
// memory only, expires in about an hour, and never appears in any file.
