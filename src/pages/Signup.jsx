import { useState } from "react";
import signimg from "../assets/signup.svg";
const Signup = () => {

const [status,setStatus]=useState({
  success: false,
  error: '',
  loading: false
});

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


    if(formData.name === "" ||
    formData.email === "" ||
   formData.password === "" ||
   formData.confirmpassword === ""
  ){
    setStatus(prev=>(
      {
        ...prev,
        error: 'Please add all fields!'
      }
    ));
    return;
  }
          
         

     if(formData.password !== formData.confirmpassword){
      setStatus(prev=>(
        {
          ...prev,
          error: 'Your Confirm password is not match with password !'
        }
      ));
          return;
     } 
       
 

         if(formData.gender === " "){
          setStatus(prev=>(
            {
              ...prev,
              error: 'Please select the gender'
            }
          ));
          return;
         } 

         setStatus(prev=>(
          {
            ...prev,
            error: ''
          }
        ));

       
    const sigupData = {
      email: formData.email,
      password: formData.password,
      returnSecureToken: true,
    };
    // console.log(sigupData);
   
    async function postData(url = "", data = {}) {
      // Default options are marked with *
      const res = await fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data), // body data type must match "Content-Type" header
      });
      return res.json(); // parses JSON response into native JavaScript objects
    }
    setStatus(prev=>({
      ...prev,
      loading: true
    }))
    postData(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAdXy8akyo2-yeAw29Ni2gWdRgjrKC26tc",
      sigupData
    ).then(async response => {
      console.log(response)
      if(response.error){
        throw {type: 'error', message: `${response.error.code}, Something went wrong!, ${response.error.message}`}
      }
      setStatus(prev=>({
        ...prev,
        success: true
      }))
  })
  .catch(error => {
      setStatus(prev=>({
        ...prev,
        error: error.message
      }))
  }).finally(()=>{
    setStatus(prev=>({
      ...prev,
      loading: false
    }))
  })
  };
 
  

  return (
    <div className="container-fluid mt-4">
      <div className="row d-flex align-items-center">
        <div className="col-lg-6 ps-0">
          <img src={signimg} className="img-fluid" alt="..." />
        </div>
        <div className="col-lg-6">
          <div className="formwidset">
            {!status.success && !status.loading && (<>
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
                {/* <span>{formData.name}</span>
                <span>{error}</span> */}
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
                {/* <span>{formData.email}</span>
                <p>{error}</p> */}
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
                {/* <span>{formData.password}</span> */}
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
                {/* <span>{formData.confirmpassword}</span> */}
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
                {/* <span>{formData.selectfield}</span> */}
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
                <label htmlFor="male" className="checkmale-female">Male</label>
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="female"
                  className="form-check-input"
                  onChange={handleformData}
                />
                <label htmlFor="male" className="checkmale-female">Female</label>
              </div>
{/* 
              <span>{formData.gender}</span> */}

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
                <label className="form-check-label checkmale-female" htmlFor="defaultCheck1">
                  I Agree T&c
                </label>
                <p>
                  {formData.check
                    ? "Thanks for Subcribe"
                    : "please check the term & conditions"}
                </p>
              </div>
                  {status.error && <p>{status.error}</p>}
              <div className="mb-3">
                <button type="submit" className="btn btn-primary signpagetbtn">
                  Create account
                </button>
              </div>
            </form></>)}
            {status.success  && !status.loading && <h4>User SuccessFully Registered!</h4>}
            {status.loading && <h4>Validating User...</h4>}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Signup;
