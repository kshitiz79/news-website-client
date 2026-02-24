"use client";

export default function RevenueChart() {
  const data = [
    { month: 'Jan', revenue: 450.23 },
    { month: 'Feb', revenue: 678.45 },
    { month: 'Mar', revenue: 892.67 },
    { month: 'Apr', revenue: 1023.89 },
    { month: 'May', revenue: 1156.34 },
    { month: 'Jun', revenue: 1234.56 }
  ];

  const maxRevenue = Math.max(...data.map(d => d.revenue));
  const totalRevenue = data.reduce((sum, d) => sum + d.revenue, 0);
  const avgGrowth = ((data[data.length - 1].revenue - data[0].revenue) / data[0].revenue * 100).toFixed(1);

  return (
    <div className="bg-white border border-gray-100 shadow-sm rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Revenue Growth</h2>
        <div className="px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full text-green-400 text-sm font-semibold">
          +{avgGrowth}%
        </div>
      </div>

      {/* Chart */}
      <div className="relative h-64">
        {/* Grid Lines */}
        <div className="absolute inset-0 flex flex-col justify-between">
          {[0, 1, 2, 3, 4].map((i) => (
            <div key={i} className="border-t border-gray-100"></div>
          ))}
        </div>

        {/* Line Chart */}
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
          {/* Gradient Definition */}
          <defs>
            <linearGradient id="revenueGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Area */}
          <path
            d={`
              M 0,${256 - (data[0].revenue / maxRevenue * 256)}
              ${data.map((d, i) => 
                `L ${(i / (data.length - 1)) * 100}%,${256 - (d.revenue / maxRevenue * 256)}`
              ).join(' ')}
              L 100%,256
              L 0,256
              Z
            `}
            fill="url(#revenueGradient)"
          />

          {/* Line */}
          <path
            d={`
              M 0,${256 - (data[0].revenue / maxRevenue * 256)}
              ${data.map((d, i) => 
                `L ${(i / (data.length - 1)) * 100}%,${256 - (d.revenue / maxRevenue * 256)}`
              ).join(' ')}
            `}
            fill="none"
            stroke="#10b981"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Points */}
          {data.map((d, i) => (
            <g key={i}>
              <circle
                cx={`${(i / (data.length - 1)) * 100}%`}
                cy={256 - (d.revenue / maxRevenue * 256)}
                r="6"
                fill="#10b981"
                className="hover:r-8 transition-all cursor-pointer"
              />
              <circle
                cx={`${(i / (data.length - 1)) * 100}%`}
                cy={256 - (d.revenue / maxRevenue * 256)}
                r="3"
                fill="white"
              />
            </g>
          ))}
        </svg>

        {/* Month Labels */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-between px-2">
          {data.map((item, index) => (
            <div key={index} className="text-gray-500 text-sm">
              {item.month}
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-gray-100">
        <div>
          <div className="text-gray-500 text-sm mb-1">Total Revenue</div>
          <div className="text-gray-900 font-bold text-lg">
            ${totalRevenue.toFixed(2)}
          </div>
        </div>
        <div>
          <div className="text-gray-500 text-sm mb-1">Avg Monthly</div>
          <div className="text-gray-900 font-bold text-lg">
            ${(totalRevenue / data.length).toFixed(2)}
          </div>
        </div>
        <div>
          <div className="text-gray-500 text-sm mb-1">This Month</div>
          <div className="text-gray-900 font-bold text-lg">
            ${data[data.length - 1].revenue.toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  );
}
