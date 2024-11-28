import React from 'react';
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const data = {
  revenue: [
    { month: 'Jan', value: 4000 },
    { month: 'Feb', value: 3000 },
    { month: 'Mar', value: 5000 },
    { month: 'Apr', value: 4500 },
    { month: 'May', value: 6000 },
    { month: 'Jun', value: 5500 },
  ],
  expenses: [
    { name: 'Operations', value: 400 },
    { name: 'Marketing', value: 300 },
    { name: 'Salaries', value: 500 },
    { name: 'Technology', value: 200 },
  ],
  cashFlow: [
    { month: 'Jan', income: 4000, expenses: 3000 },
    { month: 'Feb', income: 3000, expenses: 2800 },
    { month: 'Mar', income: 5000, expenses: 4200 },
    { month: 'Apr', income: 4500, expenses: 4000 },
    { month: 'May', income: 6000, expenses: 5300 },
    { month: 'Jun', income: 5500, expenses: 4800 },
  ],
  portfolio: [
    { month: 'Jan', stocks: 2000, bonds: 1000, crypto: 500 },
    { month: 'Feb', stocks: 2200, bonds: 1100, crypto: 600 },
    { month: 'Mar', stocks: 2400, bonds: 1200, crypto: 400 },
    { month: 'Apr', stocks: 2600, bonds: 1300, crypto: 700 },
    { month: 'May', stocks: 2800, bonds: 1400, crypto: 800 },
    { month: 'Jun', stocks: 3000, bonds: 1500, crypto: 900 },
  ],
};

export const RevenueChart: React.FC = () => (
  <ResponsiveContainer width="100%" height={300}>
    <LineChart data={data.revenue}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={2} dot={false} />
    </LineChart>
  </ResponsiveContainer>
);

export const ExpensePieChart: React.FC = () => (
  <ResponsiveContainer width="100%" height={300}>
    <PieChart>
      <Pie
        data={data.expenses}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={80}
        fill="#3b82f6"
        label
      />
      <Tooltip />
    </PieChart>
  </ResponsiveContainer>
);

export const CashFlowChart: React.FC = () => (
  <ResponsiveContainer width="100%" height={300}>
    <BarChart data={data.cashFlow}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="income" fill="#3b82f6" />
      <Bar dataKey="expenses" fill="#ef4444" />
    </BarChart>
  </ResponsiveContainer>
);

export const PortfolioChart: React.FC = () => (
  <ResponsiveContainer width="100%" height={300}>
    <AreaChart data={data.portfolio}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Area type="monotone" dataKey="stocks" stackId="1" stroke="#3b82f6" fill="#3b82f6" />
      <Area type="monotone" dataKey="bonds" stackId="1" stroke="#10b981" fill="#10b981" />
      <Area type="monotone" dataKey="crypto" stackId="1" stroke="#f59e0b" fill="#f59e0b" />
    </AreaChart>
  </ResponsiveContainer>
);