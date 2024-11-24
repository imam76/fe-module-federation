import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import './common/i18n';
import "./styles/tailwind.css";
import theme from "./styles/theme.ts";

const rootElement = document.querySelector("#root") as Element;
if (!rootElement.innerHTML) {
	const root = ReactDOM.createRoot(rootElement);
	root.render(
		<React.StrictMode>
			<React.Suspense fallback="loading">
				<MantineProvider theme={theme}>
					<App />
				</MantineProvider>
			</React.Suspense>
		</React.StrictMode>
	);
}
