import React from "react";

function Meals(props) {

    const mealElements = props.recipes.map((meal, index) => {
        return (
            <div key={index} className="meal-card">
                <img className="meal-image" src={meal.image} alt={meal.title} />
                <h2 className="meal-title">{meal.title}</h2>
            </div>
        );
    }); 

  return (
    <div className="meals-page">
      <h1 className="meals-title">Recipes tailored to you</h1>
      <div className="meal-container">
        {mealElements}
     </div>
    </div>
  );
}

export default Meals;