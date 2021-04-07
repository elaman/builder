import PizzaControl from "./PizzaControl/PizzaControl";
import classes from "./PizzaControls.module.css";

const PizzaControls = ({ ingredients, addIngredient, removeIngredient }) => {
  const results = [];
  let total = 0;
  for (const ingredient in ingredients) {
    // Add ingredient number to totals number
    total += ingredients[ingredient];
    // Render pizza control for this ingredient
    results.push(<PizzaControl
        key={ingredient}
        add={addIngredient}
        remove={removeIngredient}
        type={ingredient} />)
  }

  return (
    <div className={classes.PizzaControls}>
      <strong>Ingredients</strong>
      {results}
      <button disabled={!total}>Order</button>
    </div>
  );
}

export default PizzaControls;