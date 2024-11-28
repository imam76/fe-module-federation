import React from 'react';
import { motion } from 'framer-motion';

const transactions = [
  { id: 1, description: 'Client Payment', amount: 2500, type: 'income', date: '2024-03-15' },
  { id: 2, description: 'Office Supplies', amount: -150, type: 'expense', date: '2024-03-14' },
  { id: 3, description: 'Software License', amount: -299, type: 'expense', date: '2024-03-13' },
  { id: 4, description: 'Consulting Fee', amount: 1800, type: 'income', date: '2024-03-12' },
  { id: 5, description: 'Marketing Campaign', amount: -450, type: 'expense', date: '2024-03-11' },
];

export const TransactionList: React.FC = () => {
  return (
    <div className="overflow-hidden">
      <div className="flow-root">
        <ul role="list" className="-my-6 divide-y divide-gray-200 dark:divide-gray-700">
          {transactions.map((transaction, index) => (
            <motion.li
              key={transaction.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="py-4"
            >
              <div className="flex items-center space-x-4">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                    {transaction.description}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
                    {transaction.date}
                  </p>
                </div>
                <div className={`inline-flex items-center text-sm ${transaction.type === 'income' ? 'text-green-500' : 'text-red-500'
                  }`}>
                  {transaction.type === 'income' ? '+' : '-'}${Math.abs(transaction.amount)}
                </div>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
};