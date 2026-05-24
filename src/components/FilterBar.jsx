import React from 'react';

const FilterBar = ({ currentFilter, setFilter }) => {
  const filters = ['All', 'Pending', 'Completed'];

  return (
    <div className="filter-bar">
      {filters.map((f) => (
        <button
          key={f}
          className={`filter-btn ${currentFilter === f ? 'active' : ''}`}
          onClick={() => setFilter(f)}
        >
          {f}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;
