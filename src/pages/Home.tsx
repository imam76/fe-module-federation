import { useTranslation } from "react-i18next";
import type { FunctionComponent } from "../common/types";
import { Container, Grid, Skeleton } from "@mantine/core";

const child = <Skeleton height={140} radius="md" />;

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
			<Container my="md">
				<Grid>
					<Grid.Col span={{ base: 12, xs: 4 }}>
						<p className="text-red-800 text-6xl">{t("home.greeting")}</p>
						<button type="submit" onClick={onTranslateButtonClick}>
							translate
						</button>
					</Grid.Col>
					<Grid.Col span={{ base: 12, xs: 8 }}>{child}</Grid.Col>
					<Grid.Col span={{ base: 12, xs: 8 }}>{child}</Grid.Col>
					<Grid.Col span={{ base: 12, xs: 4 }}>{child}</Grid.Col>
					<Grid.Col span={{ base: 12, xs: 3 }}>{child}</Grid.Col>
					<Grid.Col span={{ base: 12, xs: 3 }}>{child}</Grid.Col>
					<Grid.Col span={{ base: 12, xs: 6 }}>{child}</Grid.Col>
				</Grid>
			</Container>
		</>
	);
};
