/* eslint-disable no-restricted-globals */

import axios from "axios";;

const request = axios.create({
    baseURL: "http://localhost:3000/",
    headers: {
        'Accept': 'application/json'
    },
})


export const postRequest= (data) => axios.post("http://localhost:3000/users",{
    
    first_name: data.userDataList.first_name,
    last_name: data.userDataList.last_name,
    email: data.userDataList.email
     
  })
  .then(function (response) {
    
    console.log("in postRequest",response);
    setTimeout(() => location.reload(), 1000);
  })
  .catch(function (error) {
    console.log("in postRequest",error);
  });

  export const updateRequest= (url,data) => axios.put(url,{ 
    first_name: data.first_name,
    last_name: data.last_name,
    email: data.email
   })
  .then(function (response) {
    setTimeout(() => location.reload(), 1000);
    console.log("in updateRequest",response);
  })
  .catch(function (error) {
    console.log("in updateRequest",error);
  });

  export const deleteRequest= (url) => axios.delete(url,{  })
  .then(function (response) {
    setTimeout(() => location.reload(), 1000);
    console.log("in deleteRequest",response);
  })
  .catch(function (error) {
    console.log("in deleteRequest",error);
  });

export default request
