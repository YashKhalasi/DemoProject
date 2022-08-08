import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { userDataAction } from "./userDataSlice";

const TableofUsers = (props) => {
  const dispatch = useDispatch();

  const tableData = useSelector(state => state.userData.dataList);
  console.log("tableData...",tableData);

console.log("tableofusers", props);

const editRow =(data)=>{
  props.editRow(true,data);
  console.log("editRow", data);
  // dispatch(userAction.editUser({
  //   user: data,
  // }))
}

const deleteRow =(data)=>{  
  console.log("deleteRow", data);
  dispatch(userDataAction.removeuser({
    userId: data.id,
  }))
 }

  return (
    <>
      {
      tableData.length > 0 && 
    (
        <table class="table table-primary table-striped">
          <thead>
            <tr>
              <th scope="col">Index</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email Id</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
           <tbody>
            {tableData.map((list, index) => {
              return (
                <>
                  {/* {!editUser ? */}
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{list.first_name}</td>
                  <td>{list.last_name }</td>
                  <td>{list.email}</td>
                  <td><button  class="btn btn-primary" onClick={() =>editRow(list)}>Edit</button></td>
                  <td><button class="btn btn-danger" onClick={() =>deleteRow(list)}>Delete</button></td>
                  </tr>
            </>
              );
            })}
          </tbody>
        </table>
      )}
    </>
  );
};
export default TableofUsers;
