import { createBrowserRouter } from "react-router";
import datastore from "./datastore/datastore";

import lazyWithSuspenseWrapper from "@components/utils/lazyWithSuspenseWrapper";

const routes = createBrowserRouter([
	...datastore,
	{
		path: '*', // Menangkap semua route yang tidak cocok
		element: lazyWithSuspenseWrapper(() => import("@pages/PageNotFound")),
	},
]);

export default routes;