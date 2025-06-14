import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Pages/Login";
import MasterLayout from "./Layout/MasterLayout";
import AuthLayout from "./Layout/AuthLayout";
import Register from "./Pages/Register";
import { ToastContainer } from "react-toastify";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          {/*auth routing */}
          <Route path="/" element={<AuthLayout />}>
            <Route index element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>

          {/*main website routing */}
          <Route path="Home" element={<MasterLayout />}>
            <Route path="/Home" element={<Home />}></Route>
          </Route>

          {/*Not Found Page */}
          <Route path="*" element={<NotFound />} />
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
