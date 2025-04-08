import { Route, Routes } from "react-router-dom";

import Login from "../Pages/Auth/Login"
import Signup from "../Pages/Auth/Signup";

function MainRoutes (){
    return(
        <Routes>
            <Route path="/login"element={<Login/>}/>
            <Route path="/signup"element={<Signup/>}/>
        </Routes>
    )

}
export default MainRoutes