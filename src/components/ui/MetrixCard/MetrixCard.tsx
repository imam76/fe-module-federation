import { motion } from 'framer-motion';
import React from 'react';
import { ArrowDownIcon, ArrowUpIcon } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string;
  change: number;
  icon: React.ReactNode;
}

export const MetricCard: React.FC<MetricCardProps> = ({ title, value, change, icon }) => {
  const isPositive = change >= 0;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
    >
      <div className="flex items-center justify-between">
        <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
          {icon}
        </div>
        <div className={`flex items-center ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
          {isPositive ? <ArrowUpIcon size={20} /> : <ArrowDownIcon size={20} />}
          <span className="ml-1 text-sm font-medium">{Math.abs(change)}%</span>
        </div>
      </div>
      <h3 className="mt-4 text-sm font-medium text-gray-600 dark:text-gray-400">{title}</h3>
      <p className="mt-2 text-2xl font-semibold text-gray-800 dark:text-white">{value}</p>
    </motion.div>
  );
};