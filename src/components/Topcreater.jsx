import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';


const Topcreater=()=>{
    return(
           <div className="container-fluid padsetbanner">
                    <div className="row">
                        <div className="col-lg-8">
                             <h2>Top Creators</h2>
                             <h4>Lorem ipsum dolor sit amet adipisicing elit. adipisicing</h4>
                        </div>

                        <div className="col-lg-4 btnview-source mt-4  mt-lg-0">
                        <Nav.Link  href="#vasu"><Button variant="navbtn" className='viewrank text-white'>View Rankings</Button></Nav.Link>
                        </div>
                    </div>
           </div>
    )
}



export default Topcreater;