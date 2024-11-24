import ZhrUiProvider from '@components/utils/ZhrUiProvider.tsx';
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import './common/i18n';
import "./styles/tailwind.css";

const rootElement = document.querySelector("#root") as Element;
if (!rootElement.innerHTML) {
	const root = ReactDOM.createRoot(rootElement);
	root.render(
		<React.StrictMode>
			<React.Suspense fallback="loading">
				<ZhrUiProvider>
					<App />
				</ZhrUiProvider>
			</React.Suspense>
		</React.StrictMode >
	);
}
