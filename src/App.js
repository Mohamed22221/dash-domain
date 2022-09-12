import { useState } from "react";
import SideBar from "./layouts/SideBar";
import Topbar from "./layouts/Topbar";
import DashboardUser from "./pages/user/DashboardUser";
import UserRoutes from "./routes/UserRoutes";

function App() {

  const [showSide , setShowSide] = useState(true)
  return (
    <div >
      
      <SideBar showSide={showSide} setShowSide={setShowSide} />
      <Topbar showSide={showSide} />
      <UserRoutes showSide={showSide}/>


    </div>

  );
}

export default App;
