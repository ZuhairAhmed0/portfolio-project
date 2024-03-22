import { Outlet } from "react-router-dom";
import DashboardNavbar from "../components/DashboardNavbar";
import NotFound from "../components/NotFound";

function PrivateRoute() {
  const isAddmin = true;
  return (
    <main className="dashboard">
      {isAddmin ? (
        <>
          <DashboardNavbar />
          <Outlet />
        </>
      ) : (
        <NotFound />
      )}
    </main>
  );
}

export default PrivateRoute;
