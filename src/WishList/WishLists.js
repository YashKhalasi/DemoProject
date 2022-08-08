// import { set } from "immer/dist/internal";
import React, { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import TableofUsers from "./addedUser";
import { userAction } from "./userSlice";

const WishList = () => {
  const [userFullName, setUserFullName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [occupations, setOccupation] = useState("");
  const [isRowEdit,setIsRowEdit] = useState(false);
  const [editRowData,setEditRowData] = useState({});

  const tableData = useSelector(state => state.userList.userList);
  console.log("tableData...",tableData);
  const dispatch = useDispatch();

  const addUserHandler = (event) => {
    event.preventDefault();
    console.log( "userFullName =",userFullName,"userAge =", userAge,"occupation =", occupations );

    const data = {
      id:isRowEdit?editRowData.id:Math.floor(Math.random() * 100),
      fullName: userFullName,
      age: userAge,
      occupation: occupations,
    };
    if(isRowEdit){
      dispatch(
        userAction.editUser({
          userList: data,
        })
      );
      setIsRowEdit(false);
    }else{
      dispatch(
        userAction.addUser({
          userList: data,
        })
      );
    }

    setUserFullName("");
    setUserAge("");
    setOccupation("");
  };

  const userName = (event) => {
    setUserFullName(event.target.value);
  };

  const age = (event) => {
    setUserAge(event.target.value);
  };

  const occupation = (event) => {
    setOccupation(event.target.value);
  };
  const editRow=(isEdit,data)=>{
    console.log(isEdit,"Row  Edit Called...",data); 
    setIsRowEdit(isEdit);
    setEditRowData(data);
    setUserFullName(data.fullName);
    setUserAge(data.age);
    setOccupation(data.occupation);
  }

  // const sagaMiddleware = createSagaMiddleware()

  // const callApifromSaga =()=>{
  //   console.log("calling saga...");
  //   dispatch(userAction.getData());
  //   // sagaMiddleware.run(usersSaga)

  // }

  return (
    <>
      <h1>User Lists...</h1>
      <form onSubmit={addUserHandler} className="form-horizontal">
        <div class=" m-3">
          <label class="form-label m-2" htmlFor="purchaseItem">
            Name
          </label>

          <input
            id="purchaseItem"
            type="text"
            required
            value={userFullName}
            onChange={userName}
          />
        </div>

        <div class=" m-3">
          <label class="form-label m-2" htmlFor="age">
            Age
          </label>

          <input required id="age" type="number" value={userAge} onChange={age} />
        </div>

        <div class=" m-3">
          <label class="form-label m-2" htmlFor="desc">
            Occupation
          </label>

          <input
            id="desc"
            required
            type="text"
            value={occupations}
            onChange={occupation}
          />
        </div>

        <button type="submit"  class="btn btn-primary">Add List</button>
      </form>
      {/* <button type="button" class="btn btn-primary" onClick={callApifromSaga}>call Saga</button> */}
      <div className="m-3">
        <TableofUsers tableData={tableData} editRow={editRow}/>
      </div>
    </>
  );
};
export default WishList;
