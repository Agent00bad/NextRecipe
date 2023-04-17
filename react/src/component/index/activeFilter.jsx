export function ActiveFilter({ filters = [], header }) {
  return (
    <>
      <div className="filter-flex">
        <div className="card">
          <a id="filtersTag" className="filter-tag" href="filter.html">
            <b>Filters</b>
          </a>
          <div className="filter-list">
            <ul className="activeFilters">
                {filters.map(filter => (
                    <li><b>{filter}</b></li>
                ))};
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
