import { motion } from 'framer-motion';
import React from 'react';
import { ArrowDownIcon, ArrowUpIcon } from 'lucide-react';
import { Box, Text, Title } from '@mantine/core';

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
      className="bg-white dark:bg-gray-800 rounded-md p-6 shadow-sm"
    >
      <div className="flex items-center justify-between">
        <div className="flex p-1 rounded-lg bg-blue-100 dark:bg-blue-900/30">
          {icon}
        </div>
        <div className={`flex items-center ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
          {isPositive ? <ArrowUpIcon size={20} /> : <ArrowDownIcon size={20} />}
          <span className="ml-1 text-sm font-medium">{Math.abs(change)}%</span>
        </div>
      </div>
      <Text my="md" size="sm" c={'gray.6'}>{title}</Text>
      <Title order={2} mb={'md'}>
        {value}
      </Title>
    </motion.div>
  );
};