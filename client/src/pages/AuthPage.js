import React, { useState } from "react";
import { useHttp } from "../hooks/http.hook";
// import { useMessage } from "../hooks/message.hook";
import { ToastW } from "../component/ToastW";

export const AuthPage = () => {
  // const message = useMessage();

  const { loading, request, error, clearError } = useHttp();
  const [form, setForm] = useState({ email: "", password: "" });

  // useEffect(() => {
  //   setShowToast(true);
  //   message(error);
  //   clearError();
  // }, [error, message, clearError, Toast]);

  const changeHandler = (event) => {
    setForm(
      { ...form, [event.target.name]: event.target.value }
      // console.log("Changes", event.target.value)
    );
  };
  const registerHandler = async () => {
    try {
      const data = await request("/api/auth/register", "POST", { ...form });
      console.log("Data", data);
    } catch (e) {}
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-auto">
          <h1>Short Links</h1>
          {/* Toast */}
          {/* <Toast show={false} error={error} clearError={clearError}></Toast> */}
          <ToastW show={error?true:false} error={error}></ToastW>

          {/* Toast */}
          {/* <div className="card" style="width: 18rem;"> */}
          <div
            className="card bg-primary text-white"
            style={{ width: "25rem" }}
          >
            {/* <img className="card-img-top" src="..." alt="Card cap" /> */}
            <div className="card-body">
              <h5 className="card-title">Authorization</h5>
              <form>
                <div className="form-group">
                  <label htmlFor="email">Email address</label>
                  <input
                    placeholder="Enter email"
                    id="email"
                    type="email"
                    className="form-control"
                    name="email"
                    onChange={changeHandler}
                  />
                  <small id="emailHelp" className="form-text text-muted">
                    We'll never share your email with anyone else.
                  </small>
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    placeholder="Enter Password"
                    id="password"
                    type="password"
                    className="form-control"
                    name="password"
                    onChange={changeHandler}
                    disabled={loading}
                  />
                  <small id="emailHelp" className="form-text text-muted">
                    At lest 6 symbols.
                  </small>
                </div>
              </form>
              {/* 
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p> */}
              <div className="card-action">
                <button className="btn btn-warning mr-2">Login</button>
                <button
                  className="btn btn-secondary"
                  onClick={registerHandler}
                  disabled={loading}
                >
                  Singin
                </button>

                {/* 
                <a href="/" className="btn btn-danger">
                  Go somewhere
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
