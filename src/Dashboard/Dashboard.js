import React, {  startTransition, useEffect, useReducer, useState } from "react";
import NavBar from "./Navbar";
import AddLists from "../AddingList/AddLists";
import TableofList from "../AddingList/TableofList";
import MovieList from "../Movies/MovieList";
import MovieReduxList from "../Movies/MovieReduxList";
import LoginForm from "../Login/Login";
import WishList from "../WishList/WishLists";
import Userform from "../CRUD-Saga/Userform";
import { useSelector } from "react-redux";

const reducer =(state,action) =>{
  switch(action.type){  
    case 'addingList':
      console.log("AddingList",action)
      return {...state,addingList:action.payload};

    case 'addBudget':
      return {...state,addBudget:action.payload};
    
    case 'totalBudget':
      return {...state,totalBudget:action.payload};

    case 'addList':
      console.log("AddingList",action)
      return {...state,addList:[...state.addList,action.payload]};

      default:throw new Error(`Invalid action ${action.type}`);
  }
}

const Dashboard = () => {

  // const isAuth = true;
  // const [addingList, setaddingList] = useState("CRUDSaga");
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  const loggedInorNot = useSelector(state => state.auth.isLoggedIn)
  console.log(isLoggedIn,"Setting up Dashboard",loggedInorNot)
  const isAuth = !loggedInorNot  && isLoggedIn === "false"?false:true;
  
  // const isAuth = isLoggedIn === true ? true:false;
  const isActive = useSelector(state => state.userData.isActive);
  const isActivateTab =  localStorage.getItem('isActive');
  console.log(isAuth,"is Auth..",isActive,"is activated",isActivateTab);

  const [state,dispatched]=useReducer(reducer,{
    addingList:isActivateTab,addBudget:0,totalBudget:10000,addList:[]

  })

  // const [addingList, setaddingList] = useState(isActivateTab);
  // const [addBudget, setaddBudget] = useState(0);
  // const [totalBudget, settotalBudget] = useState(10000);
  // const [addLists, setAddLists] = useState([]);


  useEffect(() =>{
    console.log(isAuth,"is Auth..",isActivateTab);
  })

  const listAdded = (product, price, description) => {
    const data={
      product: product,
      price: Number(parseFloat(price).toFixed(2)).toLocaleString(),
      description: description,
    }
    console.log("data added",data)
    dispatched({type:'addList',payload:data})

    console.log("listadden..",state.addList)

    // setAddLists((prevAddLists) => {
    //   return [
    //     ...prevAddLists,
    //     {
    //       product: product,
    //       price: Number(parseFloat(price).toFixed(2)).toLocaleString(),
    //       description: description,
    //     },
    //   ];
    // });
  };

  const addAmount = (amount) => {
    const { value } = amount.target;
    console.log("Amount...", amount.target.value);
    dispatched({type:'addBudget',payload: value})
    // setaddBudget(value);
  };

  const addBudgetAmount = (val) => {
    dispatched({type:'addBudget',payload: parseFloat(state.totalBudget) + parseFloat(state.addBudget) - parseFloat(val)})
    // settotalBudget(
    //   parseFloat(state.totalBudget) + parseFloat(state.addBudget) - parseFloat(val)
    // );
    console.log("AddBudgetAmount...", state.addBudget);
    dispatched({type:'addBudget',payload: 0})
    // setaddBudget(0);
  };

  const addList = (e) => {
    localStorage.setItem('isActive', e);
    dispatched({type:'addingList',payload: e})
    // setaddingList(e);
  };

  console.log("addedlisteee...",state.addList)
  return (
    <div>
      <NavBar addList={addList} totalBudget={state.totalBudget} loggedIn={isAuth}/>
      {!isAuth ? <LoginForm/>:

      isAuth && state.addingList === "addBudget" && (
        <div>
          ₹
          <input
            value={state.addBudget}
            type="number"
            className="form-control"
            onChange={addAmount}
            placeholder="Enter your amount for monthly expences."
          />
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => addBudgetAmount(0)}
          >
            Add Budgte amount
          </button>
        </div>
      )
}
      {isAuth && state.addingList === "addList" ? state.addLists?.length > 0 ? (
        <TableofList lists={state.addLists} />
      ) : (
        <h4>No list is available..</h4>
      ):''}
      {isAuth && state.addingList === "showList" && (
        <>
          <AddLists
            listAdded={listAdded}
            totalBudget={state.totalBudget}
            addBudgetAmount={addBudgetAmount}
          />
          {state.totalBudget <= 0 && (
            <h2 className="text-danger">
              You've not sufficient balance to purchase more items.
            </h2>
          )}
          <TableofList lists={state.addList} />
        </>
      )}
      {isAuth && state.addingList === "showMovies" &&  <MovieList/>}
      {isAuth && state.addingList === "showReduxMovies" &&  <MovieReduxList/>}
      {isAuth && state.addingList === "reduxSaga" &&  <WishList/>}
      {isAuth && state.addingList === "CRUDSaga" &&  <Userform/>}
    </div>
  );
};
export default Dashboard;
