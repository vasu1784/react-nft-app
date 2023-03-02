import { useState } from "react";
import forms from "../assets/forms.svg";

const Joinform = () => {

    const [Email,setEmail] = useState("");
    const [error, setError] = useState("Subcribe for further Updates");
     
    const formhandler=(e)=>{
        setEmail(e.target.value);
        //  console.log(Email);
         if(e.target.value === ""){
            setError("*Please Enter Email Address");
            return;
         }
         setError("");
    }

    return (
        <div className="container-fluid padsetbanner">
            <div className="formsection">
                <div className="row align-items-lg-center">
                    <div className="col-lg-6">
                        <img src={forms} className="img-fluid" alt="..." />
                    </div>
                    <div className="col-lg-6">
                        <h2>Join Our Weekly Digest</h2>
                        <p className="my-4">Get exclusive promotions & updates straight to your inbox.</p>



                        <div className="input-group mb-3 inputformset">
                            <input type="text" className="form-control nfttextform" placeholder="Enter Your email here" aria-label="Recipient's username"
                           aria-describedby="basic-addon2" onChange={formhandler} value ={Email} />
                       
                            <div className="input-group-append">
                                <button className="btn btn-outline-secondary form-btn" type="button">
                                  Subscribe
                                </button>
                            </div>
                             

                        </div>
                            <div className="col-lg-12 mt-4">
                                  <span>{error}</span>
                            </div>
                     
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Joinform;
