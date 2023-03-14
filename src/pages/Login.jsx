import { useState } from "react";
import signimg from "../assets/signup.svg";
const Login = () => {
  const [status, setStatus] = useState({
    success: false,
    error: "",
    loading: false,
  });

  const [formData, setformData] = useState({
    email: "",
    password: "",
  });

  const handleformData = (e) => {
    const inputValue = e.target.value;
    setformData((prev) => ({
      ...prev,
      [e.target.name]: inputValue,
    }));
  };

  const onSubmitLoginHandler = async (e) => {
    e.preventDefault(); // This is an snyctic event
    if (formData.email === "" || formData.password === "") {
      setStatus((prev) => ({
        ...prev,
        error: "Please add all fields!",
      }));
      return;
    }
    setStatus((prev) => ({
      ...prev,
      error: "",
    }));

    const loginData = {
      email: formData.email,
      password: formData.password,
      returnSecureToken: true,
    };

    console.log("test");

    async function post(url = "", data = {}) {
      // Default options are marked with *
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data), // body data type must match "Content-Type" header
      });
      return res.json(); // parses JSON response into native JavaScript objects
    }
    setStatus((prev) => ({
      ...prev,
      loading: true,
    }));
    post(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAdXy8akyo2-yeAw29Ni2gWdRgjrKC26tc",
      loginData
    )
      .then(async (response) => {
        console.log(response);
        if (response.error) {
          throw {
            type: "error",
            message: `${response.error.code}, Something went wrong!, ${response.error.message}`,
          };
        }
        console.log(response, "response");
        setStatus((prev) => ({
          ...prev,
          success: true,
        }));
      })
      .catch((error) => {
        setStatus((prev) => ({
          ...prev,
          error: error.message,
        }));
      })
      .finally(() => {
        setStatus((prev) => ({
          ...prev,
          loading: false,
        }));
      });
  };

  return (
    <div className="container-fluid mt-4 login">
      <div className="row d-flex align-items-center">
        <div className="col-lg-6 ps-0">
          <img src={signimg} className="img-fluid" alt="..." />
        </div>
        <div className="col-lg-6">
          <div className="formwidset">
            {!status.success && !status.loading && (
              <>
                <h1>Login Account</h1>
                <p>Welcome! Please enter your details for login!</p>

                <form className="signform" onSubmit={onSubmitLoginHandler}>
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control"
                      aria-describedby="emailHelp"
                      placeholder="Email Address"
                      onChange={handleformData}
                      value={formData.email}
                      name="email"
                    />
                  </div>

                  <div className="mb-3">
                    <input
                      type="password"
                      className="form-control"
                      aria-describedby="emailHelp"
                      placeholder="Password"
                      name="password"
                      value={formData.password}
                      onChange={handleformData}
                    />
                  </div>
                  {status.error && <p>{status.error}</p>}
                  <div className="mb-3">
                    <button
                      type="submit"
                      className="btn btn-primary signpagetbtn"
                    >
                      Log-In
                    </button>
                  </div>
                </form>
              </>
            )}
            {status.success && !status.loading && <h4>Login SuccessFully</h4>}
            {status.loading && <h4>Validating User...</h4>}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
