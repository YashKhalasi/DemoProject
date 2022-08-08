import React from "react";
import { useDispatch } from "react-redux";
import { userAction } from "./userSlice";

const TableofUsers = (props) => {
  const dispatch = useDispatch();

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
  dispatch(userAction.removeuser({
    userId: data.id,
  }))
 }

  return (
    <>
      {
      props.tableData.length > 0 && 
    (
        <table class="table table-primary table-striped">
          <thead>
            <tr>
              <th scope="col">Index</th>
              <th scope="col">User Name</th>
              <th scope="col">Age</th>
              <th scope="col">Job Description</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
           <tbody>
            {props.tableData.map((list, index) => {
              return (
                <>
                  {/* {!editUser ? */}
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{list.fullName}</td>
                  <td>{list.age }</td>
                  <td>{list.occupation}</td>
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
