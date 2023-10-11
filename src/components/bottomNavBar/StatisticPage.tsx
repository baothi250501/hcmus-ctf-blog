// src/components/StatisticsPage.tsx

import React from 'react';
import { Pie } from 'react-chartjs-2';

const StatisticsPage: React.FC = () => {
  const data = {
    labels: ['Thuỷ tinh', 'Giấy báo', 'Nhựa'],
    datasets: [
      {
        data: [84, 5, 11],
        backgroundColor: ['#FF3C82', '#2567F9', '#8F3CFF'],
      },
    ],
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-4 text-2xl font-semibold">Thống kê</h1>
      <div className="rounded-lg bg-white p-6 shadow-lg">
        <Pie data={data} />
      </div>
      <ul className="mt-4">
        <li className="flex items-center">
          <span className="mr-2 h-4 w-4 bg-red-600"></span>
          <span>Thuỷ tinh</span>
        </li>
        <li className="flex items-center">
          <span className="mr-2 h-4 w-4 bg-blue-600"></span>
          <span>Giấy báo</span>
        </li>
        <li className="flex items-center">
          <span className="mr-2 h-4 w-4 bg-purple-600"></span>
          <span>Nhựa</span>
        </li>
      </ul>
    </div>
  );
};

export default StatisticsPage;
