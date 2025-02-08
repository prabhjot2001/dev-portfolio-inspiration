import AboutPage from "@/pages/about-page";
import HomePage from "@/pages/home-page";
import PageNotFound from "@/pages/not-found-page";
import { Route, Routes } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={`/`} element={<HomePage />} />
      <Route path={`/about`} element={<AboutPage />} />
      <Route path={`/*`} element={<PageNotFound />} />
    </Routes>
  );
};

export default AppRoutes;
