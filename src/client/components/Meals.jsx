import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

function Meals(props) {
    const [getRecipes, setGetRecipes] = useState(false);
    const [imageURL, setImageURL] = useState("");
    const [imageTitle, setImageTitle] = useState("");
    const [imageDescription, setImageDescription] = useState("");
    const [imageRecipe, setImageRecipe] = useState("");

    function stripHtmlTags(text) {
        return text.replace(/<[^>]*>/g, '');
    }

    function toggleRecipes(mealImage, mealTitle, mealDescription, mealRecipe) {
        if (getRecipes) {
            setGetRecipes(false);
            setImageURL("");
            setImageTitle("");
            setImageDescription("");
            setImageRecipe("");
        } else {
            setGetRecipes(true);
            setImageURL(mealImage);
            setImageTitle(mealTitle);
            setImageDescription(stripHtmlTags(mealDescription)); // Strips HTML tags
            setImageRecipe(mealRecipe);
        }
    }

    const mealElements = props.recipes.map((meal, index) => {
        const recipeInstructions = meal.analyzedInstructions.map((instruction, instIndex) => {
            const steps = instruction.steps.map((step, stepIndex) => (
                <li key={stepIndex}>{step.step}</li>
            ));

            return (
                <div key={instIndex}>
                    <h3>Instructions</h3>
                    <ol>{steps}</ol>
                </div>
            );
        });

        return (
            <div key={index} className="meal-card" onClick={() => toggleRecipes(meal.image, meal.title, meal.summary, recipeInstructions)}>
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
            <button className="button" onClick={props.getStarted}>Change Cuisine</button>
            {
                getRecipes &&
                <div className="full-recipe-container">
                    <FontAwesomeIcon className="close-icon" icon={faCircleXmark} onClick={() => toggleRecipes()} />
                    <div className="recipe-container">
                        <img src={imageURL} alt="full-image" className="full-image" />
                        <div className="recipe-text">
                            <p className="full-image-title">{imageTitle}</p>
                            <p className="full-image-description">{imageDescription}</p>
                            <div className="full-image-recipe">{imageRecipe}</div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}

export default Meals;