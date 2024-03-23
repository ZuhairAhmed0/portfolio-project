import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import DashboardNavbar from "../components/DashboardNavbar";
import NotFound from "../components/NotFound";
import { useAboutInfo } from "../features/about/useAboutInfo";
import { setAboutInfo } from "../features/about/aboutSlice";
import { useMyServices } from "../features/services/useServices";
import { setServices } from "../features/services/servicesSlice";
import { useProjects } from "../features/projects/useProjects";
import { setProjects } from "../features/projects/projectsSlice";
import { useMessages } from "../dashboard/messages/useMessages";
import { setMessages } from "../dashboard/messages/messagesSlice";

function PrivateRoute() {
  const { accessToken } = useSelector((store) => store.about);

  const { data: aboutData } = useAboutInfo();
  const { data: servicesData } = useMyServices();
  const { data: projectsData } = useProjects();
  const { data: messagesData } = useMessages();

  const dispatch = useDispatch();

  useEffect(() => {
    if (aboutData) {
      dispatch(setAboutInfo(aboutData));
    }
  }, [dispatch, aboutData]);

  useEffect(() => {
    if (servicesData) {
      dispatch(setServices(servicesData));
    }
  }, [dispatch, servicesData]);

  useEffect(() => {
    if (projectsData) {
      dispatch(setProjects(projectsData));
    }
  }, [dispatch, projectsData]);

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
          <Outlet />
        </>
      ) : (
        <NotFound />
      )}
    </main>
  );
}

export default PrivateRoute;
