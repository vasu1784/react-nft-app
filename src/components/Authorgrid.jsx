import { useEffect } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";


const API_BASE = "https://dummyjson.com";

const Authorcard = ({ user }) => {
  return (
    <>
      <div className="card authercards">
        <span className="avtarindex">{user.id}</span>
        <div
          className="avatar"
          style={{ backgroundImage: "url(" + user.image + ")" }}
        ></div>
        <h4 className="nameavt">{user.firstName}</h4>
        <span>Total Sales:{user.weight} ETH</span>
      </div>
    </>
  );
};

const Authorgrid = () => {

const [isloading , setisloading] = useState(false)
  const [userData, setUserData] = useState({
    users: [],
    limit: 10,
    total: null
  });

  const fetchData = () => {
    return fetch(`${API_BASE}/users?limit=${userData.limit}`)
      .then((res) => res.json())
      .then((data) => data);
  };

  useEffect(() => {
    setisloading(true)
    fetchData().then((data) => {
      setUserData((prev) => ({
        ...prev,
        ...data,
      }));
        setisloading(false);
    });
  }, [userData.limit]);

  const loadmoreHandler = () => {
    setUserData((prev) => ({
      ...prev,
      limit: prev.limit + 10,
    }));
  };

  console.log(userData);

  const creater = userData.users.map((user, index) => {
    return (
      <div className="col-lg-3" key={index}>
        <Authorcard user={user} />
      </div>
    );
  });

  return (
    <div className="container-fluid padsetbanner">
      <div className="row autherrowset">{creater}</div>
      <div className="col-lg-12 loadmore mt-4  mt-lg-0 text-center">
        {userData.total !== userData.users.length &&  <Button
            variant="navbtn"
            className="viewrank text-white"
            onClick={loadmoreHandler}
          >
            {isloading ? "Loading..." : "Load More"}
          </Button>}
         
      </div>
    </div>
  );
};
export default Authorgrid;
