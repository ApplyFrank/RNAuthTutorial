import axios from "axios";

const API_KEY = "AIzaSyABzrW1PzwCym02rsHvMXrJmTo1pzA25cQ";
export function createUser(email, password) {
  return authenticate("signUp", email, password);
}
// NOTE if you return token in authenticate since its already handling the promise,
// you can remove async await from login and createUser
export function login(email, password) {
  return authenticate("signInWithPassword", email, password);
}

async function authenticate(mode, email, password) {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;
  console.log(url, email, password);
  const response = await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true,
  });
  console.log(response);

  const token = response.data.idToken;
  console.log("token is me ", token);
  return token;
}
