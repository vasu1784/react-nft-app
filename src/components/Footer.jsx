import {FaAmazon,FaDiscord,FaGooglePay,FaFacebookF} from 'react-icons/fa';
import Sitelogo from './../assets/Storefront.svg' 

const Footer=()=>{
    return(
        <div className="container-fluid padsetbanner">
                     <div className="row footer-border">
                              <div className="col-lg-4">
                                <div className='col-lg-12 d-flex gap-3 align-items-start'>
                                <img src={Sitelogo} alt="" />
                              <h4>NFT Marketplace</h4>
                                </div>
                             
                              <p>NFT marketplace UI created with Anima for Figma.</p>
                               <span>join Our community</span>
                                            <div className="row mt-4">
                                                 <div className="col-lg-3">
                                                          <h3><FaAmazon/></h3>
                                                 </div>
                                                  <div className="col-lg-3">
                                                  <h3><FaDiscord/></h3>
                                                    </div>
                                                    <div className="col-lg-3">
                                                    <h3><FaGooglePay/></h3>
                                                    </div>
                                                    <div className="col-lg-3">
                                                    <h3><FaFacebookF/></h3>
                                                    </div>
                                            </div>

                              </div>
                              <div className="col-lg-2">
                                <h4>Explore</h4>
                                <p>Marketplace</p>
                                <p>Ranking</p>
                                <p>Connect a wallet</p>
                              </div>
                              <div className="col-lg-6">
                                 <h4>Join Our Weekly Digest</h4>
                                 <p>Get exclusive promotions & updates straight to your inbox.</p>
                                        
                                         
                                 <div className="input-group mb-3 inputformset">
                            <input
                                type="text"
                                className="form-control nfttextform mt-3"
                                placeholder="Enter Your email here"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                            />
                            <div className="input-group-append mt-3">
                                <button className="btn btn-outline-secondary form-btn" type="button">
                                  Subscribe
                                </button>
                            </div>
                        </div>

                              </div>
                     </div>
                         <div className="lowerfooter mt-4">
                         <span>&#169; NFT Market. Use this template freely.</span>
                         </div>
              
                                 
        </div>
    )
}

export default Footer;