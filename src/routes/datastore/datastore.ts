import lazyWithSuspenseWrapper from "@components/utils/lazyWithSuspenseWrapper";
import { RouteObject } from "react-router";

const datastore: RouteObject[] = [
  {
    path: '/datastore',
    element: lazyWithSuspenseWrapper(() => import("@pages/Home"))
  }
];

export default datastore;