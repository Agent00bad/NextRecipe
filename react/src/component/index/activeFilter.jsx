import {Link} from "react-router-dom" 

/********************************
  Tog ur den här
  <div className="filter-flex">
  </div>
*********************************/

export function ActiveFilter({ filters = [], header }) {
  return (
    <>
        <div id="filterCard" className="card">
          <Link to="/filter"className="filtersTag filter-tag">
            <b>Filters</b>
          </Link>
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
