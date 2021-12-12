import { environment } from "../environments/environment";
import Axios from "axios";
const userData = JSON.parse(localStorage.getItem("userData"));
const { token, uuid } = userData || {};


export const LoginApi = (data) => {
  return Axios.post(`${environment.BaseURL}/users/login`, { data });
};

export const SignupAPi = (data) => {
  return Axios.post(`${environment.BaseURL}/users/signup`, { data });
};

export const GetProfileDetails = () => {
  console.log(userData);
  return Axios.get(`${environment.BaseURL}/users/${uuid}/getProfile`, {
    headers: { "Authorization": `${token}` },
  });
};

export const EditProfileDetails = (data) => {
  return Axios.post(`${environment.BaseURL}/users/${uuid}/editProfile`, { data }, {
    headers: { "Authorization": `${token}` },
  });
};

export const ChangeUserPassword = (data) => {
  return Axios.post(`${environment.BaseURL}/users/${uuid}/changePassword`, { data }, {
    headers: { "Authorization": `${token}` },
  });
};

export const AddBankAccountAPi = (data) => {
  data.uuid = uuid;
  return Axios.post(`${environment.BaseURL}/accounts/addCard`, { data }, {
    headers: { "Authorization": `${token}` },
  });
};

export const getAccounts = () => {
  return Axios.get(`${environment.BaseURL}/accounts/users/${uuid}/getAccounts`, {
    headers: { "Authorization": `${token}` },
  });
};

export const deleteAccounts = (data) => {
  return Axios.post(`${environment.BaseURL}/accounts/${data.id}/deleteAccounts`, { data }, {
    headers: { "Authorization": `${token}` },
  });
};

export const EditBankAccountAPi = (data) => {
  return Axios.put(`${environment.BaseURL}/accounts/${data.id}/editAccounts`, { data }, {
    headers: { "Authorization": `${token}` },
  });
};


export const addCustomers = (data) => {
  return Axios.post(`${environment.BaseURL}/customers/users/addCustomer`, { data }, {
    headers: { "Authorization": `${token}` },
  });
};
export const getCustomers = () => {
  return Axios.get(`${environment.BaseURL}/customers/users/${uuid}/getCustomers`,
    {
      headers: { "Authorization": `${token}` },
    }
  );
};

