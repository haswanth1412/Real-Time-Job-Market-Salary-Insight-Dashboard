import React, { useState } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import './App.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const mockData = {
  jobsByCity: {
    labels: ['Bangalore', 'Hyderabad', 'Mumbai', 'Delhi', 'Chennai'],
    data: [1200, 950, 870, 760, 640],
  },
  salaries: {
    labels: ['Frontend Dev', 'Backend Dev', 'Data Scientist', 'DevOps', 'UI/UX Designer'],
    data: [6.5, 7.8, 9.2, 8.0, 5.5],
  },
};

function InsightXDashboard() {
  const [cityJobs] = useState(mockData.jobsByCity);
  const [salaries] = useState(mockData.salaries);

  return (
    <div className="p-6 font-sans min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold text-center text-indigo-600 mb-4">InsightX: Job Market Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white shadow-xl rounded-2xl p-4">
          <h2 className="text-xl font-semibold mb-2 text-gray-700">Job Availability by City</h2>
          <Bar
            data={{
              labels: cityJobs.labels,
              datasets: [
                {
                  label: 'Openings',
                  data: cityJobs.data,
                  backgroundColor: 'rgba(99, 102, 241, 0.6)',
                },
              ],
            }}
            options={{ responsive: true, maintainAspectRatio: false }}
          />
        </div>

        <div className="bg-white shadow-xl rounded-2xl p-4">
          <h2 className="text-xl font-semibold mb-2 text-gray-700">Average Salary by Role (in LPA)</h2>
          <Line
            data={{
              labels: salaries.labels,
              datasets: [
                {
                  label: 'Avg Salary (LPA)',
                  data: salaries.data,
                  borderColor: 'rgba(16, 185, 129, 1)',
                  backgroundColor: 'rgba(16, 185, 129, 0.2)',
                  fill: true,
                  tension: 0.3,
                },
              ],
            }}
            options={{ responsive: true, maintainAspectRatio: false }}
          />
        </div>
      </div>
    </div>
  );
}

export default InsightXDashboard;
