import { createBrowserRouter } from "react-router";
import datastore from "./datastore/datastore";

import lazyWithSuspenseWrapper from "@components/utils/lazyWithSuspenseWrapper";
import dashboard from "./dashboard/dashboard";

const routes = createBrowserRouter([
	...dashboard,
	...datastore,
	{
		path: '/login',
		element: lazyWithSuspenseWrapper(() => import("@pages/login/Login")),
	},
	{
		path: '*', // Menangkap semua route yang tidak cocok
		element: lazyWithSuspenseWrapper(() => import("@pages/PageNotFound")),
	},
]);

export default routes;