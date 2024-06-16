import type { FC } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../layout/layout";
import { paths } from "./paths";

interface RoutesProps {}

const Router: FC<RoutesProps> = () => {
  return (
    <Routes>
      <Route path={paths.dashboard.route} element={<Layout />}>
        {Object.entries(paths).map(([_, value]) => (
          <Route
            key={value.route}
            path={value.route}
            element={<value.component />}
          />
        ))}
      </Route>
    </Routes>
  );
};

export default Router;
