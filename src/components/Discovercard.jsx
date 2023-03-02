import avtar from "../assets/avatarone.svg";
import space from "../assets/space.svg";
import astro from "../assets/astro.svg";

const Discovercard=()=>{

    return(
             <div className="container-fluid padsetbanner">
                       <div className="row">
                     <div className="col-lg-4">
                        <div className="card diccard">
                        <img src={space} className="img-fluid colimgset" alt="..." />
                        <div className="discovercard">
                            <h3>Distant Galaxy</h3>
                            <div className="lowerauth">
                        <img src={avtar} className="img-fluid" alt="..." />
                        <p>MrFox</p>
                        </div>
                         <div className="mt-4">
                            <div className="row">
                               <div className="col-6">
                                  <span>Price</span>
                                  <p>1.63 ETH</p>
                                </div>
                                 
                                <div className="col-6">
                                <div className="footer-cardset">
                                  <span>Highest Bid</span>
                                  <p>8.33 WETH</p>
                                  </div>
                                </div> 

                            </div>            
                         </div>     
                                      

                        </div>
                        </div>
                    </div>
              
             
                          
                         <div className="col-lg-4">

                         <div className="card diccard">
                         <img src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/image-placeholder-63@2x.png" className="img-fluid colimgset" alt="..." />
                         <div className="discovercard">
                           <h3 >Life on Edena</h3> 
                           <div className="lowerauth">
                        <img src={avtar} className="img-fluid " alt="..." />
                        <p>MrFox</p>
                        </div> 

                        <div className="mt-4">
                            <div className="row">
                               <div className="col-6">
                                  <span>Price</span>
                                  <p>1.63 ETH</p>
                                </div>
                                 
                                <div className="col-6">
                                <div className="footer-cardset">
                                  <span>Highest Bid</span>
                                  <p>8.33 WETH</p>
                                  </div>
                                </div> 

                            </div>            
                         </div> 
                        </div>
                            </div>
                            </div>

                            <div className="col-lg-4">
                            <div className="card diccard">

                                <img src={astro} className="img-fluid colimgset" alt="..." />
                               <div className="discovercard">
                            <h3>Astrofication</h3>
                            <div className="lowerauth">
                            <img src={avtar} className="img-fluid" alt="..." />
                          <p>MrFox</p>
                          </div>

                          <div className="mt-4">
                            <div className="row">
                               <div className="col-6">
                                  <span>Price</span>
                                  <p>1.63 ETH</p>
                                </div>
                                 
                                <div className="col-6">
                                <div className="footer-cardset">
                                  <span>Highest Bid</span>
                                  <p>8.33 WETH</p>
                                  </div>
                                </div> 

                            </div>            
                         </div> 
                        </div>
                        </div>

                         </div>
                       </div>

             </div>         
            
    )
}

export  default Discovercard;