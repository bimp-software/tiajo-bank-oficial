import { Outlet } from "react-router-dom";

import "../shared/assets/styles/bootstrap.min.css";
import "../shared/assets/styles/bootstrap-icons.min.css";
import "../shared/assets/styles/auth/auth.css";

import "../shared/assets/js/bootstrap.min.js";

export default function LayoutAuth(){
    return (
        <>
            <Outlet/>
        </>
    );
}
