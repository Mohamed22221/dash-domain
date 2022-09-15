import { useState } from "react";
import SideBar from "./layouts/SideBar";
import Topbar from "./layouts/Topbar";
import DashboardUser from "./pages/user/DashboardUser";
import UserRoutes from "./routes/UserRoutes";

function App() {

  const [showSide , setShowSide] = useState(true)
  const [showSideSm , setShowSideSm] = useState(true)

  return (
    <div >
      
      <SideBar showSide={showSide} setShowSide={setShowSide} showSideSm={showSideSm} setShowSideSm={setShowSideSm} />
      <Topbar showSide={showSide} showSideSm={showSideSm} setShowSideSm={setShowSideSm}  />
      <UserRoutes showSide={showSide}/>


    </div>

  );
}

export default App;
