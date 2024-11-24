import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type { FunctionComponent } from "./common/types";
import { RouterProvider } from "react-router";
import routes from './routes';
// import { TanStackRouterDevelopmentTools } from "./components/utils/development-tools/TanStackRouterDevelopmentTools";

const queryClient = new QueryClient();


const App = (): FunctionComponent => {
	return (
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={routes} />
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	);
};

export default App;
