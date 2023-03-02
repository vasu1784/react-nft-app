import dog from "../assets/dog.svg";
import tree from "../assets/tree.svg";
import roboto from "../assets/roboto.svg";
import cat from "../assets/cat-secondary.svg";
import wolf from "../assets/wolf-secondary.svg";
import conter from "../assets/count-secondary.svg";
import avtar from "../assets/avatarone.svg";

const Trending = () => {
  return (
    <div className="container-fluid padsetbanner trendsec">
      <h2>Trending Collection</h2>
      <h5>Checkout Our Weekly Updated Trending Collection.</h5>
      <div className="padtopset">
        <div className="row">
          <div className="col-lg-4">
            <div className="card">
              <img src={dog} className="card-img-top" alt="..." />
            </div>
            <div className="mt-4">
              <div className="row">
                <div className="col-4 card">
                  <img src={cat} className="img-fluid" alt="..." />
                </div>
                <div className="col-4 card">
                  <img src={wolf} className="img-fluid" alt="..." />
                </div>
                <div className="col-4 card">
                  <img src={conter} className="img-fluid" alt="..." />
                </div>

                <div className="mt-3">
                  <h5>Dsgn Animals</h5>
                  <div className="row">
                    <div className="col-2">
                      <img src={avtar} className="img-fluid" alt="..." />
                    </div>
                    <div className="col-2 p-0">
                      <span>MrFox</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 ">
            <div className="card  my-md-0 my-4">
              <img src={tree} className="card-img-top" alt="..." />
            </div>

            <div className="mt-4">
              <div className="row">
                <div className="col-4 card">
                  <img src={wolf} className="img-fluid" alt="..." />
                </div>
                <div className="col-4 card">
                  <img src={cat} className="img-fluid" alt="..." />
                </div>
                <div className="col-4 card">
                  <img src={conter} className="img-fluid" alt="..." />
                </div>

                <div className="mt-3">
                  <h5>Magic Mushrooms</h5>
                  <div className="row">
                    <div className="col-2">
                      <img src={avtar} className="img-fluid" alt="..." />
                    </div>
                    <div className="col-2 p-0">
                      <span>Shroomie</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="card">
              <img src={roboto} className="card-img-top" alt="..." />
            </div>
            <div className="mt-4">
              <div className="row">
                <div className="col-4 card">
                  <img src={wolf} className="img-fluid" alt="..." />
                </div>
                <div className="col-4 card">
                  <img src={cat} className="img-fluid" alt="..." />
                </div>
                <div className="col-4 card">
                  <img src={conter} className="img-fluid" alt="..." />
                </div>

                <div className="mt-3">
                  <h5>Disco Machines</h5>
                  <div className="row">
                    <div className="col-2">
                      <img src={avtar} className="img-fluid" alt="..." />
                    </div>
                    <div className="col-2 p-0">
                      <span>BeKind2Robots</span>
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
export default Trending;
