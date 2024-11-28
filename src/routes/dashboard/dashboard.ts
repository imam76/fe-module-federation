import lazyWithSuspenseWrapper from "@components/utils/lazyWithSuspenseWrapper";
import withProtectedRoute, { ProtectedRouteObject } from "@components/utils/withProtectedRoute";

const dashboard: ProtectedRouteObject[] = [
  {
    path: '/',
    element: lazyWithSuspenseWrapper(() => import("@pages/Home")),
    protected: true,
  }
];

export default withProtectedRoute(dashboard);