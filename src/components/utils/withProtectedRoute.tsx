import ProtectedRoute from "@components/utils/ProtectedRoute";
import { RouteObject } from "react-router";

export type ProtectedRouteObject = RouteObject & {
  protected?: boolean;
}

export default function withProtectedRoute(routes: ProtectedRouteObject[]): RouteObject[] {
  return routes.map((route) => {
    if (route.protected) {
      return {
        ...route,
        element: <ProtectedRoute>{route.element}</ProtectedRoute>,
      }
    }
    return route;
  });
}