const Filters = ({ filters, setFilters, data }) => {
  // Extract unique filter options
  const getUniqueValues = (key) =>
    [...new Set(data.map((d) => d[key]).filter(Boolean))];

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <div className="mb-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 bg-white p-4 rounded-lg shadow-md">
      {[
        { name: "country", label: "Country" },
        { name: "region", label: "Region" },
        { name: "sector", label: "Sector" },
        { name: "topic", label: "Topic" },
        { name: "pestle", label: "PEST" },
        { name: "source", label: "Source" },
        { name: "swot", label: "SWOT" },
        { name: "end_year", label: "End Year" },
      ].map(({ name, label }) => (
        <div key={name} className="flex flex-col">
          <label className="text-sm font-semibold text-gray-700 mb-1">
            {label}
          </label>
          <select
            name={name}
            value={filters[name]}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded"
          >
            <option value="">{`All ${label}s`}</option>
            {getUniqueValues(name).map((value, index) => (
              <option key={index} value={value}>
                {value}
              </option>
            ))}
          </select>
        </div>
      ))}
    </div>
  );
};

export default Filters;
