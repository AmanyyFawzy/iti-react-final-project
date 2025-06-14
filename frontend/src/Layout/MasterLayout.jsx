import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar.jsx";

export default function MasterLayout() {
  return (
    <>  
      <NavBar />    
      <Outlet />
    </>
  )
}
