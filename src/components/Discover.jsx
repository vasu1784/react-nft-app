import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';


const Discover=()=>{
    return(
           <div className="container-fluid padsetbanner">
                    <div className="row">
                        <div className="col-lg-8">
                             <h2>Discover More Nfts</h2>
                             <h4>Explore New Trending Nfts</h4>
                        </div>

                        <div className="col-lg-4 btnview-source mt-4  mt-lg-0">
                        <Nav.Link  href="#vasu"><Button variant="navbtn" className='viewrank text-white'>See All</Button></Nav.Link>
                        </div>
                    </div>
           </div>
    )
}



export default Discover;