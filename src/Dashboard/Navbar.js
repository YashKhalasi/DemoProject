import React from "react";
import { useDispatch } from "react-redux/es/exports";
import { authActions } from "../store/auth";

const NavBar = (props) => {
 const dispatch = useDispatch();

  const logout=()=>{
    console.log("logout");
    localStorage.setItem('isLoggedIn', false);
    dispatch(authActions.logout());
  }
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container-fluid">
        <b className="p-2">Dashboard</b>
        {props.loggedIn && (
          <>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
              <ul class="navbar-nav">
                <li>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => props.addList("showList")}
                  >
                    Add Lists
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => props.addList("addList")}
                  >
                    Mark the expences
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => props.addList("addBudget")}
                  >
                    Add Budgte
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => props.addList("showMovies")}
                  >
                    Movie List
                  </button>
                </li>

                {/* <li>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => props.addList("showReduxMovies")}
                  >
                    Movie List by Redux
                  </button>
                </li> */}

                <li>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => props.addList("reduxSaga")}
                  >
                    CRUD op Redux
                  </button>
                </li>

                <li>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => props.addList("CRUDSaga")}
                  >
                    CRUD op SAGA
                  </button>
                </li>

              </ul>
            </div>

            <div className="d-flex flex-row-reverse">
              <h2>
                Your Budgte ₹
                {Number(
                  parseFloat(props.totalBudget).toFixed(2)
                ).toLocaleString()}
              </h2>
            </div>
            <div className="d-flex flex-row-reverse px-5">
           <button onClick={logout}>Logout</button>
          </div>
          </>
        )}
      </div>
    </nav>
  );
};
export default NavBar;
