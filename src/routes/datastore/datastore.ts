import lazyWithSuspenseWrapper from "@components/utils/lazyWithSuspenseWrapper";
import withProtectedRoute, { ProtectedRouteObject } from "@components/utils/withProtectedRoute";

const datastore: ProtectedRouteObject[] = [
  {
    path: '/datastore',
    element: lazyWithSuspenseWrapper(() => import("@pages/datastore/Datastore")),
    protected: true,
  }
];

export default withProtectedRoute(datastore);