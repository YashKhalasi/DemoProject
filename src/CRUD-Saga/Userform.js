import React, {  useReducer } from "react";
import { useDispatch,useSelector } from "react-redux";
import TableofUsers from "./addedUser";
import  {userDataAction}  from "./userDataSlice";

const reducer =(state,action) =>{
    switch(action.type){  
      case 'firstname':
        return {...state,firstnamee:action.payload};

      case 'lastname':
        return {...state,lastnamee:action.payload};
      
      case 'email':
        return {...state,email:action.payload};

      case 'isRowEdit':
        return {...state,isRowEdit:action.payload};

      case 'editRowData':
        return {...state,editRowData:action.payload};

        default:throw new Error(`Invalid action ${action.type}`);
    }
}

const Userform = () => {
  const [state,dispatched] =useReducer(reducer,{
    firstnamee:'',lastnamee:'',email:'',isRowEdit:false,editRowData:{}
  })
  // const [firstnamee, setUserFullName] = useState("");
  // const [lastnamee, setUserAge] = useState("");
  // const [email, setOccupation] = useState("");
  // const [isRowEdit,setIsRowEdit] = useState(false);
  // const [editRowData,setEditRowData] = useState({});

  const dispatch = useDispatch();

  const tableData = useSelector(state => state.userList.userList);
  console.log("tableData...",tableData);


  const addUserHandler = (event) => {
    event.preventDefault();
    console.log( "firstnamee =",state.firstnamee,"lastnamee =", state.lastnamee,"emailId =", state.email );

    const data = {
      id:state.isRowEdit?state.editRowData.id:Math.floor(Math.random() * 100),
      first_name: state.firstnamee,
      last_name: state.lastnamee,
      email: state.email,
    };
    if(state.isRowEdit){
      dispatch(
        userDataAction.editUser({
          userDataList: data,
        })
      );
      dispatched({type:'isRowEdit',payload:false})
      // setIsRowEdit(false);
    }else{
      dispatch(
        userDataAction.addUser({
          userDataList: data,
        })
      );
    }
    dispatched({type:'firstname',payload:''})
    dispatched({type:'lastname',payload:''})
    dispatched({type:'email',payload:''})
    // setUserFullName("");
    // setUserAge("");
    // setOccupation("");
  };

  const firstName = (event) => {
    dispatched({type:'firstname',payload:event.target.value})
    // setUserFullName(event.target.value);
  };

  const lastName = (event) => {
    dispatched({type:'lastname',payload:event.target.value})
    // setUserFullName(event.target.value);

    // setUserAge(event.target.value);
  };

  const emailId = (event) => {
    dispatched({type:'email',payload:event.target.value})
    // setOccupation(event.target.value);
  };
  const editRow=(isEdit,data)=>{
    console.log(isEdit,"Row  Edit Called...",data); 
    dispatched({type:'isRowEdit',payload:isEdit})
    dispatched({type:'editRow',data})
    dispatched({type:'firstname',payload:data.first_name})
    dispatched({type:'lastname',payload:data.last_name})
    dispatched({type:'email',payload:data.email})
    // setIsRowEdit(isEdit);
    // setEditRowData(data);
    // setUserFullName(data.first_name);
    // setUserAge(data.last_name);
    // setOccupation(data.email);
  }

  // const sagaMiddleware = createSagaMiddleware()

  // const callApifromSaga =()=>{
  //   console.log("calling saga...");
  //   dispatch(userDataAction.getData());
  //   // sagaMiddleware.run(usersSaga)

  // }

  return (
    <>
      <h1>User Lists...</h1>
      <form onSubmit={addUserHandler} className="form-horizontal">
        <div class=" m-3">
          <label class="form-label m-2" htmlFor="purchaseItem">
           First Name
          </label>

          <input
            id="purchaseItem"
            type="text"
            required
            value={state.firstnamee}
            onChange={firstName}
          />
        </div>

        <div class=" m-3">
          <label class="form-label m-2" htmlFor="lastName">
            Last Name
          </label>

          <input required id="lastName" type="text" value={state.lastnamee} onChange={lastName} />
        </div>

        <div class=" m-3">
          <label class="form-label m-2" htmlFor="desc">
            Email ID
          </label>

          <input
            id="desc"
            type="email"
            required
            value={state.email}
            onChange={emailId}
          />
        </div>

        <button type="submit"  class="btn btn-primary">Add List</button>
      </form>
      {/* <button type="button" class="btn btn-primary" onClick={callApifromSaga}>call Saga</button> */}
      <div className="m-3">
        <TableofUsers editRow={editRow}/>
      </div>
    </>
  );
};
export default Userform;
