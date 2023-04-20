export function Card({ title, type, description, calories, image }) {
  
  return(
  <div className="recipe-container card">
    <a href="recipe.html" class="select-card">
      <header>
        <h4>{title}</h4>
        <p>
          <b>{type}</b>
        </p>
      </header>
      <div className="inner-container">
        <div className="info">
          <article className="description">
            <h4>{description}</h4>
          </article>
        </div>
        {/* <!--Image--> */}
        <div className="recipe-image">
          <img
            src={image}
            alt="card image"
          />
        </div>
      </div>
      <article className="specifics">
        <p>calories/portion:</p>
        <p>{calories} kcal</p>
      </article>
    </a>
  </div>
  )
}