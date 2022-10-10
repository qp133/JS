import React from 'react'
import IngredientsList from "./IngredientsList";
import Instruction from "./Instruction";

export default function recipes({ name, ingredients, steps }) {
  return (
    <section id={name.toLowerCase().replace(/ /g, "-")}>
        <h1>{name}</h1>
        <ul className="ingredients">
            {ingredients.map((ingredient, i) => (
                <li key={i}>{ingredient.name}</li>
            ))}
        </ul>
        <section className="instructions">
            <h2>Cooking Instructions</h2>
            {steps.map((step, i) => (
                <p key={i}>{step}</p>
            ))}
        </section>

        <h1>{name}</h1>
        <IngredientsList list = {ingredients} />
        <Instruction title = "Cooking Instruction" steps = {steps} />
    </section>
  )
}
