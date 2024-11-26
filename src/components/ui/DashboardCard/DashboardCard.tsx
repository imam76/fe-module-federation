import { motion } from 'framer-motion';
import React from 'react';

interface DashboardCardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export const DashboardCard: React.FC<DashboardCardProps> = ({ title, children, className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 ${className}`}
    >
      <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">{title}</h2>
      {children}
    </motion.div>
  );
};