import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import feature from "../assets/feature.gif";
import { useEffect, useState } from "react";
const limit = 240;
const saleslimit = 239;
const Autionslimit = 99;

const Banner = () => {
  const [salescounter, setsalescounter] = useState(1);

  useEffect(() => {
    const salesinterval = setInterval(() => {
      if (salescounter <= saleslimit) {
        setsalescounter((prev) => prev + 1);
      }
    }, 50);

    return () => {
      clearInterval(salesinterval);
    };
  });

  const [auctioncounter, setauctioncounter] = useState(1);
  useEffect(() => {
    const auctioninterval = setInterval(() => {
      if (auctioncounter <= Autionslimit) {
        setauctioncounter((prev) => prev + 1);
      }
    }, 50);
    //  console.log(auctioninterval ,"autionCounter")
    return () => {
      clearInterval(auctioninterval);
    };
  });
  const [counter, setcounter] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      if (counter <= limit) {
        setcounter((prev) => prev + 1);
      }
    }, 50);
    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div className="container-fluid bg-dark padsetbanner">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h2 className="text-white h2banberfont">
              Discover digital art & Collect NFTs
            </h2>
            <p className="text-white">
              NFT marketplace UI created with Anima for Figma. Collect, buy and
              sell art from more than 20k NFT artists.
            </p>
            <Link to="/signup">
              <Button variant="primary navbtn banner-btn">Sign Up</Button>
            </Link>
            <div className="mt-4">
              <div className="row">
                <div className="col-4">
                  <h3>{salescounter}K</h3>
                  <p>Total Sale</p>
                </div>

                <div className="col-4">
                  <h3>{auctioncounter}k+</h3>
                  <p>Auctions</p>
                </div>

                <div className="col-4">
                  <h3>{counter}k+</h3>
                  <p>Artists</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <img src={feature} className="img-fluid" alt="..." />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
