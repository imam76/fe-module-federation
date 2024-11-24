import { useTranslation } from "react-i18next";

const Home = () => {
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
			<p className="text-red-800 text-6xl">{t("home.greeting")}</p>
			<button type="submit" onClick={onTranslateButtonClick}>
				translate
			</button>
		</>
	);
};

export default Home;