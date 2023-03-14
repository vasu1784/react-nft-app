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


const App=()=>{


   return(
      <div>
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
      </div>
   )
 

}

export default App;