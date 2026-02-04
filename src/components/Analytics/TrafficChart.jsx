"use client";

export default function TrafficChart() {
  const data = [
    { day: 'Mon', views: 12500 },
    { day: 'Tue', views: 15800 },
    { day: 'Wed', views: 18200 },
    { day: 'Thu', views: 16900 },
    { day: 'Fri', views: 21400 },
    { day: 'Sat', views: 19800 },
    { day: 'Sun', views: 17600 }
  ];

  const maxViews = Math.max(...data.map(d => d.views));

  return (
    <div className="glass rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white">Traffic Overview</h2>
        <div className="flex items-center space-x-2 text-sm">
          <span className="text-gray-400">Last 7 days</span>
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
        </div>
      </div>

      {/* Chart */}
      <div className="relative h-64">
        <div className="absolute inset-0 flex items-end justify-between space-x-2">
          {data.map((item, index) => (
            <div key={index} className="flex-1 flex flex-col items-center">
              <div className="w-full relative group">
                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-black/90 rounded-lg text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {item.views.toLocaleString()} views
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-2 h-2 bg-black/90 rotate-45 -mt-1"></div>
                </div>

                {/* Bar */}
                <div
                  className="w-full bg-gradient-to-t from-blue-500 to-purple-600 rounded-t-lg transition-all duration-500 hover:from-blue-400 hover:to-purple-500 cursor-pointer"
                  style={{
                    height: `${(item.views / maxViews) * 100}%`,
                    minHeight: '20px'
                  }}
                ></div>
              </div>

              {/* Day Label */}
              <div className="text-gray-400 text-sm mt-2">{item.day}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-white/10">
        <div>
          <div className="text-gray-400 text-sm mb-1">Total Views</div>
          <div className="text-white font-bold text-lg">
            {data.reduce((sum, d) => sum + d.views, 0).toLocaleString()}
          </div>
        </div>
        <div>
          <div className="text-gray-400 text-sm mb-1">Avg Daily</div>
          <div className="text-white font-bold text-lg">
            {Math.round(data.reduce((sum, d) => sum + d.views, 0) / data.length).toLocaleString()}
          </div>
        </div>
        <div>
          <div className="text-gray-400 text-sm mb-1">Peak Day</div>
          <div className="text-white font-bold text-lg">
            {data.reduce((max, d) => d.views > max.views ? d : max, data[0]).day}
          </div>
        </div>
      </div>
    </div>
  );
}
