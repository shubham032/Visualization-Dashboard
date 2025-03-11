import { Bar, Line, Pie, Bubble } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  ArcElement,
  BubbleController,
} from "chart.js";

// Register required Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  ArcElement,
  BubbleController
);

const Charts = ({ filteredData }) => {
  if (filteredData.length === 0) {
    return <p className="text-center text-gray-500">No data available for selected filters.</p>;
  }

  // Extract data 
  const countryLabels = [...new Set(filteredData.map((d) => d.country || "Unknown"))];
  const sectorLabels = [...new Set(filteredData.map((d) => d.sector || "Unknown"))];
  const years = [...new Set(filteredData.map((d) => d.start_year || "Unknown"))].filter(
    (year) => year !== "Unknown"
  );
  const regions = [...new Set(filteredData.map((d) => d.region || "Unknown"))];

  // Bar Chart: Intensity by Country
  const intensityData = {
    labels: countryLabels,
    datasets: [
      {
        label: "Average Intensity",
        data: countryLabels.map(
          (country) =>
            filteredData
              .filter((d) => d.country === country)
              .reduce((sum, d) => sum + (d.intensity || 0), 0) /
            filteredData.filter((d) => d.country === country).length
        ),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  // Line Chart: Likelihood Trend Over Time
  const lineData = {
    labels: years.sort(),
    datasets: [
      {
        label: "Average Likelihood Over Time",
        data: years.map(
          (year) =>
            filteredData
              .filter((d) => d.start_year === year)
              .reduce((sum, d) => sum + (d.likelihood || 0), 0) /
            filteredData.filter((d) => d.start_year === year).length
        ),
        borderColor: "blue",
        backgroundColor: "rgba(0, 0, 255, 0.2)",
      },
    ],
  };

  // Pie Chart: Sector-Wise Distribution
  const sectorData = {
    labels: sectorLabels,
    datasets: [
      {
        data: sectorLabels.map(
          (sector) => filteredData.filter((d) => d.sector === sector).length
        ),
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
        ],
      },
    ],
  };

  // Stacked Bar Chart: Region-wise Relevance
  const regionData = {
    labels: regions,
    datasets: [
      {
        label: "Average Relevance",
        data: regions.map(
          (region) =>
            filteredData
              .filter((d) => d.region === region)
              .reduce((sum, d) => sum + (d.relevance || 0), 0) /
            filteredData.filter((d) => d.region === region).length
        ),
        backgroundColor: "rgba(255, 159, 64, 0.8)",
      },
    ],
  };

  // Bubble Chart: Likelihood vs. Relevance vs. Intensity
  const bubbleData = {
    datasets: filteredData.slice(0, 20).map((d, index) => ({
      label: d.country || `Data ${index + 1}`,
      data: [
        {
          x: d.likelihood || 1,
          y: d.relevance || 1,
          r: d.intensity || 5,
        },
      ],
      backgroundColor: `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(
        Math.random() * 255
      )}, ${Math.floor(Math.random() * 255)}, 0.6)`,
    })),
  };

  return (
    <>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
      {/* Bar Chart */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-2">Intensity by Country</h2>
        <Bar data={intensityData} />
      </div>

      {/* Line Chart */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-2">Likelihood Trend Over Time</h2>
        <Line data={lineData} />
      </div>

      {/* Pie Chart */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-2">Sector-Wise Distribution</h2>
        <Pie data={sectorData} />
      </div>

      {/* Stacked Bar Chart */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-2">Region-wise Relevance</h2>
        <Bar data={regionData} />
      </div>
    </div>

          {/* Bubble Chart */}
          <div className="bg-white p-4 rounded-lg shadow-md mt-4">
          <h2 className="text-xl font-semibold mb-2">Likelihood vs. Relevance vs. Intensity</h2>
          <Bubble data={bubbleData} />
        </div>
    </>
  );
};

export default Charts;
