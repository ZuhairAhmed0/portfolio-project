import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/Home";
import ProjectDetails from "./features/projects/ProjectDetails";
import PrivateRoute from "./dashboard/PrivateRoute";
import { useDispatch } from "react-redux";
import NotFound from "./components/NotFound";
import About from "./dashboard/about/About";
import Messages from "./dashboard/messages/Messages";
import Services from "./dashboard/services/Services";
import Projects from "./dashboard/projects/Projects";
import Login from "./features/auth/Login";
import { useAboutInfo } from "./features/about/useAboutInfo";
import { setAboutInfo } from "./features/about/aboutSlice";
import { useMyServices } from "./features/services/useServices";
import { setServices } from "./features/services/servicesSlice";
import { useProjects } from "./features/projects/useProjects";
import { setProjects } from "./features/projects/projectsSlice";

import { useEffect } from "react";

function App() {
  const { data: aboutData } = useAboutInfo();
  const { data: servicesData } = useMyServices();
  const { data: projectsData } = useProjects();

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

  
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="projects/:name" element={<ProjectDetails />} />
        <Route path="login" element={<Login />} />
      </Route>
      <Route path="dashboard/*" element={<PrivateRoute />}>
        <Route index element={<About />} />
        <Route path="about" element={<About />} />
        <Route path="messages" element={<Messages />} />
        <Route path="services" element={<Services />} />
        <Route path="projects" element={<Projects />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
