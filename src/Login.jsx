import React from "react";

function Login(props) {
  return (
    <div className="row">
      <div className="col-lg-5 col-md-7 mx-auto">
        <div className="card-border-success shadow-lg my-2">
          <div className="card-header border-bottom border-success">
            <h4
              style={{ fontSize: "40px" }}
              className="text-success text-center"
            >
              Login
            </h4>
          </div>
          <div className="card-body border-bottom border-success">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className="form-control"
                id="email"
                placeholder="Email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="text"
                className="form-control"
                id="password"
                placeholder="Password"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
