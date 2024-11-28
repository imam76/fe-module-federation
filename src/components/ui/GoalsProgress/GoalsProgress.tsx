import React from 'react';
import { motion } from 'framer-motion';

const goals = [
  { id: 1, name: 'Emergency Fund', current: 8000, target: 10000, color: 'bg-blue-500' },
  { id: 2, name: 'Retirement Savings', current: 45000, target: 100000, color: 'bg-green-500' },
  { id: 3, name: 'Home Down Payment', current: 15000, target: 50000, color: 'bg-yellow-500' },
];

export const GoalsProgress: React.FC = () => {
  return (
    <div className="space-y-4">
      {goals.map((goal) => {
        const progress = (goal.current / goal.target) * 100;

        return (
          <div key={goal.id} className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="font-medium text-gray-700 dark:text-gray-300">{goal.name}</span>
              <span className="text-gray-500 dark:text-gray-400">
                ${goal.current.toLocaleString()} / ${goal.target.toLocaleString()}
              </span>
            </div>
            <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                className={`h-full ${goal.color}`}
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 1, ease: "easeOut" }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};