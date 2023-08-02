import rankingbg from "../assets/rankingbg.svg"
import avtar from "../assets/rankingavtar.svg"

const Ranking=()=>{

   const working = (()=>{
      alert("value incremented")
   })
    

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
                                       
                             <div className="row align-items-center innercounter">
                                 <div className="col-lg-8">
                                          <h4>Increment/Decrement Nft Values Here By One Click</h4>
                                          <h4>Press to increase/decrement value</h4>
                                          <div className="gap-3 d-flex">
                                          <button type="button" class="btn btn-primary" onClick={working}>+</button>
                                        <button type="button" class="btn btn-primary">-</button>
                                          </div>
                                      
                                 </div>
                                  
                                   <div className="quantity col-lg-4">
                                        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Nft value"/>
                                   </div>
                                

                                </div>      
                            
                                  

                       </div>
                     
              </div>
    )
}
export default Ranking;