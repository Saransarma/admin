import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Single from "./pages/single/Single";
// import New from "./pages/new/New";
import List from "./pages/list/List";
import Plant from "./pages/Plants/Plant";
//import PView from "./pages/Plants/plant_view/PView";
import PNew from "./pages/Plants/plant_new/PNew";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import { inputPlant } from "./formSource";
import Plantlist from "./pages/Plants/Plantlist";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home/>}/>
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path="userId" element={<Single/>}/>
              {/* <Route path="new" element={<New/>}/> */}
            </Route>
            <Route path="plants">
              <Route index element={<Plant />} />
              <Route path="plantId" element={<Plantlist/>}/>
              <Route path="pnew" element={<PNew inputs={inputPlant} title="Add New Plant"/>}/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
