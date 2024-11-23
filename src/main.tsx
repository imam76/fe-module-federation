import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import { createRouter } from "@tanstack/react-router";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import './common/i18n';
import { routeTree } from "./routeTree.gen.ts";
import "./styles/tailwind.css";
import theme from "./styles/theme.ts";

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
	interface Register {
		// This infers the type of our router and registers it across your entire project
		router: typeof router;
	}
}

const rootElement = document.querySelector("#root") as Element;
if (!rootElement.innerHTML) {
	const root = ReactDOM.createRoot(rootElement);
	root.render(
		<React.StrictMode>
			<React.Suspense fallback="loading">
				<MantineProvider theme={theme}>
					<App router={router} />
				</MantineProvider>
			</React.Suspense>
		</React.StrictMode>
	);
}
