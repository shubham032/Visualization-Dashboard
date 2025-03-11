import { useState, useEffect } from "react";
import axios from "axios";
import Charts from "./Charts";
import Filters from "./Filters";

const Body = () => {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    country: "",
    sector: "",
    topic: "",
    end_year: "",
    region: "",
    pestle: "",
    source: "",
    swot: "",
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:5000/api/insights/");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  const filteredData = data.filter((item) => {
    return (
      (filters.country === "" || item.country === filters.country) &&
      (filters.sector === "" || item.sector === filters.sector) &&
      (filters.topic === "" || item.topic === filters.topic) &&
      (filters.end_year === "" || item.end_year === filters.end_year) &&
      (filters.region === "" || item.region === filters.region) &&
      (filters.pestle === "" || item.pestle === filters.pestle) &&
      (filters.source === "" || item.source === filters.source) &&
      (filters.swot === "" || item.swot === filters.swot) 
    );
  });

  return (
    <div className="p-4 bg-slate-200">
      <h1 className="text-2xl font-bold mb-4">Data Visualization</h1>
      <Filters filters={filters} setFilters={setFilters} data={data} />
      <Charts filteredData={filteredData} />
    </div>
  );
};

export default Body;
