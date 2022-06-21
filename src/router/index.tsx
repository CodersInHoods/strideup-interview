import { Route, Routes, Navigate } from "react-router-dom";
import { routes } from "router/routes";
import { Page404 } from "pages";

export const Router = () => (
  <Routes>
    {routes.map(({ path, component: Component }, routeIndex) => {
      return <Route path={path} element={<Component />} key={routeIndex} />;
    })}

    <Route path={"/404"} element={<Page404 />} />
    <Route path="*" element={<Navigate to="/404" replace />} />
  </Routes>
);
