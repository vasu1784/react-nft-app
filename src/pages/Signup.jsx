import { useState } from "react";
import signimg from "../assets/signup.svg";
const Signup = () => {

const [error,seterror]=useState("");

  const [formData, setformData] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
    selectfield: "",
    gender: " ",
    check: false,
  });

  // const nameRef =useRef();
  // const auth = getAuth();
  const handleformData = (e) => {
    const inputValue =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setformData((prev) => ({
      ...prev,
      [e.target.name]: inputValue,
    }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault(); // This is an snyctic event

    const sigupData = {
      email: formData.email,
      password: formData.password,
      returnSecureToken: true,
    };
    // console.log(sigupData);

    async function postData(url = "", data = {}) {
      // Default options are marked with *
      const response = await fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data), // body data type must match "Content-Type" header
      });
      return response.json(); // parses JSON response into native JavaScript objects
    }

    postData(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAdXy8akyo2-yeAw29Ni2gWdRgjrKC26tc",
      sigupData
    ).then((res) => {
      console.log(res); // JSON data parsed by data.json() call
      // console.log(res.json())
      if(!res.ok){
        throw {name: 'Error', message: `Something went wrong! ${res.error.message}`}
      }
    }).catch(err => seterror(err.message));
  };
  console.log( error)

  return (
    <div className="container-fluid mt-4">
      <div className="row d-flex align-items-center">
        <div className="col-lg-6 ps-0">
          <img src={signimg} className="img-fluid" alt="..." />
        </div>
        <div className="col-lg-6">
          <div className="formwidset">
            <h1>Create Account</h1>
            <p>
              Welcome! Enter Your Details And Start Creating, Collecting And
              Selling Nfts.dfcdsjsbc
            </p>

            <form className="signform" onSubmit={onSubmitHandler}>
              <div className="mb-3 ">
                <input
                  type="text"
                  className="form-control"
                  aria-describedby="emailHelp"
                  placeholder="Username"
                  onChange={handleformData}
                  value={formData.name}
                  name="name"
                />
                <span>{formData.name}</span>
              </div>

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
                <span>{formData.email}</span>
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
                <span>{formData.password}</span>
              </div>

              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  aria-describedby="emailHelp"
                  placeholder="confirm Password"
                  name="confirmpassword"
                  value={formData.confirmpassword}
                  onChange={handleformData}
                />
                <span>{formData.confirmpassword}</span>
              </div>
              <div className="mb-3">
                <div className="form-group">
                  <select
                    className="form-control"
                    onChange={handleformData}
                    name="selectfield"
                  >
                    <option>Select-Country</option>
                    <option value="india">india</option>
                    <option value="pakistan">Pakistan</option>
                    <option value="Russia">Russia</option>
                    <option value="uk">Uk</option>
                    <option value="usa">Usa</option>
                  </select>
                </div>
                <span>{formData.selectfield}</span>
              </div>

              <div className="checkarea mb-3">
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="male"
                  className="form-check-input"
                  onChange={handleformData}
                />
                <label htmlFor="male">Male</label>
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="female"
                  className="form-check-input"
                  onChange={handleformData}
                />
                <label htmlFor="male">Female</label>
              </div>

              <span>{formData.gender}</span>

              <div className="form-check mb-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="defaultCheck1"
                  name="check"
                  onChange={handleformData}
                  checked={formData.check}
                />
                <label className="form-check-label" htmlFor="defaultCheck1">
                  I Agree T&c
                </label>
                <p>
                  {formData.check
                    ? "Thanks for Subcribe"
                    : "please check the term & conditions"}
                </p>
              </div>
                  {error && <p>{error}</p>}
              <div className="mb-3">
                <button type="submit" className="btn btn-primary signpagetbtn">
                  Create account
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Signup;
