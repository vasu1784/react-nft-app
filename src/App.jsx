import Navigation from "./components/Navigation"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./global.css"
import Banner from "./components/Banner";
import Trending from "./components/Trending";
import Topcreater from "./components/Topcreater";
import Authorgrid from "./components/Authorgrid";
import Browsecat from "./components/Browsecat";
import Discover from "./components/Discover";
import Discovercard from "./components/Discovercard";
import Bgsection from "./components/Bgsection";
import Howorks from "./components/Howorks";
import Joinform from "./components/Joinform";
import Footer  from "./components/Footer";

const App=()=>{
   return(
      <>
      <Banner/>
      <Trending/>
      <Topcreater/>
      <Authorgrid/>
      <Browsecat/>
      <Discover/>
      <Discovercard/>
      <Bgsection/>
      <Howorks/>
      <Joinform/>
      </>
   )
 

}

export default App;