import rankingbg from "../assets/rankingbg.svg"
import avtar from "../assets/rankingavtar.svg"

const Ranking=()=>{
    return(

              <div className="container-fluid mt-3 p-lg-0">
                <img src={rankingbg} className="card-img-top" alt="..." />  
                       <div className="container">
                        <div className="row">
                            <div className="col-lg-2 imgsetrank">
                            <img src={avtar} className="card-img-top rankimg" alt="..." />
                            </div>
                            <div className="col-9">

                            </div>
                        </div>
                                         
                       <h3 className="rankheading">AnikaKid</h3>       

                       </div>
                            
              </div>
    )
}
export default Ranking;