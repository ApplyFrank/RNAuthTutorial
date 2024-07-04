import axios from "axios";

const API_KEY = "AIzaSyABzrW1PzwCym02rsHvMXrJmTo1pzA25cQ";
export async function createUser({ email, password }) {
  await axios.post(
    "https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=" +
      API_KEY,
    {
      email: email,
      password: password,
      returnSecureToken: true,
    }
  );
}
