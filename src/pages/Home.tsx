import { Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import type { FunctionComponent } from "../common/types";

export const Home = (): FunctionComponent => {
	const { t, i18n } = useTranslation();

	const onTranslateButtonClick = async (): Promise<void> => {
		if (i18n.resolvedLanguage === "en") {
			await i18n.changeLanguage("es");
		} else {
			await i18n.changeLanguage("en");
		}
	};

	return (
		<>
			<div className="p-2 flex gap-2">
				<Link to="/">
					Home
				</Link>{' '}
				<Link to="/auth">
					About
				</Link>
			</div>
			<p className="text-red-800 text-6xl">{t("home.greeting")}</p>
			<button type="submit" onClick={onTranslateButtonClick}>
				translate
			</button>
		</>
	);
};
