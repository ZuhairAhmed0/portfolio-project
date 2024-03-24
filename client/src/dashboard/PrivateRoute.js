import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import DashboardNavbar from "../components/DashboardNavbar";
import NotFound from "../components/NotFound";
import { setMessages } from "../dashboard/messages/messagesSlice";
import { useMessages } from "../dashboard/messages/useMessages";
import { useEffect } from "react";

function PrivateRoute() {
  const { accessToken } = useSelector((store) => store.about);
  const { data: messagesData } = useMessages();
  const dispatch = useDispatch();

  useEffect(() => {
    if (messagesData) {
      dispatch(setMessages(messagesData));
    }
  }, [dispatch, messagesData]);
  return (
    <main className="dashboard">
      {accessToken ? (
        <>
          <DashboardNavbar />
          <Outlet />{" "}
        </>
      ) : (
        <NotFound />
      )}
    </main>
  );
}

export default PrivateRoute;
