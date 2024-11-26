// import { BalanceOverview } from "@components/ui/BalanceOverview/BalanceOverview";
import { CashFlowChart, ExpensePieChart, PortfolioChart, RevenueChart } from "@components/ui/Charts/Charts";
import { DashboardCard } from "@components/ui/DashboardCard/DashboardCard";
import { GoalsProgress } from "@components/ui/GoalsProgress/GoalsProgress";
import { MetricCard } from "@components/ui/MetrixCard/MetrixCard";
import { TransactionList } from "@components/ui/TransactionList/TransactionList";
import { DollarSign, Moon, Sun, TrendingDown, TrendingUp, Wallet } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const Home = () => {
	const { t, i18n } = useTranslation();
	const [isDarkMode, setIsDarkMode] = useState(false);

	const toggleDarkMode = () => {
		setIsDarkMode(!isDarkMode);
		document.documentElement.classList.toggle('dark');
	};

	const onTranslateButtonClick = async (): Promise<void> => {
		if (i18n.resolvedLanguage === "en") {
			await i18n.changeLanguage("es");
		} else {
			await i18n.changeLanguage("en");
		}
	};

	return (
		<>
			<div className={`min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200`}>
				<div className="container mx-auto px-4 py-8">
					{/* Header */}
					<div className="flex justify-between items-center mb-8">
						<h1 className="text-2xl font-bold text-gray-900 dark:text-white">Financial Dashboard</h1>
						<button
							onClick={toggleDarkMode}
							className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white"
						>
							{isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
						</button>
					</div>

					{/* Key Metrics */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
						<MetricCard
							title="Total Revenue"
							value="$128,500"
							change={12.5}
							icon={<DollarSign className="text-blue-600 dark:text-blue-400" />}
						/>
						<MetricCard
							title="Monthly Expenses"
							value="$42,800"
							change={-8.3}
							icon={<TrendingDown className="text-blue-600 dark:text-blue-400" />}
						/>
						<MetricCard
							title="Net Profit"
							value="$85,700"
							change={15.2}
							icon={<TrendingUp className="text-blue-600 dark:text-blue-400" />}
						/>
						<MetricCard
							title="Cash Flow"
							value="$35,200"
							change={5.8}
							icon={<Wallet className="text-blue-600 dark:text-blue-400" />}
						/>
					</div>

					{/* Charts */}
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
						<DashboardCard title="Revenue Trends">
							<RevenueChart />
						</DashboardCard>
						<DashboardCard title="Expense Categories">
							<ExpensePieChart />
						</DashboardCard>
						<DashboardCard title="Monthly Cash Flow">
							<CashFlowChart />
						</DashboardCard>
						<DashboardCard title="Investment Portfolio">
							<PortfolioChart />
						</DashboardCard>
					</div>

					{/* Bottom Section */}
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
						<DashboardCard title="Recent Transactions">
							<TransactionList />
						</DashboardCard>
						<DashboardCard title="Financial Goals">
							<GoalsProgress />
						</DashboardCard>
					</div>
				</div>
			</div>
			<p className="text-red-800 text-6xl">{t("home.greeting")}</p>
			<button type="submit" onClick={onTranslateButtonClick}>
				translate
			</button>
		</>
	);
};

export default Home;