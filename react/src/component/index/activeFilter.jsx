/********************************
  Tog ur den här
  <div className="filter-flex">
  </div>
*********************************/

export function ActiveFilter({ filters = [], header }) {
  return (
    <>
        <div id="filterCard" className="card">
          <a className="filtersTag filter-tag" href="/filter">
            <b>Filters</b>
          </a>
          <div className="filter-list">
            <ul id="filterList">
                {filters.map(filter => (
                    <li><b>{filter}</b></li>
                ))}
            </ul>
        </div>
      </div>
    </>
  );
}
