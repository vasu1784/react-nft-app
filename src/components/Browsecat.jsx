import { useEffect } from "react";
import { useState } from "react";
const Catcard = ({cat}) => {
  return (
    <>
      <div className="card browcard">
      
        <div
          className="avatarss"
        ></div>
        <h4 className="nameavt text-center catheadset">{cat.firstName}</h4>

      </div>
    </>
  );
};

const Browsecat =()=> {
  const [userData, setuserData] = useState([]);

  useEffect(()=>{
    fetch('https://dummyjson.com/users?limit=8').then(res=>res.json()).then(data=>setuserData(data.users));
  },[])

        

        //  console.log(userData);
       

     

          const category = userData.map((cat)=>{
            return (
         
              <div className="col-lg-3" key={cat.id}>
                <Catcard cat={cat}/>
              </div>
           
            );
          });

  return (
<div className="container-fluid padsetbanner">
      <div className="row catrow">
      <h2 className="pb-4">Browse Categories</h2>
      {category}
      </div>
    </div>
  );
};

export default Browsecat;
