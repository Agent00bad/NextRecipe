import {Link} from "react-router-dom";
import { truncate } from "../../JS/truncate";
import playsound from "../../JS/soundEffects";

export function Card({prop, title, type, description = [], calories, image }) {
  var sound = new playsound();

  return(
    <div className="recipe-container card" /*onMouseEnter={sound.sayHello()}*/>
    <Link to="/recipe" state={prop} className="select-card">
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
      <p><strong>{truncate(title, 30)}</strong></p>
      <p>calories/portion: {Math.floor(calories)} kcal</p>
      </article>
    </Link>
  </div>
  )

 
}