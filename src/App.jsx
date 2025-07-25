import { Route, Routes } from "react-router-dom";
import Login from "./pages/Authntication/Login";
import Signup from "./pages/Authntication/signup";
import Intro from "./pages/Intro/Intro";
import Options from "./Component/Element/Options";
import Sidebar from "./Component/Shared/Sidebar";
import Home from "./pages/Home/Home";
import Table from "./Component/Element/Table/Table";




function App() {
    return (
        <Routes>
            <Route
                path="/Login"
              element={<Login />} />,
              <Route
                path="/signup"
              element={<Signup/>} />,
              <Route
                path="/"
              element={<Intro />} />,
              <Route
                path="/options"
              element={<Options />} />
              <Route
                path="/s"
              element={<Sidebar />} />
              <Route
              path="/T"
              element={<Table/>} />
              <Route
              path="/Home"
              element={<Home />} />
              
              
          </Routes>
    )
}
export default App;