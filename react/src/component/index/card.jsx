import {Link} from "react-router-dom";
import { truncate } from "../../JS/truncate";

export function Card({prop, title, type, description = [], calories, image }) {
  
  return(
  <div className="recipe-container card">
    <Link to="/recipe" state={prop} class="select-card">
      <header>
        <p>
          <b>{type}</b>
        </p>
      </header>
      <div className="inner-container">
        <div className="recipe-image">
          <img
            src={image}
            alt="card image"
          />
        </div>
      </div>
      <article className="specifics">
      <p><b>{truncate(title, 30)}</b></p>
      <p>calories/portion: {Math.floor(calories)} kcal</p>
      </article>
    </Link>
  </div>
  )
}