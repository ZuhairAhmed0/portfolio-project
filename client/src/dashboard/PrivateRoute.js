import {
    Outlet
} from "react-router-dom";
import {
    
    useSelector
} from "react-redux";
import {
    useEffect
} from "react";
import DashboardNavbar from "../components/DashboardNavbar";
import NotFound from "../components/NotFound";


function PrivateRoute() {
    const {
        accessToken
    } = useSelector((store) => store.about);


    return (
        <main className="dashboard">
      {accessToken ? (
            <>
            <DashboardNavbar />
            <Outlet /> < />
        ): (
            <NotFound />
        )}
    </main>
    );
}

export default PrivateRoute;