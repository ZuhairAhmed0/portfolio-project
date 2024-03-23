import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/Home";
import ProjectDetails from "./features/projects/ProjectDetails";
import PrivateRoute from "./dashboard/PrivateRoute";

import NotFound from "./components/NotFound";
import About from "./dashboard/about/About";
import Messages from "./dashboard/messages/Messages";
import Services from "./dashboard/services/Services";
import Projects from "./dashboard/projects/Projects";
import Login from "./features/auth/Login";


function App() {
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
