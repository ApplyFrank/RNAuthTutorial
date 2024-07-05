import axios from "axios";

const API_KEY = "AIzaSyABzrW1PzwCym02rsHvMXrJmTo1pzA25cQ";
export async function createUser(email, password) {
  await authenticate("signup", email, password);
}

export async function login(email, password) {
  authenticate("signInWithPassword", email, password);
}

async function authenticate(mode, email, password) {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;

  try {
    console.log("email and password", [email, password]);
    const response = await axios.post(url, {
      email: email,
      password: password,
      returnSecureToken: true,
    });
    console.log(response.data);
  } catch (error) {
    console.log("createUser error: ", error);
  }
}
