import avtar from "../assets/avatarone.svg";
import { useState } from "react";
import { useEffect } from "react";

const Bgsection = () => {

     const countDownDate = new Date("April 19, 2023 15:37:25").getTime();
 
  const [timer, settimer] = useState({})

  useEffect(()=>{
                setInterval(()=>{
                   settimer(()=>{
                    const now = new Date().getTime();
                    const distance = countDownDate - now;
                    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
                    return{
                        days,hours,minutes,seconds
                    }
                   })      
                },1000)
  },[])
  
//   console.log(timer);

  return (
    <div className="container-fluid meshroombg">
      <div className="padsetbanner gradientbgsec">
        <div className="row">
            <div className="topsetbg">

          <div className="col-6">
            <div className="">
              <span className="avtarbtnbg">
              <img src={avtar} className="img-fluid" alt="..." />
              <span>Shroome</span>
              </span>
              <h1 className="my-4">Magic Mashrooms</h1>
              <button type="button" className="btn btn-light whitetbtn">
                See NFT
              </button>
            </div>
          </div>
          <div className="col-6">
            <div className="timer-box">
            <div id="timer">
              <div className="row gapsetbg">
                <p>Auotion ends in:</p>
                <div className="col-lg-3">
                  <h5>
                    {timer.days}
                  </h5>
                  <span>Days</span>
                </div>
                <div className="col-lg-3">
                  <h5>
                    {timer.hours}
                  </h5>
                  <span>Hours</span>
                </div>
                <div className="col-lg-3">
                  <h5>
                  {timer.minutes}
                  </h5>
                  <span>Minutes</span>
                </div>
                <div className="col-lg-3">
                  <h5> {timer.seconds}</h5>
                  <span>Seconds</span>
                </div>
                </div>
              </div>
            </div>
          </div>
          </div> 

        </div>
      </div>
    </div>
  );
};

export default Bgsection;
