import React from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../store/auth";

const LoginForm = () => {
  const dispatch = useDispatch();
  const isLoggedIn = localStorage.getItem('isLoggedIn');

  const loginHandler = (event) => {
    event.preventDefault();
    localStorage.setItem('isLoggedIn', true);
    console.log('isLoggedIn', isLoggedIn);
    dispatch(authActions.login());
  };

  return (
    <>
      <main>
        <section>
          <form onSubmit={loginHandler}>
            <div>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input type="password" id="password" />
            </div>
            <button type="submit" >Login</button>
          </form>
        </section>
      </main>
    </>
  );
};
export default LoginForm;
