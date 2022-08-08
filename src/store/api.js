import request,{postRequest,deleteRequest,updateRequest} from "../saga/request";

export const getUsers = async () => {
    const getUsers = `/users`;
    return await request.get(getUsers);
};

export const addnewUser = async (data) => {
    console.log("payload", data);
    return await postRequest(data);
};

export const deleteUser = async (data) => {
    console.log("payload", data);
    const getUsers = "http://localhost:3000/users/"+data;
    return await deleteRequest(getUsers);
};

export const updateUser = async (data) => {
    console.log("payload", data);
    const getUsers = "http://localhost:3000/users/"+data.id;
    return await updateRequest(getUsers,data);
};