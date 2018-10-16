import axios, { AxiosResponse } from "axios";

const apiUrl = "http://localhost:8080/user/";

export const fetchStudents = (response: AxiosResponse<any>) => {
  return {
    type: "STUDENTS",
    payload: {
      students: response.data
    }
  };
};

export const handleRegister = (username, password) => {
  return (dispatch: any) => {
    return axios.post(apiUrl + "register", {'username':username, 'password': password})
      .then(response => {
        console.log("response", response);
        dispatch(fetchStudents(response));
      })
      .catch(error => {
        throw (error);
      });
  };
};