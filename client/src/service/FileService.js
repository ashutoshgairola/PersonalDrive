import axios from "axios";

export function upload(formData) {

  return axios.post(
    "http://localhost:4000/users/upload/" + sessionStorage.getItem("id"),
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
        token: 'Bearer '+sessionStorage.getItem("auth_token"),
      },
    }
  );
}

export function delete_file(name) {
  return axios.delete(
    "http://localhost:4000/users/delete/" + sessionStorage.getItem("id")+"/"+name);
}

export function getDetails(name) {
  return axios.get(
    "http://localhost:4000/users/file/" +
      sessionStorage.getItem("id") +
      "/" +
      name
  );
}
