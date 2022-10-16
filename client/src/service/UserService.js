import axios from "axios";

export function login(email, password) {
  return axios.post("http://localhost:4000/users/login", {
    email: email,
    password: password,
  });
}

export function signup(fullName, email, password) {
  return axios.post("http://localhost:4000/users/signup", {
    fullName,
    email,
    password,
  });
}

export function update(fullName, email, password, passOld) {
  return axios.patch("http://localhost:4000/users/" + sessionStorage.getItem('id'), {
    fullName,
    email,
    password,
    passOld
  });
}

export function files(id, auth_token) {
  return axios.get("http://localhost:4000/users/" + id, {
    headers: {
      "Content-Type": "multipart/form-data",
      token: 'Bearer '+sessionStorage.getItem("auth_token"),
    },
  });
}

