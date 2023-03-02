
import hworks from "../assets/hworks.svg"
const Howorks=()=>{
    return(
        <div className="container-fluid padsetbanner">
            <h2>How It Works</h2>
            <p className="my-4">Find Out How To Get Startd</p>
   
              <div className="row">
                <div className="col-lg-4 howcards">
                       <div className="card">
                       <img src={hworks} className="img-fluid" alt="..." />
                       <h4>Setup your Wallet</h4>
                            <p>Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner</p>
                       </div>
                </div>
                <div className="col-lg-4 howcards">
                             <div className="card">
                             <img src={hworks} className="img-fluid" alt="..." />
                             <h4>Create Collection</h4>
                            <p>Upload your work and setup your collection. Add a description, social links and floor price.inks and floor price.</p>
                             </div>
                </div>
                <div className="col-lg-4 howcards">
                    <div className="card">
                             <img src={hworks} className="img-fluid" alt="..." />
                           <h4>Start Earning</h4>
                            <p>Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.</p>
                        </div>
                </div>
              </div>
           
            

        </div>
         
    )

}

export default Howorks;