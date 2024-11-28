import { Title } from '@mantine/core';
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
      className={`bg-white dark:bg-gray-800 rounded-md shadow-sm p-6 ${className}`}
    >
      <Title order={4} mb={'3xl'}>{title}</Title>
      {children}
    </motion.div>
  );
};